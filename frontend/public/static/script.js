document.addEventListener('DOMContentLoaded', () => {
  const notRegisteredBtn = document.querySelector('.not-registered-btn')
  const registrationForm = document.querySelector('.registration-form')
  const landingPage = document.querySelector('.landing-page')

  notRegisteredBtn.addEventListener('click', () => {
    registrationForm.classList.toggle('hidden')
  })
})

