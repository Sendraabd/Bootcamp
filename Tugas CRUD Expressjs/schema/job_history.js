import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class job_history extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'jobs',
        key: 'job_id'
      }
    },
    departement_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departements',
        key: 'departement_id'
      }
    }
  }, {
    sequelize,
    tableName: 'job_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_job_history_id",
        unique: true,
        fields: [
          { name: "employee_id" },
          { name: "start_date" },
        ]
      },
    ]
  });
  }
}
