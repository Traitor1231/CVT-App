
const inputEmail = document.getElementById('email'); 

validateSumbolsEmail = email => {
  const sumbols_email = /^(([^'/|{}=+&?*^%№$#!<>()[\]\\,;:\s@\"]+(\.[^'/|{}=+&?*^%№$#!<>()[\]\\,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return sumbols_email.test(email);
}

inputEmail.addEventListener('input', Email_val_range = () => {
   if (inputEmail.value.length > 19 ) {
       inputEmail.value = inputEmail.value.substring(0, 19);
   } 
});

validateEmail = () => {
   const email = $("#email").val();
   if (inputEmail.value.length === 0) {
   } else if (inputEmail.value.startsWith(' ')) {
     alert('Поле не может начинаться с пробела');
     localStorage.setItem('email', ' '); 
     inputEmail.value=''; 
     document.getElementById('email').style.width = '85px';
   } else if (inputEmail.value.includes(' ')) {
     alert('Поле не может содержать пробелы' );
     localStorage.setItem('email', ' '); 
     inputEmail.value=''; 
     document.getElementById('email').style.width = '85px';
   } else if (validateSumbolsEmail(email) === false ) {
     alert('Введите валидный адрес почты, в следующем формате: something@mail.ru');
     inputEmail.value=''; 
     localStorage.setItem('email', ' '); 
     document.getElementById('email').style.width = '85px';
   }   
}	  

$('#email').keypress((e) => {
   if(e.which == 13 ) {
     validateEmail(); 
   }
});

inputEmail.onblur = () => validateEmail();

