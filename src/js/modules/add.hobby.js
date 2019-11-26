require ('./add.standart.hobby');

var List = $('#Input_val ul');
var inputHobby = document.getElementById('save_hobby');     
var Addbutton = document.getElementById('add_button');  
var lsLenght = localStorage.length;

  document.addEventListener('DOMContentLoaded', () => {    
  Addbutton.addEventListener('click', () => {                
  if (inputHobby.value.startsWith(' ')) { 
    alert('Поле не может начинаться с пробела');
    document.getElementById('save_hobby').value = ""; 
  } else if (inputHobby.value.includes(' ')) {
    alert('Поле не должно содержать пробелы');
    document.getElementById('save_hobby').value = ""; 
  } else if (inputHobby.value.length > 15 ) {
    alert('Количество символов не должно превышать 15 едениц');
    document.getElementById('save_hobby').value = ""; 
  } else if (inputHobby.value.length < 4 ) {
    alert('Минимальное количество символов должно превышать 3 еденицы');
    document.getElementById('save_hobby').value = ""; 
  } else {
    
  var ID = Math.random();
  var Mask = "hobby_"+ID;
  var lsLenght = localStorage.length;

  localStorage.setItem( Mask, inputHobby.value);
  document.getElementById('save_hobby').value = ""; 
      if (lsLenght > 0) { 
        for (var i = 0; i < lsLenght; i++) {
             var key = localStorage.key(i);
          if (key.indexOf(Mask) == 0) {
          $('<li></li>')
          .addClass('List__item')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List);
           var listItems = List.children('li');
           List.append(listItems.get().reverse()); 
          }
        }
      }
    }
  });
});

$(document).on('click', '.List__item', e => {
  var jet = $(e.target);
  localStorage.removeItem(jet.attr('data-itemid'));
  jet.remove();    
});

  var Mask = 'hobby_';
  for (var i = 0; i < lsLenght; i++) {
      var key = localStorage.key(i);
       if (key.indexOf(Mask) == 0) {
          $('<li></li>')
          .addClass('List__item')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List);
          var listItems = List.children('li');
          List.append(listItems.get().reverse()); 
      }
  }
  
  


  


  
 