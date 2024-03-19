import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const isValid = (control.value as string).endsWith('wilder.school');

  if (!isValid) {
    const errors: ValidationErrors = {};
    errors['email'] = {
      value: control.value,
      message: 'Must be a valid email that end with "wilder.school"',
    };
    return errors;
  } else {
    return null;
  }
}
