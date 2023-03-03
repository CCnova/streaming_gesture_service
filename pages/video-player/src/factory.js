import Controller from "./controller.js";

const [rootPath] = window.location.href.split("/pages/");
const factory = {
  async initalize() {
    return Controller.initialize({});
  },
};

export default factory;
