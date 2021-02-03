const orderform = document.querySelector("#form");
const sendbutton = document.querySelector("#send");
const orderOverlay = document.querySelector(".order__overlay");
const closeOrderOverlay = document.querySelector("#order_close");

sendbutton.addEventListener('click', function(e) {
    e.preventDefault();

    var formData = new FormData(orderform);
     
    if (validateForm(orderform)) {
      const data = {
        name: orderform.elements.name.value,
        phone: orderform.elements.phone.value,
        comment: orderform.elements.comment.value,
        to: 'fox-race@mail.ru',
      };

      for (const k in data) {
        if (data.hasOwnProperty(k)) {
          const element = data[k];
          formData.append(k, element)
          
        }
      }

      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json'
      xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
      xhr.send(formData)
      xhr.addEventListener('load', (e) => {
        
        if (e.target.response.status == 200) {
          orderOverlay.querySelector('.order__overlay-text').innerText = 'Сообщение отправлено';
          orderOverlay.style.display = 'flex';
        } else {
          orderOverlay.querySelector('.order__overlay-text').innerText = 'Сообщение не отправлено';
          console.log(e.target.response.status);
          orderOverlay.style.display = 'flex';
        }
        
      }
      );
    };
})

closeOrderOverlay.addEventListener('click', function(e) {
  e.preventDefault();
  orderOverlay.style.display = 'none';
})

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.comment)) {
    valid = false;
  }
  console.log(valid);
  return valid
}

function validateField(field) {
  if (!field.checkValidity()) {
    return false
  } else {
    return true
  }
}