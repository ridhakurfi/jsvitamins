const Controller = require("./controllers/controller");

const point = process.argv.slice(2);
const command = point[0];
const action1 = point[1];
const action2 = point[2];
const action3 = point[3];
const action4 = point[4];

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
