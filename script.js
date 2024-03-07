const searchInput = document.querySelector("#searchInput");
const btnEkle = document.querySelector("#btnEkle");
const ul = document.querySelector("#todoListesi");

// ! Önyüze eklemek için

const onYuzeEkle = () => {
    let searchText = searchInput.value;

    ul.innerHTML += `<li class="list-item list-unstyled border border-bottom p-2 mb-2">${searchText}
                        <i class="fa-regular fa-circle-xmark float-end mt-1"></i>`;
            searchInput.value = "";
}

btnEkle.addEventListener("click", onYuzeEkle);

searchInput.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        onYuzeEkle();
    }
});

// ! Tıklanan elemanı silmek için

const onYuzdenSil = (e) => {
    const li = e.target.parentElement;

    if (e.target.className.includes("fa-regular")) {
        li.style.display = "none";
    }
};

ul.addEventListener("click", onYuzdenSil);

// ! Tüm görevleri bi kerede temizlemek için

const btnTemizle = document.querySelector("#btnTemizle");

btnTemizle.addEventListener("click", function(){
    ul.innerHTML = "";
})

// ! Görevleri Filtreleme
const searchFilter = document.querySelector("#searchFilter");

const filtrele = () => {
    let filtreliDurum = searchFilter.value;
    console.log(filtreliDurum);

    let gorevler = document.querySelectorAll(".list-item");

    gorevler.forEach(function (gorev) {
        if (gorev.innerHTML.includes(filtreliDurum)) {
            gorev.style.display = "block";
        } else {
            gorev.style.display = "none";
        }
    });
};

searchFilter.addEventListener("input", filtrele);