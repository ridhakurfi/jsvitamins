const Controller = require("./controllers/controller");

const array = process.argv.slice(2);
const command = array[0];
const action1 = array[1];
const action2 = array[2];
const action3 = array[3];
const action4 = array[4];

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
  case "deleteDatabase":
    Controller.deleteDster();
    break;
  case "createTable":
    Controller.delisaster();
    break;
  case "deleteDisaster":
    Controller.deletisaster();
    break;
  default:
    Controller.mainPage();
    break;
}
