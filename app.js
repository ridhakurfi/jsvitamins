const Controller = require("./controllers/controller");

const terminal = process.argv.slice(2);
const command = terminal[0];
const action1 = terminal[1];
const action2 = terminal[2];
const action3 = terminal[3];
const action4 = terminal[4];

switch (command) {
  case "disastersList":
    Controller.getDisasters();
    break;
  case "disastersById":
    Controller.getDisasterById(action1);
    break;
  case "createDisaster":
    Controller.createDisaster(action1, action2, action3, action4);
    break;
  default:
    Controller.mainPage();
    break;
}
