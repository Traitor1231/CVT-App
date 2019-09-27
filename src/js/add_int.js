var List = $('#Input_val div');
var inputInt; 
var key_id = "hobby";
var Addbutton;

document.addEventListener('DOMContentLoaded', function() { 
  inputInt = document.getElementById('save_int');        
  inputInt.value = sessionStorage.getItem(key_id);  
  Addbutton = document.getElementById('add_button');  
  Addbutton.addEventListener('click', function() {                
  if(inputInt.value === "" || inputInt.value === "    " || inputInt.value === "     " || inputInt.value === "      "|| inputInt.value === "       " || inputInt.value === "        " || inputInt.value === "         " | inputInt.value === "" || inputInt.value === "          " || inputInt.value === "           " || inputInt.value === "           " || inputInt.value === "            " || inputInt.value === "             " || inputInt.value === "              " || inputInt.value === "               ") { 
    alert('Поле не должно быть пустым');
  } else if(inputInt.value.length > 15 ){
    alert('Количество символов не должно превышать 15 едениц');
  } else if(inputInt.value.length < 4 ){
    alert('Минимальное количество символов должно превышать 3 еденицы');
  } else {
    
sessionStorage.setItem(key_id, inputInt.value); 
  document.getElementById('save_int').value = ""; 
    var lsLen = sessionStorage.length;
      if(lsLen > 0){ 
        for(var i = 0; i < lsLen; i++){
          var key = sessionStorage.key(i);
           if(key.indexOf(key_id) == 0){
              $('<div></div>').addClass('intres')
                .text(sessionStorage.getItem(key))
                  .appendTo(List);
                    var listItems = List.children('div');
                      List.append(listItems.get().reverse()); 
          }
        }
      }
    }
  })
})
    $(document).on('click','.intres', function(e){
      var jet = $(e.target);
      sessionStorage.removeItem(jet.attr('data-itemid'));
      jet.remove();    
    })
    sessionStorage.removeItem('hobby'); 
      const reload = localStorage.getItem("reloaded");
      if (reload === null){
        var target = document.getElementById('standart-int');
        target.insertAdjacentHTML('beforeEnd', '<div class="intres">компьютеры</div><div class="intres">радио</div><div class="intres">музыка</div>');
      }
      localStorage.setItem("reloaded", true);
    

  
    
  
