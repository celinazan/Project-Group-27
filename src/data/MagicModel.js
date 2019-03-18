import ObservableModel from "./ObservableModel";

class DinnerModel extends ObservableModel {
  constructor() {
    super();
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

  decodeCookie() {
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

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  fetchData(parameter) {
    const url = new URL("https://www.potterapi.com/v1/" + parameter),
      params = {
        key: "$2a$10$m6QOfeafHLsNSQwkY0R3W.IYHFedzSzSA/rGvUKy.oU3u690yEx.u"
      };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    console.log(url);

    return fetch(url, {
      key: "$2a$10$m6QOfeafHLsNSQwkY0R3W.IYHFedzSzSA/rGvUKy.oU3u690yEx.u"
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
