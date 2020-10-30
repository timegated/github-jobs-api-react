export const updateObjects = (prevObject, updatedProps) => {
  return {
    ...prevObject,
    ...updatedProps
  };
};