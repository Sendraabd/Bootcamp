import bcrypt from "bcrypt";

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
      where: { user_id: req.params.ids },
    });
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  if (req.body.username == "") {
    return res.status(401).send({ message: "Failed! Username is not null" });
  } else if (req.body.password == "") {
    return res.status(401).send({ message: "Failed! Password is not null" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(req.body.password, salt);
      const user = await req.context.models.users.create({
        user_id: req.body.id,
        username: req.body.username,
        password: passHash,
        created: req.body.created,
        updated: req.body.updated,
      });
      const { user_id, username, password } = user.dataValues;
      return res.send({ user_id, username, password });
    } catch (error) {
      return res.send(error);
    }
  }
};

const update = async (req, res) => {
  try {
    const users = await req.context.models.users.update(
      {
        user_id: req.body.user_id,
        username: req.body.username,
        password: req.body.password,
        created: req.body.created,
        updated: req.body.updated,
      },
      { returning: true, where: { user_id: req.params.id } }
    );
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const users = await req.context.models.users.destroy({
      where: { user_id: req.params.id },
    });
    return res.send("delete " + users + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from users where user_id = :id", {
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
