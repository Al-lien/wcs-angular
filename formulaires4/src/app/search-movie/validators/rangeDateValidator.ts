import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangeDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentYear = new Date().getFullYear();
    const isValid = control.value <= currentYear && control.value >= 1900;

    if (isValid) {
      return null;
    } else {
      const errors: ValidationErrors = {};
      if (control.value < 1900) {
        errors['min'] = {
          value: control.value,
          expected: 1900,
          message: 'Year must be greater than or equal to 1900.',
        };
      }
      if (control.value > currentYear) {
        errors['max'] = {
          value: control.value,
          expected: currentYear,
          message: `Year must be less than or equal to ${currentYear}`,
        };
      }
      return errors;
    }
  };
}
