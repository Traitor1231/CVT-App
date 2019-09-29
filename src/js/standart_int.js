    var reload = localStorage.getItem("reloaded");
      if (reload === null){
        var target = document.getElementById('standart-int');
        target.insertAdjacentHTML('beforeEnd', '<div class="intres">компьютеры</div><div class="intres">радио</div><div class="intres">музыка</div>');
      }
      localStorage.setItem("reloaded", true);
