document.querySelector('#submitButton').addEventListener('click', (event) => {

  event.preventDefault();
  
  const userName = document.getElementById('userName')
  const password = document.getElementById('password')
  const eMail = document.getElementById('eMail')
  const checkbox = document.getElementById('checkbox')

  if ( userName.value === '' ) {
    userName.nextElementSibling.innerText = 'lutfen bu alanı doldurun'
    userName.nextElementSibling.setAttribute('class', 'error')
  } else {
    userName.nextElementSibling.innerText = ''
    userName.nextElementSibling.removeAttribute("class")
  }
  if ( password.value.length < 8 ) {
    password.nextElementSibling.setAttribute('class', 'error')
    if (password.value === '') {
      password.nextElementSibling.innerText = 'lutfen bu alanı doldurun'
    } else {
      password.nextElementSibling.innerHTML = 'parolanız en az 8 karekterli olmalı'
    }
  } else {
    password.nextElementSibling.innerText = ''
    password.nextElementSibling.removeAttribute("class")
  }
  if ( !eMail.value.includes("@") ) {
    eMail.nextElementSibling.setAttribute('class', 'error')
    if (eMail.value === '') {
      eMail.nextElementSibling.innerText = 'lutfen bu alanı doldurun'
    } else {
      eMail.nextElementSibling.innerHTML = 'lutfen geçerli bir e-posta giriniz'
    }
  }  else {
    eMail.nextElementSibling.innerText = ''
    eMail.nextElementSibling.removeAttribute("class")
  }
  if ( !checkbox.checked ) {
    checkbox.nextElementSibling.innerText = 'lutfen bu checkboxe işaretleyiniz'
    checkbox.nextElementSibling.setAttribute('class', 'error')
  } else {
    checkbox.nextElementSibling.innerText = ''
    checkbox.nextElementSibling.removeAttribute("class")
  }
  })