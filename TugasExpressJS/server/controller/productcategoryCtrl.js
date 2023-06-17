import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const product_category =
      await req.context.models.product_category.findAll();
    return res.send(product_category);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const product_category = await req.context.models.product_category.findOne({
      where: { category_id: req.params.ids },
    });
    return res.send(product_category);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const product_category = await req.context.models.product_category.create({
      category_id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      created: req.body.created,
      updated: req.body.updated,
    });
    return res.send(product_category);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const product_category = await req.context.models.product_category.update(
      {
        category_id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        created: req.body.created,
        updated: req.body.updated,
      },
      { returning: true, where: { category_id: req.params.id } }
    );
    return res.send(product_category);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const product_category = await req.context.models.product_category.destroy({
      where: { category_id: req.params.id },
    });
    return res.send("delete " + product_category + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from product_category where category_id = :id", {
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
