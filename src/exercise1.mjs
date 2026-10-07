export function validateArrayElements(arr, elementValidator) {
  return arr.map(value => ({ value, isValid: elementValidator(value) }));
}