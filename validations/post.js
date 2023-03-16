const Validator = require("validator");
const validText = require("./valid.text");

module.exports = function validatePostInput(data) {

  let errors = {};

  data.title = validText(data.title) ? data.title : "";

  if (!Validator.isLength(data.title, { min: 1, max: 38 })) {
    errors.title = "Title must be between 1 and 38 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (!Validator.isLength(data.description, { min: 1, max: 38 })) {
    errors.title = "Title must be between 1 and 38 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.title = "Title field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};