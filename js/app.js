class Zadanie{
  constructor(title){
    this.title = title ;
    this.date = new Date();
  }
}

class Lista {
  constructor(){
    this.listaZadan = [];
  }

  dodajZadanie(zadanko) {
    this.listaZadan.push(zadanko);
  }
}

class WidokListy {
  constructor(selector){
    this.input = document.querySelector('[name="taskInput"]')
    this.formularz = document.querySelector(`${selector}__form`);
    this.lista = document.querySelector(`${selector}__list`);
    this.formularz.addEventListener('submit', this.zatFormularz.bind(this))
    // przechowuje dane z listy, dziedziczy po class Lista
    this.dane = new Lista();
    }

    zatFormularz(event){
      // zatrzymuje submita przed odeslaniem do linku
      event.preventDefault();
      const nazwaZadania = this.input.value
      if (!nazwaZadania) return
      const zadanie = new Zadanie(nazwaZadania);
      this.dane.dodajZadanie(zadanie);
      this.renderujListeZadan();
    }

    renderujListeZadan(){
      this.czysciciel()
      this.dane.listaZadan.forEach((item)=>{
        const element = document.createElement('li')
        element.textContent = item.title;
        this.lista.appendChild(element);
      })
    }

    czysciciel(){
      this.lista.innerHTML = '';
    }
}


const widokListyTodo = new WidokListy('.Todo');
