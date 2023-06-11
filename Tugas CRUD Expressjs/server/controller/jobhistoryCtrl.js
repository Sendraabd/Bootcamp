import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const jobhistory = await req.context.models.job_history.findAll();
    return res.send(jobhistory);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const jobhistory = await req.context.models.job_history.findOne({
      where: { employee_id: req.params.ids },
    });
    return res.send(jobhistory);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const jobhistory = await req.context.models.job_history.create({
      employee_id:req.body.id,start_date: req.body.sd,end_date: req.body.ed,job_id:req.body.jid,departement_id:req.body.did
    });
    return res.send(jobhistory);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const jobhistory = await req.context.models.job_history.update(
      {
        employee_id:req.body.id,start_date: req.body.sd,end_date: req.body.ed,job_id:req.body.jid,departement_id:req.body.did
      },
      { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(jobhistory);
  } catch (error) {
    return res.send(error)
  }
};

const deleted = async(req,res) => {
    try {
        const jobhistory = await req.context.models.job_history.destroy({
            where:{employee_id : req.params.id}
        })
        return res.send('delete '+jobhistory+' row')
    } catch (error) {
        return res.send(error)
    }
}

const querySQL = async(req,res) => {
    try {
        await sequelize.query('select * from job_history where employee_id = :id',
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
