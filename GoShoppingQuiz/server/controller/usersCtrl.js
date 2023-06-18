import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const users = await req.context.models.users.findAll();
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const users = await req.context.models.users.findOne({
      where: { userId: req.params.ids },
    });
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const users = await req.context.models.users.create({
      userId: req.body.id,
      username: req.body.username,
    });
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const users = await req.context.models.users.update(
      {
        userId: req.body.id,
        username: req.body.username,
      },
      { returning: true, where: { userId: req.params.id } }
    );
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const users = await req.context.models.users.destroy({
      where: { userId: req.params.id },
    });
    return res.send("delete " + users + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from users where userId = :id", {
        replacements: { id: req.params.id },
        type: sequelize.QueryTypes.SELECT,
      })
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.send(error);
  }
};
export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
  querySQL,
};
