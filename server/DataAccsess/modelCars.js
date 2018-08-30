var Sequelize = require('sequelize');
var DA = require('./dataAccess');
var factory = require('./factories');


class ModelCar {
    constructor() {
        this.model = this.initCustomer();

    }
    initCustomer() {
        let modelCar = DA.connection.define('modelcars', {
            Id: { type: Sequelize.INTEGER, 
                          primaryKey: true,
                          autoIncrement: true },
            
            modelName: Sequelize.STRING,
            modelDetails: Sequelize.STRING,
            factoryId: { type: Sequelize.INTEGER, references: { model: factory, key: 'Id' } }
            
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

           //customer.hasOne(users.model , { foreignKey: 'customerId', onUpdate: 'CASCADE', hooks: true} )
           // Company.model.hasMany(customer, { foreignKey: 'company_id' });

        return modelCar;
    }
    getAll() {
        return this.model.findAll();
    }

    
}
const modelCar = new ModelCar();

module.exports = modelCar;