var accmenu = document.getElementsByClassName("accmenu__item");
var i;

for (let i=0; i < accmenu.length; i++) {
    accmenu[i].addEventListener("click", function (e) {
        e.preventDefault();
        for (let j = 0; j < accmenu.length; j++) {
          const element = accmenu[j];
          if (element !== accmenu[i]) {
            element.classList.remove('accmenu__item-active');
          }
        }
        this.classList.toggle("accmenu__item-active");
    });
}