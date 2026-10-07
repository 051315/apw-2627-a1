import { validateArrayElements } from "./exercise1.mjs";

export function validateAndCorrectArray(arr, elementValidator, defaultValue) {
  const results = validateArrayElements(arr, elementValidator);
  return {
    correctedArray: results.map(r => (r.isValid ? r.value : defaultValue)),
    invalidElements: results.filter(r => !r.isValid).map(r => r.value)
  };
}