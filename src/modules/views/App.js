import View from "./view";

// ! App Class
class App extends View {
  // ! AppEventHandler method
  AppEventHandler(handler) {
    // ! Make a DOMContentLoaded event handler and listen when it happen
    this._document.addEventListener("DOMContentLoaded", handler);
  }
}

//! instantiate new App
const app = new App();

//! return app
export default app;
