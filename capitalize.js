function capitalize(input) {
  if (!input) {
    return;
  }
  let result = input[0].toUpperCase() + input.slice(1);
  return result;
}

module.exports = capitalize;
