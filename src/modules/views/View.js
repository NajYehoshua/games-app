// ! View class
class View {
  // ! View Class private property
  _document = document;
  _parent;

  // ! emptyInnertHTML method
  emptyInnertHTML() {
    this._parent.innerHTML = "";
  }

  // ! render method
  render(element) {
    this.emptyInnertHTML();
    this._parent.insertAdjacentHTML("afterbegin", element);
  }
}

export default View;
