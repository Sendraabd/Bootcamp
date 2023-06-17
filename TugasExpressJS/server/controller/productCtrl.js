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
      where: { product_id: req.params.ids },
    });
    return res.send(product);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const product = await req.context.models.product.create({
      product_id: req.body.product_id,
      name: req.body.name,
      description: req.body.description,
      category_id: req.body.category_id,
      quantity: req.body.quantity,
      price: req.body.price,
      image: req.file.filename, // Menggunakan req.file.filename untuk mengakses nama file yang diunggah
      created: req.body.created,
      updated: req.body.updated,
    });
    return res.send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const update = async (req, res) => {
  try {
    const product = await req.context.models.product.update(
      {
        product_id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        category_id: req.body.category_id,
        quantity: req.body.quantity,
        price: req.body.price,
        Image: req.file.Image,
        created: req.body.created,
        updated: req.body.updated,
      },
      { returning: true, where: { product_id: req.params.id } }
    );
    return res.send(product);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const product = await req.context.models.product.destroy({
      where: { product_id: req.params.id },
    });
    return res.send("delete " + product + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from product where product_id = :id", {
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
