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
    // Obtener la lista completa de usuarios
    const users = await db.User.findAll({
      attributes: ["id", "name", "email"],
    });

    // Obtener la cantidad total de usuarios
    const count = await db.User.count();

    // Construir el objeto literal de respuesta para api/users/
    const usersData = {
      count: count,
      users: users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        detail: `/api/users/${user.id}`, // Ajustar la ruta según tu implementación
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
    // Obtener los detalles de un usuario por ID
    const user = await db.User.findByPk(userId, {
      attributes: { exclude: ["password", "category"] }, // Excluir información sensible
    });

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no encontrado",
      });
    }

    // Construir el objeto literal de respuesta para api/users/:id
    const userDetails = {
      id: user.id,
      name: user.name,
      email: user.email,
      // Agregar más propiedades según tu modelo de usuario
      profileImage: `/api/users/${user.id}/image`, // Ajustar la ruta según tu implementación
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
