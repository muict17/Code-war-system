const toCamelCase = (str: string) =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace("-", "")
      .replace("_", "")
  );

export default (arr: any): any =>
  Object.entries(arr)
    .map(([key, value]) => {
      return { [toCamelCase(key)]: value };
    })
    .reduce((result, current) => {
      return Object.assign(result, current);
    }, {});
