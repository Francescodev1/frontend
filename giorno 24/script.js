document.addEventListener('DOMContentLoaded', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let json = xhr.responseText;
            let obj = JSON.parse(json);
            console.log(obj);

            obj.forEach(e => {
                let div = document.querySelector('#cards');

                let card = document.createElement('div');
                div.appendChild(card);

                card.innerHTML = `<div class="card mx-2" style="width: 18rem; height: 100%">
                <img src="${e.img}" class="card-img-top" alt="Copertina">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 class="card-title">${e.title}</h5>
                      <span class="badge rounded-pill text-bg-dark">${e.category}</span>
                    </div>
                    <div>
                      <p class="card-text">${e.price}€</p>
                      <a href="#" class="btn btn-primary buy">Compra ora</a>
                      <a href="#" class="btn btn-danger">Scarta</a>
                    </div>
                </div>
              </div>`
            });
        }
    };


    document.querySelector('#cards').addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.className === 'btn btn-danger') {
            let btn = e.target.parentNode.parentNode.parentNode;
            btn.remove();
        }
    });


    let carrello = [];
/*
    document.querySelector('#cards').addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.className === 'btn btn-primary') {
            let compra = e.target.parentNode.parentNode.parentNode;
            carrello.push(compra);
            console.log(carrello)
        }
    });*/

    const addToCart = () => {
        let book = carrello.find((e) => book.asin === asin);

    }

    
  

});

