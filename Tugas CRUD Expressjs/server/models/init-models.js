import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _countries from  "./countries.js";
import _departements from  "./departements.js";
import _employees from  "./employees.js";
import _job_history from  "./job_history.js";
import _jobs from  "./jobs.js";
import _locations from  "./locations.js";
import _regions from  "./regions.js";
import _shipper from  "./shipper.js";
import Sequelize from "sequelize";
import config from "../../config/config.js";

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const initModels = (sequelize) => {
  const countries = _countries.init(sequelize, DataTypes);
  const departements = _departements.init(sequelize, DataTypes);
  const employees = _employees.init(sequelize, DataTypes);
  const job_history = _job_history.init(sequelize, DataTypes);
  const jobs = _jobs.init(sequelize, DataTypes);
  const locations = _locations.init(sequelize, DataTypes);
  const regions = _regions.init(sequelize, DataTypes);
  const shipper = _shipper.init(sequelize, DataTypes);

  locations.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(locations, { as: "locations", foreignKey: "country_id"});
  employees.belongsTo(departements, { as: "departement_departement", foreignKey: "departement_id"});
  departements.hasMany(employees, { as: "employees", foreignKey: "departement_id"});
  job_history.belongsTo(departements, { as: "departement", foreignKey: "departement_id"});
  departements.hasMany(job_history, { as: "job_histories", foreignKey: "departement_id"});
  departements.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(departements, { as: "departements", foreignKey: "manager_id"});
  employees.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(employees, { as: "employees", foreignKey: "manager_id"});
  employees.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(employees, { as: "employees", foreignKey: "job_id"});
  job_history.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(job_history, { as: "job_histories", foreignKey: "job_id"});
  departements.belongsTo(locations, { as: "location", foreignKey: "location_id"});
  locations.hasMany(departements, { as: "departements", foreignKey: "location_id"});
  countries.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(countries, { as: "countries", foreignKey: "region_id"});

  return {
    countries,
    departements,
    employees,
    job_history,
    jobs,
    locations,
    regions,
    shipper,
  };
}
const models = initModels(sequelize);
export default models;
export { sequelize };