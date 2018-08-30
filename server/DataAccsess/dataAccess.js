
var Sequelize = require('sequelize');

class DataAccess  {

  constructor() {  
      debugger
      this.connection = new Sequelize('sql7254377', 'sql7254377', 'BHI2DMvGi8', {
        host: 'sql7.freemysqlhosting.net',
        dialect: 'mysql',

           
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        define: {
          timestamps: false
        }
      });    
     
  }
}
const DA = new DataAccess() ;
module.exports =   DA;

