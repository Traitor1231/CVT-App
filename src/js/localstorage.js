var Name = localStorage.getItem('Name');

  if (Name === null) {
      localStorage.setItem('Name', 'Виталя Гора');
  };

var email = localStorage.getItem('email');

  if (email === null) {
      localStorage.setItem('email', 'vitalya@gora.ru');
  };

var phone = localStorage.getItem('phone');

  if (phone === null) {
      localStorage.setItem('phone', '+7 (440) 554-32-12');
  };
  
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
