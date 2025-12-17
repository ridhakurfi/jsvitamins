const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  static async mainPage() {
    View.mainPage();
  }
  static async getDisasters() {
    try {
      let item = await Model.load();
      View.disasterList(item);
    } catch (error) {
      console.log(error);
    }
  }
  static async getDisasterById(id) {
    try {
      let item = await Model.loadById(id);
      View.disasterById(item);
    } catch (error) {
      console.log(error);
    }
  }
  static async createDisaster(item) {
    try {
      let result = await Model.createDisaster(item);
      View.createDisaster(result);
    } catch (error) {
      console.log(error);
    }
  }
  static async editDisaster(item) {
    try {
      let result = await Model.editDisaster(item);
      View.editDisaster(result);
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteDisaster(item) {
    try {
      let result = await Model.deleteDisaster(item);
      View.deleteDisaster(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
