import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class customer extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    custid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
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
    tableName: 'customer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "custid_pk",
        unique: true,
        fields: [
          { name: "custid" },
        ]
      },
    ]
  });
  }
}
