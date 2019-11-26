const Name = localStorage.getItem('Name');

  if (Name === null) {
      localStorage.setItem('Name', 'Виталя Гора');
  };

const email = localStorage.getItem('email');

  if (email === null) {
      localStorage.setItem('email', 'vitalya@gora.ru');
  };

const phone = localStorage.getItem('phone');

  if (phone === null) {
      localStorage.setItem('phone', '+7 (440) 554-32-12');
  };