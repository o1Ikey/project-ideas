export const verifyAccessToken = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Token not found",
    });

  await jwt.verify(token, env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err)
      return res.status(401).json({
        success: false,
        message: "Invalid access token",
      });

    console.log(decode, "decode");
    req.user = decode;
    next();
  });
};
