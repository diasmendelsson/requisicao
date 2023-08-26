'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Requisicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Requisicao.init({
    veiculo: DataTypes.STRING,
    funcionario: DataTypes.STRING,
    data: DataTypes.DATE,
    valor: DataTypes.DECIMAL,
    requisicaoParticular: DataTypes.BOOLEAN,
    requisicaoEmpresa: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Requisicao',
  });
  return Requisicao;
};