import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const order_detail = await req.context.models.order_detail.findAll();
    return res.send(order_detail);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const order_detail = await req.context.models.order_detail.findOne({
      where: { order_detail_id: req.params.ids },
    });
    return res.send(order_detail);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const order_detail = await req.context.models.order_detail.create({
      order_detail_id: req.body.id,
      order_id: req.body.order_id,
      product_id: req.body.product_id,
      quantity: req.body.quantity,
      created: req.body.created,
      updated: req.body.updated,
    });
    return res.send(order_detail);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const order_detail = await req.context.models.order_detail.update(
      {
        order_detail_id: req.body.id,
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
        created: req.body.created,
        updated: req.body.updated,
      },
      { returning: true, where: { order_detail_id: req.params.id } }
    );
    return res.send(order_detail);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const order_detail = await req.context.models.order_details.destroy({
      where: { order_detail_id: req.params.id },
    });
    return res.send("delete " + order_detail + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from order_details where order_detail_id = :id", {
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
