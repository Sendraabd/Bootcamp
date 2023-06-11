import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class departements extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    departement_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    departement_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "NULL"
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'location_id'
      }
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    }
  }, {
    sequelize,
    tableName: 'departements',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_departement_id",
        unique: true,
        fields: [
          { name: "departement_id" },
        ]
      },
    ]
  });
  }
}
