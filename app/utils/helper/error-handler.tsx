import { FormError } from 'components/Form/form.interface';
import { ErrorTypes } from 'utils/global.interface';

export const getErrorMessage = (validators: FormError[], error: ErrorTypes) => {
  if (!error) {
    return '';
  }

  const currentError = validators
    .map(errorValidator => error === errorValidator.type && errorValidator)
    .filter(val => val);

  return currentError && currentError[0] ? currentError[0].message : '';
};

function getValidationFormat(validator: FormError) {
  switch (validator.type) {
    case ErrorTypes.REQUIRED:
      return {
        required: validator.errorValue,
      };
    case ErrorTypes.MIN_LENGTH:
      return {
        minLength: validator.errorValue,
      };
    case ErrorTypes.MAX_LENGTH:
      return {
        maxLength: validator.errorValue,
      };
    case ErrorTypes.MIN:
      return { min: validator.errorValue };
    case ErrorTypes.MAX:
      return { max: validator.errorValue };
    case ErrorTypes.PATTERN:
      return {
        pattern: validator.errorValue,
      };
    case ErrorTypes.VALIDATE:
      return {
        validate: validator.errorValue,
      };
    default:
      return {};
  }
}

export const getValidators = (validators: FormError[]) => {
  let rolesObject = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const validator of validators) {
    const formattedValidator = getValidationFormat(validator);
    rolesObject = { ...rolesObject, ...formattedValidator };
  }

  return rolesObject;
};
