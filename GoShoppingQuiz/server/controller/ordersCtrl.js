import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const orders = await req.context.models.orders.findAll();
    return res.send(orders);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const orders = await req.context.models.orders.findOne({
      where: { orderId: req.params.ids },
    });
    return res.send(orders);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const orders = await req.context.models.orders.create({
      orderId: req.body.id,
      orderNo: req.body.orderNo,
      users: req.body.users,
      totalprice: req.body.totalprice,
      status: req.body.status,
    });
    return res.send(orders);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const orders = await req.context.models.orders.update(
      {
        orderId: req.body.id,
        orderNo: req.body.orderNo,
        users: req.body.users,
        totalprice: req.body.totalprice,
        status: req.body.status,
      },
      { returning: true, where: { orderId: req.params.id } }
    );
    return res.send(orders);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const orders = await req.context.models.orders.destroy({
      where: { orderId: req.params.id },
    });
    return res.send("delete " + orders + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from orders where orderId = :id", {
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
