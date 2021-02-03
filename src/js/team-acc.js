var teamItem = document.getElementsByClassName("team__name");
var a;

for (let a = 0; a < teamItem.length; a++) {
  teamItem[a].addEventListener('click', function (e) {
    e.preventDefault();
    for (let b = 0; b < teamItem.length; b++) {
      const element = teamItem[b];
      if (element !== teamItem[a]) {
        element.classList.remove('team_name_active');
      }
    }
    this.classList.toggle('team_name_active');
  });
  
}