export default (roles: string[]) => {
  return async (req: any, res: any) => {
    req.userInfo = await req.authorization.authenticate(req.headers);
    const isTokenValid = req.userInfo.isValid;
    const ownerKey = req.params.userId;
    const isOwner = req.authorization.verifyOwner(req.userInfo, ownerKey);
    const isRole = req.authorization.verifyRole(req.userInfo, roles);

    if (isOwner || isRole) {
      return;
    }

    if (!isTokenValid) {
      res.status(401).send({ message: "Unauthorization" });
      return;
    }

    res.status(403).send({ message: "Insufficient Permission" });
  };
};
