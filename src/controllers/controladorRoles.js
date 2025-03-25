const { roles } = require("../modelos/modeladoRoles");

const role = async (req, res) => {
  try {
    const rol = await roles();
    return res.status(200).json(rol);
  } catch (error) {
    return res.status(400).json({ error: error.menssage });
  }
};

module.exports = { role };
