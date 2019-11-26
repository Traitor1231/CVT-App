require ('./standart.input.values');

document.addEventListener("DOMContentLoaded", () => {
   var ids = ["Name", "phone", "email"];

  for (var _i = 0, _ids = ids; _i < _ids.length; _i++) {
    var id = _ids[_i];
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);

    ((id, input) => {
      input.addEventListener("change", () => {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  }
});
