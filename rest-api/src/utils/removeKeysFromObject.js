export const removeKeysFromObject = (object, keys) => {
  const clonedObject = { ...object };
  const clonedKeys = [...keys];
  const entriesObject = Object.entries(clonedObject);
  const filteredObject = Object.fromEntries(
    entriesObject.filter(([key]) => clonedKeys.includes(key))
  );

  return filteredObject;
};
