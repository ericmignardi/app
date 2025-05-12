import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized: No Token Provided" });
    const decodedJwt = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedJwt.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute: ", error.message);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Unauthorized: Invalid Token" });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Unauthorized: Token Expired" });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};
