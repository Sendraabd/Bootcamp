import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const product = await req.context.models.product.findAll();
    return res.send(product);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const product = await req.context.models.product.findOne({
      where: { prodid: req.params.ids },
    });
    return res.send(product);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const product = await req.context.models.product.create({
      name: req.body.name,
      category: req.body.category,
      stock: req.body.stock,
      price: req.body.price,
    });
    return res.send(product);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const product = await req.context.models.product.update(
      {
        name: req.body.name,
        category: req.body.category,
        stock: req.body.stock,
        price: req.body.price,
      },
      { returning: true, where: { prodid: req.params.id } }
    );
    return res.send(product);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const product = await req.context.models.product.destroy({
      where: { prodid: req.params.id },
    });
    return res.send("delete " + product + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from product where prodid = :id", {
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
