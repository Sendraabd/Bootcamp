import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findAll();
    return res.send(employee);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findOne({
      where: { employee_id: req.params.ids },
    });
    return res.send(employee);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const employee = await req.context.models.employees.create({
      employee_id:req.body.id,first_name: req.body.fn,last_name: req.body.ln,email:req.body.email,phone_number:req.body.pn,hire_date:req.body.hd,salary:req.body.salary,commision_pct:req.body.cp,manager_id:req.body.mid,departement_id:req.body.did,job_id:req.body.jid,xemp_id:req.body.xid
    });
    return res.send(employee);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const employee = await req.context.models.employees.update(
      {
        employee_id:req.body.id,first_name: req.body.fn,last_name: req.body.ln,email:req.body.email,phone_number:req.body.pn,hire_date:req.body.hd,salary:req.body.salary,commision_pct:req.body.cp,manager_id:req.body.mid,departement_id:req.body.did,job_id:req.body.jid,xemp_id:req.body.xid
      },
      { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(employee);
  } catch (error) {
    return res.send(error)
  }
};

const deleted = async(req,res) => {
    try {
        const employee = await req.context.models.employees.destroy({
            where:{employee_id : req.params.id}
        })
        return res.send('delete '+employee+' row')
    } catch (error) {
        return res.send(error)
    }
}

const querySQL = async(req,res) => {
    try {
        await sequelize.query('select * from employees where employee_id = :id',
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
