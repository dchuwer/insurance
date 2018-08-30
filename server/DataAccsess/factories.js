var Sequelize = require('sequelize');
var DA = require('./dataAccess');
var modelcars = require('./modelCars');
var year_models = require('./year_models')

class Factory {
    constructor() {
        this.model = this.initFactory();
    }
    initFactory() {
        let factory = DA.connection.define('factories', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement : true },
            name: Sequelize.STRING,
            
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });  
            factory.belongsTo(modelcars.model, { foreignKey: 'Id' });
            factory.belongsTo(year_models.model, { foreignKey: 'Id' });
           

        return factory;
    }
    getAll(){
        console.log('get to factories')
        console.log(this.model)
        return this.model.findAll({
            // include: 
            //    { model : modelcars.model, model: year_models.model } 
          });
    }
    
}
const factory = new Factory();

module.exports = factory;