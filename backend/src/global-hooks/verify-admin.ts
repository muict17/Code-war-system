export default async (req: any, res: any) => {
  req.userInfo = await req.authorization.authenticate(req.headers);
  const isTokenValid = req.userInfo.isValid;
  const isRoleValid = req.authorization.verifyRole(req.userInfo, ["admin"]);

  if (isTokenValid && isRoleValid) {
    return;
  }

  if (!isTokenValid) {
    res.status(401).send({ message: "Unauthorization" });
    return;
  }

  if (!isRoleValid) {
    res.status(403).send({ message: "Insufficient Permission" });
    return;
  }
};
