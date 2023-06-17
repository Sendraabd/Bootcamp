import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class product extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    product_id: {
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
      type: DataTypes.STRING(200),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product_category',
        key: 'category_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(200),
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
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_id_pk",
        unique: true,
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
  }
}
