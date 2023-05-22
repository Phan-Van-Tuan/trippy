import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EMAIL_REG_EXP, USER_REG_EXP } from '@core/constants';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { PASSWORD_REG_EXP } from '../../core/constants/regex.constant';
import { RoleFacade, ToastNotificationService } from '@core/services';
import { RoleCode } from 'src/libs/core/enum/role-code.enum';
import { IRegisterForm } from './register.form';
import { UserFacade } from '@core/services/user';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  faStarOfLife = faStarOfLife;
  roles$ = this.roleFacade.roles$;
  RoleCode = RoleCode;
  form!: FormGroup<IRegisterForm>;
  isLoading = false;
  isLoadingCreate = false;
  constructor(
    private roleFacade: RoleFacade,
    private userFacade: UserFacade,
    private notifiService: ToastNotificationService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.roleFacade
      .getAllRole()
      .pipe(tap(() => (this.isLoading = false)))
      .subscribe();
    this.createForm();
  }

  private createForm() {
    this.form = new FormGroup({
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(USER_REG_EXP)],
        updateOn: 'change',
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(EMAIL_REG_EXP)],
        updateOn: 'change',
      }),
      roleId: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(PASSWORD_REG_EXP)],
        updateOn: 'change',
      }),
      active: new FormControl(true, { nonNullable: true }),
    });
  }

  onSubmit() {
    this.isLoadingCreate = true;
    this.userFacade
      .createUser(this.form.value)
      .pipe(
        tap(() => {
          this.isLoadingCreate = false;
          this.notifiService.success('Success', 'Created user');
          this.form.reset();
        })
      )
      .subscribe();
  }
}
