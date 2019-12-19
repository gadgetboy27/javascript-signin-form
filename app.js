function animatedForm () {
  const arrows = document.querySelectorAll('.fa-arrow-down')

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling
      const parent = arrow.parentElement
      const nextForm = parent.nextElementSibling

      // Check for validation
      if (input.type === 'text' && validateUser(input)) {
        nextSlide(parent, nextForm)
      // eslint-disable-next-line no-empty
      } else if (input.type === 'email' && validateEmail(input)) {
        nextSlide(parent, nextForm)
      } else if (input.type === 'password' && validateUser(input)) {
        nextSlide(parent, nextForm)
      } else {
        parent.style.animation = 'shake 0.2s ease'
      }
      // Restart animation to continue
      parent.addEventListener('animationend', () => {
        parent.style.animation = ''
      })
    })
  })
}

function validateUser (user) {
  if (user.value.length < 6) {
    error('rgb(189,87,87)')
  } else {
    error('rgb(87,189,130)')
    return true
  }
}

function validateEmail (email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (validation.test(email.value)) {
    error('rgb(87,189,87)')
    return true
  } else {
    error('rgb(189,87,87)')
    alert('Not an email, please try again!')
  }
}

function nextSlide (parent, nextForm) {
  parent.classList.add('innactive')
  parent.classList.remove('active')
  nextForm.classList.add('active')
}

function error (color) {
  document.body.style.backgroundColor = color
}
animatedForm()
