$("input").attr("autocomplete", "off");


//Email

var inputEmail = document.getElementById('email'); 

validateSumbolsEmail = email => {
  var sumbols_email = /^(([^'/|{}=+&?*^%№$#!<>()[\]\\,;:\s@\"]+(\.[^'/|{}=+&?*^%№$#!<>()[\]\\,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return sumbols_email.test(email);
}

inputEmail.addEventListener('input', Email_val_range = () => {
   if (inputEmail.value.length > 20 ) {
       inputEmail.value = inputEmail.value.substring(0, 20);
   } 
});

validateEmail = () => {
   var email = $("#email").val();
   if (inputEmail.value.length === 0) {
   } else if (inputEmail.value.startsWith(' ')) {
     alert('Поле не может начинаться с пробела');
     localStorage.setItem('email', ''); 
     inputEmail.value=''; 
     document.getElementById('email').style.width = '105px';
   } else if (inputEmail.value.includes(' ')) {
     alert('Поле не может содержать пробелы' );
     localStorage.setItem('email', ''); 
     inputEmail.value=''; 
     document.getElementById('email').style.width = '105px';
   } else if (validateSumbolsEmail(email) === false ) {
     alert('Введите валидный адрес почты, в следующем формате: something@mail.ru');
     inputEmail.value =''; 
     localStorage.setItem('email', ''); 
     document.getElementById('email').style.width = '105px';
   } 
}	  

$('#email').keypress((e) => {
   if(e.which == 13 ) {
     validateEmail(); 
   }
});

inputEmail.onblur = () => validateEmail();


// Phone

var inputPhone = document.getElementById('phone'); 

validateSumbolsPhone = phone => {
  var sumbols_phone = /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  return sumbols_phone.test(phone);
}
inputPhone.addEventListener('input', Phone_val_range = () => {
   if (inputPhone.value.length > 18 ) {
       inputPhone.value = inputPhone.value.substring(0, 18);
   } 
});

validatePhone = () => {
  var phone = $("#phone").val();
   if (inputPhone.value.length === 0) {
   } else if (inputPhone.value.startsWith(' ')) {
     alert('Поле не может начинаться с пробела');
     inputPhone.value=''; 
     localStorage.setItem('phone', ''); 
     document.getElementById('phone').style.width = '105px';
   } else if (validateSumbolsPhone(phone) === false ) {
     alert('Введите валидный номер телефона, в следующем формате:+7 (000) 000-00-00');
     localStorage.setItem('phone', ''); 
     inputPhone.value=''; 
     document.getElementById('phone').style.width = '105px';
   } 
}	  

$('#phone').keypress((e) => {
   if(e.which == 13 ){
     validatePhone();  
   }
});

inputPhone.onblur = () => validatePhone();
	

//Name


var inputName = document.getElementById('Name')

inputName.addEventListener('input', Name_val_range = () => {
  if (inputName.value.length > 20 ){
      inputName.value = inputName.value.substring(0, 20);
  } 
});

validateSumbolsName = Name => {
 var sumbols_name = /^(([^0-9'/|{}=+&?*^%№$#!<>()[\]\\.,;:@\"]+([^0-9'/|{}=+&?*^%№$#!<>()[\]\\.,;:@\"])))$/;
 return sumbols_name.test(Name);
}

validateName = () => {
  var Name = $("#Name").val();
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




