import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const costumer = await req.context.models.costumer.findAll();
    return res.send(costumer);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const costumer = await req.context.models.costumer.findOne({
      where: { custid: req.params.ids },
    });
    return res.send(costumer);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const costumer = await req.context.models.costumer.create({
      costid: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      user_id: req.body.user_id,
      created: req.body.created,
      updated: req.body.updated,
    });
    return res.send(costumer);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const costumer = await req.context.models.countries.update(
      {
        costid: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        user_id: req.body.user_id,
        created: req.body.created,
        updated: req.body.updated,
      },
      { returning: true, where: { custid: req.params.id } }
    );
    return res.send(costumer);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const costumer = await req.context.models.costumer.destroy({
      where: { costid: req.params.id },
    });
    return res.send("delete " + costumer + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from customer where custid = :id", {
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
