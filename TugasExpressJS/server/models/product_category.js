import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class product_category extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    category_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "category_id_pk",
        unique: true,
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
  }
}
