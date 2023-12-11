// Funzione per salvare il nome in localStorage
function saveName() {
    var nameInput = document.getElementById('name');
    var nameValue = nameInput.value.trim();
  
    if (nameValue !== '') {
      localStorage.setItem('user_name', nameValue);
      displaySavedValue();
      console.log('Nome salvato:', nameValue);
    } else {
      alert('Inserisci un nome valido.');
    }
  }
  
  // Funzione per rimuovere il nome da localStorage
  function removeName() {
    localStorage.removeItem('user_name');
    displaySavedValue();
    console.log('Nome rimosso da localStorage.');
  }
  
  // Funzione per mostrare il valore precedentemente salvato sopra l'input field
  function displaySavedValue() {
    var savedNameSpan = document.getElementById('savedName');
    var savedName = localStorage.getItem('user_name');
  
    if (savedName) {
      savedNameSpan.textContent = savedName;
      console.log('Valore precedentemente salvato:', savedName);
    } else {
      savedNameSpan.textContent = 'Nessun valore salvato.';
      console.log('Nessun valore salvato in localStorage.');
    }
  }
  
  // Mostra il valore precedentemente salvato all'avvio della pagina
  displaySavedValue();
  
  