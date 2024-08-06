import { RESPONSE_ERROR_MESSAGES } from "../constants/responseErrorMessages.js";
import { ValidationError } from "../entities/validationError.js";
import { removeKeysFromObject } from "./removeKeysFromObject.js";

const INVALID_VALUES = [null, undefined, ""];

export const validator = (validationSchema) => {
  return (fields) => {
    const validationSchemaEntries = Object.entries(validationSchema);
    const validationSchemaKeys = Object.keys(validationSchema);

    for (const [key, value] of validationSchemaEntries) {
      if (value.required && key in fields === false) {
        throw new Error(RESPONSE_ERROR_MESSAGES.invalidDataType.id);
      }
    }

    const filteredObject = removeKeysFromObject(
      { ...fields },
      validationSchemaKeys
    );

    for (const [key, { type, required }] of validationSchemaEntries) {
      const filteredObjectProperty = filteredObject[key];

      if (required && INVALID_VALUES.includes(filteredObjectProperty)) {
        throw new ValidationError(`The "${key}" field is required.`);
      }

      if (required && typeof filteredObjectProperty !== type) {
        throw new ValidationError(`The "${key}" field must be a ${type}.`);
      }
    }

    return filteredObject;
  };
};
