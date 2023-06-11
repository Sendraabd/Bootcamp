import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const departement = await req.context.models.departements.findAll();
    return res.send(departement);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const departement = await req.context.models.departements.findOne({
      where: { departement_id: req.params.ids },
    });
    return res.send(departement);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const departement = await req.context.models.departements.create({
      departement_id:req.body.id,departement_name: req.body.name,location_id: req.body.lid,manager_id:req.body.mid
    });
    return res.send(departement);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const departement = await req.context.models.departements.update(
      {
        departement_id:req.body.id,departement_name: req.body.name,location_id: req.body.lid,manager_id:req.body.mid
      },
      { returning: true, where: { departement_id: req.params.id } }
    );
    return res.send(departement);
  } catch (error) {
    return res.send(error)
  }
};

const deleted = async(req,res) => {
    try {
        const departement = await req.context.models.departements.destroy({
            where:{departement_id : req.params.id}
        })
        return res.send('delete '+departement+' row')
    } catch (error) {
        return res.send(error)
    }
}

const querySQL = async(req,res) => {
    try {
        await sequelize.query('select * from departements where departement_id = :id',
        {replacements : {id : req.params.id},type : sequelize.QueryTypes.SELECT}
        ).then(result => {
            return res.send(result)
        })
    } catch (error) {
        return res.send(error)
    }
}
export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
  querySQL
};
