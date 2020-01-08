export default (object: Object, pattern: string) => {
  return Object.keys(object)
    .filter(key => {
      return key.search(pattern) !== -1;
    })
    .map(key => {
      return { [key.replace(pattern, "")]: object[key] };
    })
    .reduce((result, current) => {
      return Object.assign(result, current);
    });
};
