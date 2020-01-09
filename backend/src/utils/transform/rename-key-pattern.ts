export default (object: Object, pattern: string): any => {
  return Object.keys(object)
    .filter(key => {
      return key.search(pattern) !== -1 && object[key] !== null;
    })
    .map(key => {
      return { [key.replace(pattern, "")]: object[key] };
    })
    .reduce((result, current) => {
      return Object.assign(result, current);
    }, {});
};
