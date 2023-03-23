function validateForms(values) {
  const errors = {};

  if (values.name.length === 0) {
    errors.name = "Please enter valid values";
  }
  if (values.description.length === 0) {
    errors.description = "Please enter valid values";
  }
  if (!/^https:\/\/robohash\.org\//.test(values.image)) {
    errors.image = "Please enter valid values";
  }
  if (values.timeForDone !== undefined && values.timeForDone.length === 0) {
    errors.timeForDone = "Please enter valid values";
  }
  // if (values.ingredients !== undefined && values.ingredients.length === 0) {
  //   errors.ingredients = "Please enter valid values";
  // }
  if (values.recipe !== undefined && values.recipe.length === 0) {
    errors.recipe = "Please enter valid values";
  }
  return errors;
}

export default validateForms;
