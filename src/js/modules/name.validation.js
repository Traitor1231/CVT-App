
const inputName = document.getElementById('Name')

inputName.addEventListener('input', Name_val_range = () => {
  if (inputName.value.length > 20 ){
      inputName.value = inputName.value.substring(0, 20);
  } 
});

validateSumbolsName = Name => {
 const sumbols_name = /^(([^0-9'/|{}=+&?*^%№$#!<>()[\]\\.,;:@\"]+([^0-9'/|{}=+&?*^%№$#!<>()[\]\\.,;:@\"])))$/;
 return sumbols_name.test(Name);
}

validateName = () => {
  const Name = $("#Name").val();
   if (inputName.value.length === 0) {
   } else if (inputName.value.startsWith(' ')) {
     alert('Поле не может начинаться с пробела');
     localStorage.setItem('Name', ''); 
     inputName.value=''; 
   } else if (validateSumbolsName(Name) === false) {
     alert('Введены запрещенные символы, введите валидное имя пользователя, например: Никита Перескоков');
     localStorage.setItem('Name', ''); 
     inputName.value=''; 
   } 
}	 

$('#Name').keypress((e) => {
   if(e.which == 13 ){
      validateName();   
   }
});

inputName.onblur = () => validateName();
