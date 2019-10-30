if (localStorage.getItem("reloaded")) {
  } else {
    localStorage.setItem( 'hobby_1', 'компьютеры');
    localStorage.setItem( 'hobby_2', 'радио');
    localStorage.setItem( 'hobby_3', 'музыка');
  }
localStorage.setItem("reloaded", true);
       
var List = $('#Input_val ul');
var inputInt = document.getElementById('save_hobby');     
var Addbutton = document.getElementById('add_button');  
var lsLenght = localStorage.length;

  document.addEventListener('DOMContentLoaded', () => {    
  Addbutton.addEventListener('click', () => {                
  if (inputInt.value.startsWith(' ')) { 
    alert('Поле не может начинаться с пробела');
  } else if (inputInt.value.includes(' ')) {
    alert('Поле не должно содержать пробелы');
  } else if (inputInt.value.length > 15 ) {
    alert('Количество символов не должно превышать 15 едениц');
  } else if (inputInt.value.length < 4 ) {
    alert('Минимальное количество символов должно превышать 3 еденицы');
  } else {
    
  var ID = Math.random();
  var Mask = "hobby_"+ID;
  var lsLenght = localStorage.length;

  localStorage.setItem( Mask, inputInt.value);
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
  
  


  


  
 