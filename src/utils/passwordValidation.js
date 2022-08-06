export default function passwordValidation(
  value,
  name,
  passwordValidationConditions
) {
  const errors = [];
  // all at once /(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[!@#%$&*]){1})/
  passwordValidationConditions[0].type = value != "" ? "valid" : "invalid";
  passwordValidationConditions[1].type = /(.*[A-Z].*)/.test(value)
    ? "valid"
    : "invalid";
  passwordValidationConditions[2].type = /(.*[a-z].*)/.test(value)
    ? "valid"
    : "invalid";
  passwordValidationConditions[3].type = /(.*\d.*)/.test(value)
    ? "valid"
    : "invalid";
  passwordValidationConditions[4].type = /(.*\W.*)/.test(value)
    ? "valid"
    : "invalid";
  return passwordValidationConditions;
}
