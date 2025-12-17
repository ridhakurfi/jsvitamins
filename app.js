const Controller = require("./controllers/controller");

const pointer = process.argv.slice(2);
const command = pointer[0];
const action1 = pointer[1];
const action2 = pointer[2];
const action3 = pointer[3];
const action4 = pointer[4];

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
