import ObservableModel from "./ObservableModel";
//import ourKey from "./ourKey";
const BASE_URL = "https://www.potterapi.com/v1/";
const httpOptions = {
  headers: {
    key: "$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK"
  }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 1;
    this._currentId = null;
    this._yourDishes = [];
    this._idArray = [];
    this.getNumberOfGuests();
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    if (this.getCookie("numGuests")) {
      this._numberOfGuests = parseInt(this.getCookie("numGuests"));
    }
    return this._numberOfGuests;
  }

  deleteSpecificCookie(cname) {
    document.cookie =
      cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  newCookie() {
    var str_arr = JSON.stringify(this._idArray);
    document.cookie = "dishes=" + str_arr + "; path=/";
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  decodeDish() {
    if (this.getCookie("dishes")) {
      var arr = JSON.parse(this.getCookie("dishes"));
      for (var id in arr) {
        this.getSpecificDish(arr[id])
          .then(dish => {
            this.addDishToMenu(dish.id, dish);
          })
          .catch(() => {
            alert("There was an error");
          });
      }
    }
    return this._yourDishes;
  }

  getFullMenu() {
    if (this._yourDishes.length === 0) {
      this.decodeDish();
    }
    return this._yourDishes;
  }

  getFullMenuPrice() {
    let fullPrice = 0;
    for (var dish in this._yourDishes) {
      fullPrice += this._yourDishes[dish].extendedIngredients.length;
    }
    return fullPrice;
  }
  addDishToMenu(id, obj) {
    var newDish;

    if (obj.id == id) {
      newDish = obj;
      for (var dish in this._yourDishes) {
        if (this._yourDishes[dish].id == newDish.id) {
          this.removeDishFromMenu(this._yourDishes[dish].id, this._yourDishes);
        }
      }
      this._idArray.push(newDish.id);
      this._yourDishes.push(newDish);
    }
    this.newCookie();
    this.notifyObservers();
  }

  removeDishFromMenu(id, arr) {
    for (var dish in arr) {
      if (id == arr[dish].id) {
        arr.splice(dish, 1);
      }
      if (id == this._idArray[dish]) {
        this._idArray.splice(dish, 1);
        console.log(this._idArray);
        this.newCookie();
      }
      if (this._idArray.length === 0) {
        this.deleteSpecificCookie("dishes");
      }
    }

    this.notifyObservers();
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    this._numberOfGuests = num;
    if (this._numberOfGuests < 1) {
      this._numberOfGuests = 1;
    }
    document.cookie = "numGuests=" + this._numberOfGuests + "; path=/";
    this.notifyObservers();
  }

  setCurrentId(num) {
    this._currentId = num;
    this.notifyObservers();
  }

  getCurrentId() {
    return this._currentId;
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getJoke() {
    const url = new URL("https://www.potterapi.com/v1/spells/"),
      params = {
        key: "$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK"
      };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    console.log(url);

    return fetch(url, {
      key: "$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK"
    }).then(this.processResponse);
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
