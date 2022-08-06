export default function contactValidation(
  value,
  name,
  contactValidationConditions
) {
  const errors = [];
  contactValidationConditions[0].type = value != "" ? "valid" : "invalid";
  contactValidationConditions[1].type = /^[\S]+$/.test(value)
    ? "valid"
    : "invalid";
  contactValidationConditions[2].type = /^\+?(88)?01(1|[3-9])\d{8}$/.test(value)
    ? "valid"
    : "invalid";
  return contactValidationConditions;
}
