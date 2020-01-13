export default async (req: any, res: any) => {
  const isValidToken = await req.authorization.authenticate(req.headers, res);
  if (isValidToken) {
    return;
  }

  res.status(401).send({ message: "Unauthorization" });
};
