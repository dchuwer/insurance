var Sequelize = require('sequelize');
var DA = require('./dataAccess');
var Factory = require('./factories');
var ModelCar = require('./modelCars')

class YearModel {
    constructor() {
        this.model = this.initYearModel();
    }
    initYearModel() {
        let yearModel = DA.connection.define('year_models', {
            Id: { type: Sequelize.INTEGER, autoIncrement: true,primaryKey: true },
            year: Sequelize.INTEGER,
            factoryId: { type: Sequelize.INTEGER, references: { model: Factory, key: 'Id' } },
            modelId: { type: Sequelize.INTEGER, references: { model: ModelCar, key: 'Id' } }
            
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

            yearModel.belongsTo(ModelCar.model, { foreignKey: 'modelId' });
           //customer.belongsTo(Company.model, { foreignKey: 'company_id' });
           // Company.model.hasMany(customer, { foreignKey: 'company_id' });

        return yearModel;
    }
    getAll() {
        return this.model.findAll();
    }

    getYearsbyFactory(factory_Id) {
        return this.model.findAll({ 
            //attributes: 
            //[Sequelize.fn('DISTINCT', Sequelize.col('year')) ,'year'],
            where: {
                factoryId: factory_Id
            },
            // group :
            //  [['year']],
            order: 
                [['year', 'desc']],
            include: 
                { model : ModelCar.model}
            });   
    }   

   

   
}
const yearModel = new YearModel();

module.exports = yearModel;