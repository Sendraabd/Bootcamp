import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findAll();
    return res.send(job);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const job = await req.context.models.jobs.findOne({
      where: { job_id: req.params.ids },
    });
    return res.send(job);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const job = await req.context.models.jobs.create({
      job_id:req.body.id,job_title: req.body.jt,min_salary: req.body.mns,max_salary:req.body.mxs
    });
    return res.send(job);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const job = await req.context.models.jobs.update(
      {
        job_id:req.body.id,job_title: req.body.jt,min_salary: req.body.mns,max_salary:req.body.mxs
      },
      { returning: true, where: { job_id: req.params.id } }
    );
    return res.send(job);
  } catch (error) {
    return res.send(error)
  }
};

const deleted = async(req,res) => {
    try {
        const job = await req.context.models.jobs.destroy({
            where:{job_id : req.params.id}
        })
        return res.send('delete '+job+' row')
    } catch (error) {
        return res.send(error)
    }
}

const querySQL = async(req,res) => {
    try {
        await sequelize.query('select * from jobs where job_id = :id',
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
