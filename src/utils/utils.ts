export const generateKeyFromURL = (endpoint) => {
  // return endpoint ? endpoint.split('/').join('') : endpoint;
  return endpoint;
};
export function isEmpty(element) {
  return (
    typeof element === undefined ||
    element === null ||
    element === undefined ||
    element.length === 0 ||
    element.size === 0
  );
}
