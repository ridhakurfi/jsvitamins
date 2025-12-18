const Mutator = require("./connections/createdb");
const Controller = require("./controllers/controller");
const Migrator = require("./migration");
const Seeder = require("./seeding");

const arr = process.argv.slice(2);
const command = arr[0];
const action1 = arr[1];
const action2 = arr[2];
const action3 = arr[3];
const action4 = arr[4];

switch (command) {
  case "disastersList":
    Controller.getDisasters();
    break;
  case "disastersById":
    Controller.getDisasterById(action1);
    break;
  case "createDisaster":
    Controller.createDisaster([action1, action2, action3, action4]);
    break;
  case "editDisaster":
    Controller.editDisaster([action1, action2]);
    break;
  case "deleteDisaster":
    Controller.deleteDisaster(action1);
    break;
  case "clearDatabase": //clear database
    Mutator.clearDatabase("disaster_bd");
    break;
  case "deleteDatabase": //delete database
    Mutator.deleteDatabase("disaster_bd");
    break;
  case "createDatabase": //create database
    Mutator.createDatabase("disaster_bd");
    break;
  case "createTable": //create table/s
    Migrator.migrating();
    break;
  case "seedTable": //seed table/s
    Seeder.insertDisaster();
    break;
  default:
    Controller.mainPage();
    break;
}
