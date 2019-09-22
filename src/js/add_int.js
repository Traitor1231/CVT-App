
var tdList = $('#Input_val div');
var inputInt; 
var key_id = "INT";
var Addbutton;


document.addEventListener('DOMContentLoaded', function() { 
  inputInt = document.getElementById('save_int');        
  inputInt.value = localStorage.getItem(key_id);  
  Addbutton = document.getElementById('add_button');  
  Addbutton.addEventListener('click', function() {                
  if(inputInt.value === "" || inputInt.value === "    " || inputInt.value === "     " || inputInt.value === "      "|| inputInt.value === "       " || inputInt.value === "        " || inputInt.value === "         " | inputInt.value === "" || inputInt.value === "          " || inputInt.value === "           " || inputInt.value === "           " || inputInt.value === "            " || inputInt.value === "             " || inputInt.value === "              " || inputInt.value === "               ") { 
    alert('Поле не должно быть пустым');
  } else if(inputInt.value.length > 15 ){
    alert('Количество символов не должно превышать 15 едениц');
  } else if(inputInt.value.length < 4 ){
    alert('Минимальное количество символов должно превышать 3 еденицы');
  } else {
    
localStorage.setItem(key_id, inputInt.value); 
  document.getElementById('save_int').value = ""; 
    var lsLen = localStorage.length;
      if(lsLen > 0){ 
        for(var i = 0; i < lsLen; i++){
          var key = localStorage.key(i);
           if(key.indexOf(key_id) == 0){
              $('<div></div>').addClass('intres')
                .text(localStorage.getItem(key))
                  .appendTo(tdList);
                    var listItems = tdList.children('div');
                      tdList.append(listItems.get().reverse()); 
          }
        }
      }
    }
  })
})

    $(document).on('click','.intres', function(e){
      var jet = $(e.target);
      localStorage.removeItem(jet.attr('data-itemid'));
      jet.remove();    
    })
      localStorage.removeItem('INT'); 
      var target = document.getElementById('standart-int');
      target.insertAdjacentHTML('beforeEnd', '<div id="memes"class="intres">компьютеры</div><div class="intres">радио</div><div class="intres">музыка</div>');
    
    

  
    
  
