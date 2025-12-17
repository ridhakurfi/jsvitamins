class View {
  static mainPage() {
    console.log("------------------");
    console.log("Disaster Simulator");
    console.log("------------------");
  }
  static disasterList(item) {
    console.table(item);
  }
  static disasterById(item) {
    console.log(item);
  }
  static createDisaster(item) {
    console.log("Success to perform action", item.command);
  }
  static editDisaster(item) {
    console.log("Success to perform action", item.command);
  }
  static deleteDisaster(item) {
    console.log("Sucess to perform action", item.command);
  }
}

module.exports = View;
