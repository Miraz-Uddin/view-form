export default function usernameValidation(
  value,
  name,
  usernameValidationConditions
) {
  const errors = [];
  usernameValidationConditions[0].type = value != "" ? "valid" : "invalid";
  usernameValidationConditions[1].type = /^[\S]+$/.test(value)
    ? "valid"
    : "invalid";
  usernameValidationConditions[2].type = value.length > 5 ? "valid" : "invalid";
  return usernameValidationConditions;
}
