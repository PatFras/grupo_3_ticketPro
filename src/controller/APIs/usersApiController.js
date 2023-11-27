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

const usersController = async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: ["id", "name", "email"],
    });

    const count = await db.User.count();

    const usersData = {
      count: count,
      users: users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        detail: `/api/users/${user.id}`,
      })),
    };

    res.status(200).json({
      ok: true,
      data: usersData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: error.message || "Hubo un error",
    });
  }
};

const userController = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await db.User.findByPk(userId, {
      attributes: { exclude: ["password", "category"] },
    });

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no encontrado",
      });
    }

    const userDetails = {
      id: user.id,
      name: user.name,
      email: user.email,
      profileImage: `/api/users/${user.id}/image`,
    };

    res.status(200).json({
      ok: true,
      data: userDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: error.message || "Hubo un error",
    });
  }
};

module.exports = {
  checkEmail,
  usersController,
  userController,
};
