const router = require("express").Router();
const User = require("../models/User");
const verify = require("./verifyToken");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
    //   console.log(req.user._id);
    //   const user = await User.findById(req.user._id, "_id name");
    //   console.log(user);
      res.send(req.user);
    } catch (error) {
      res.send(err);
    }
  }
);

module.exports = router;
