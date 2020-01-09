export default (data: string): any[] => {
  return data.replace(/\(|\)/g, "").split(",");
};
