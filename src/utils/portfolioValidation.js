export default function portfolioValidation(
  value,
  name,
  portfolioValidationConditions
) {
  const errors = [];
  portfolioValidationConditions[0].type = value != "" ? "valid" : "invalid";
  portfolioValidationConditions[1].type =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      value
    )
      ? "valid"
      : "invalid";
  return portfolioValidationConditions;
}
