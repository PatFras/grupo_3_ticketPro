const db = require("../../database/models");

const checkEmail = async (req, res) => {
  const email = req.query.email;
  try {
    const user = await db.User.findOne({
      where: {
        email,
      },
    });
    return res.status(200).json({
      ok: true,
      data: user ? true : false,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hubo un error",
    });
  }
};

module.exports = {
  checkEmail,
};
