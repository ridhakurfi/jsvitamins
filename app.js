const Controller = require("./controllers/controller");

const arrow = process.argv.slice(2);
const command = arrow[0];
const action1 = arrow[1];
const action2 = arrow[2];
const action3 = arrow[3];
const action4 = arrow[4];

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
