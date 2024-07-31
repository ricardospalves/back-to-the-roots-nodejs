export const realTypeof = (value) => {
  const typeofValue = Object.prototype.toString
    .call(value)
    .match(/(\w+)(?:])$/)[1];

  return typeofValue.toLowerCase();
};
