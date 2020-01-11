export default async (req: any, res: any, done: Function) => {
  const isValidToken = await req.authorization.authenticate(req.headers, res);
  if (isValidToken) {
    done();
    return;
  }

  res.status(401).send({ message: "Unauthorization" });
};
