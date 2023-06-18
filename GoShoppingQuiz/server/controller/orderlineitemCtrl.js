import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const orderlineitem = await req.context.models.orderlineitem.findAll();
    return res.send(orderlineitem);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const orderlineitem = await req.context.models.orderlineitem.findOne({
      where: { ordLineId: req.params.ids },
    });
    return res.send(orderlineitem);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const orderlineitem = await req.context.models.orderlineitem.create({
      ordLineId: req.body.id,
      product: req.body.product,
      qty: req.body.qty,
      subtotal: req.body.subtotal,
      order: req.body.order,
    });
    return res.send(orderlineitem);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const orderlineitem = await req.context.models.orderlineitem.update(
      {
        ordLineId: req.body.id,
        product: req.body.product,
        qty: req.body.qty,
        subtotal: req.body.subtotal,
        order: req.body.order,
      },
      { returning: true, where: { ordLineId: req.params.id } }
    );
    return res.send(orderlineitem);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const orderlineitem = await req.context.models.orderlineitem.destroy({
      where: { ordLineId: req.params.id },
    });
    return res.send("delete " + orderlineitem + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from orderlineitem where ordLineId = :id", {
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
