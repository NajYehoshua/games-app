import View from "./view";

// !GameCards Class
class GameCards extends View {
  constructor() {
    super();
    this._parent = document.querySelector(".game-list");
    console.log(this);
  }

  // !generateMarkup method
  generateMarkup(data) {
    // !generate new markup
    const markup = ` 
        <li class="game-item"> 
            <div class="game-card"> 
                <section class="game-card_header> 
                    <img src="${data.background_image}" />
                </section> 
                <section class="game-card_body"> 
                    <p>${data.name}</p>
                </section>
            </div>
        </li>
    `;

    // !return new generated markup
    return markup;
  }
}

// ! Instantiate new gameCards object
const gameCards = new GameCards();

export default gameCards;
