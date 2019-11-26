const inputPhone = document.getElementById('phone'); 

validateSumbolsPhone = phone => {
  const sumbols_phone = /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  return sumbols_phone.test(phone);
}
inputPhone.addEventListener('input', Phone_val_range = () => {
   if (inputPhone.value.length > 18 ) {
       inputPhone.value = inputPhone.value.substring(0, 18);
   } 
});

validatePhone = () => {
  const phone = $("#phone").val();
   if (inputPhone.value.length === 0) {
   } else if (inputPhone.value.startsWith(' ')) {
     alert('Поле не может начинаться с пробела');
     inputPhone.value=''; 
     localStorage.setItem('phone', ''); 
     document.getElementById('phone').style.width = '92px';
   } else if (validateSumbolsPhone(phone) === false ) {
     alert('Введите валидный номер телефона, в следующем формате:+7 (000) 000-00-00');
     localStorage.setItem('phone', ''); 
     inputPhone.value=''; 
     document.getElementById('phone').style.width = '92px';
   } 
}	  

$('#phone').keypress((e) => {
   if(e.which == 13 ){
     validatePhone();  
   }
});

inputPhone.onblur = () => validatePhone();