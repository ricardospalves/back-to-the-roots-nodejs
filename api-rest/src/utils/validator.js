import { RESPONSE_ERROR_MESSAGES } from "../constants/responseErrorMessages.js";
import { ValidationError } from "../entities/validationError.js";
import { removeKeysFromObject } from "./removeKeysFromObject.js";

export const validator = (validationSchema) => {
  return (fields) => {
    const validationSchemaKeys = Object.keys(validationSchema);

    for (const validationKey of validationSchemaKeys) {
      if (validationKey in fields === false) {
        throw new Error(RESPONSE_ERROR_MESSAGES.invalidDataType.id);
      }
    }

    const filteredObject = removeKeysFromObject(
      { ...fields },
      validationSchemaKeys
    );
    const validationSchemaRequireds = Object.entries(validationSchema).filter(
      ([key, { required }]) => required
    );

    for (const [key, { type, required }] of validationSchemaRequireds) {
      const filteredObjectProperty = filteredObject[key];

      if (!filteredObjectProperty) {
        throw new ValidationError(`The "${key}" field is required.`);
      }

      if (typeof filteredObjectProperty !== type) {
        throw new ValidationError(`The "${key}" field must be a ${type}.`);
      }
    }

    return filteredObject;
  };
};
