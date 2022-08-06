export default function nameValidation(value, name, nameValidationConditions) {
  const errors = [];
  nameValidationConditions[0].type = value != "" ? "valid" : "invalid";
  // except this  /^(?!.*exceptThisRegExpression).*/
  nameValidationConditions[1].type = /^(?!.*[0-9]).*/.test(value)
    ? "valid"
    : "invalid";
  nameValidationConditions[2].type = /^[a-zA-Z\s\.]{1,}$/.test(value)
    ? "valid"
    : "invalid";
  nameValidationConditions[3].type = value.length > 3 ? "valid" : "invalid";
  nameValidationConditions[4].type = value.length <= 255 ? "valid" : "invalid";
  return nameValidationConditions;
}
