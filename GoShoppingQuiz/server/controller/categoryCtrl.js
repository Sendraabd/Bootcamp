import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const category = await req.context.models.category.findAll();
    return res.send(category);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const category = await req.context.models.category.findOne({
      where: { cateid: req.params.ids },
    });
    return res.send(category);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const category = await req.context.models.category.create({
      catename: req.body.cateName,
    });
    return res.send(category);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const category = await req.context.models.category.update(
      {
        catename: req.body.cateName,
      },
      { returning: true, where: { cateid: req.params.id } }
    );
    return res.send(category);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const category = await req.context.models.category.destroy({
      where: { cateid: req.params.id },
    });
    return res.send("delete " + category + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from category where cateid = :id", {
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
