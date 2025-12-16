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
  static createDisaster(item){
    console.log("Success to create item",item);
  }
}

module.exports = View;
