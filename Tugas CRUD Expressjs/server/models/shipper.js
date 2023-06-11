import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class shipper extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    shipper_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shipper',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "pk_shipper_id",
        unique: true,
        fields: [
          { name: "shipper_id" },
        ]
      },
    ]
  });
  }
}
