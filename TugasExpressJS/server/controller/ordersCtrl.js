import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const order = await req.context.models.orders.findAll();
    return res.send(order);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const order = await req.context.models.orders.findOne({
      where: { order_id: req.params.ids },
    });
    return res.send(order);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const order = await req.context.models.orders.create({
      order_id: req.body.id,
      user_id: req.body.user_id,
      totalproduct: req.body.totalproduct,
      totalprice: req.body.totalprice,
      created: req.body.created,
      updated: req.body.updated,
    });
    return res.send(order);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const order = await req.context.models.orders.update(
      {
        order_id: req.body.id,
        user_id: req.body.user_id,
        totalproduct: req.body.totalproduct,
        totalprice: req.body.totalprice,
        created: req.body.created,
        updated: req.body.updated,
      },
      { returning: true, where: { order_id: req.params.id } }
    );
    return res.send(order);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const order = await req.context.models.orders.destroy({
      where: { order_id: req.params.id },
    });
    return res.send("delete " + order + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from orders where order_id = :id", {
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
