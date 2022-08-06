export default function emailValidation(
  value,
  name,
  emailValidationConditions
) {
  const errors = [];
  emailValidationConditions[0].type = value != "" ? "valid" : "invalid";
  emailValidationConditions[1].type = /^[\S]+$/.test(value)
    ? "valid"
    : "invalid";
  emailValidationConditions[2].type = /^\w{2,}@\w{2,20}\.\w{2,5}$/.test(value)
    ? "valid"
    : "invalid";
  return emailValidationConditions;
}
