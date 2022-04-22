// Query selectors Variables
const $menuBtn = document.querySelector('.menu-btn')
const $navigator = document.getElementById('nav-menu')
const $navLink = document.querySelectorAll('.nav__link')

// toggle open class and show menu when clicked $menuBtn button
const toggleMenuBtn = () => {
  $menuBtn.classList.toggle('open')
  $menuBtn.classList.contains('open')
    ? $navigator.classList.add('show') &
      $menuBtn.setAttribute('aria-expanded', true) &
      document.body.classList.add('no-scroll')
    : $navigator.classList.remove('show') &
      $menuBtn.setAttribute('aria-expanded', false) &
      document.body.classList.remove('no-scroll')
}

// addEventListener to listen $menuBtn click and run the function toggleMenuBtn
$menuBtn.addEventListener('click', toggleMenuBtn)

// Active and remove menu
function linkAction() {
  $navLink.forEach((n) => n.classList.remove('active'))
  this.classList.add('active')

  // close menu mobile when clicked item
  $navigator.classList.remove('show')
  $menuBtn.classList.toggle('open')
  document.body.classList.remove('no-scroll')
  $menuBtn.setAttribute('aria-expanded', false)
}

$navLink.forEach((n) => n.addEventListener('click', linkAction))

const $form = document.querySelector('#form')
const $buttonMailTo = document.querySelector('#JesusMail')

$form.addEventListener('submit', handleSubmit)

// Functional Contact Form
function handleSubmit(event) {
  // Prevenir el evento que ocurre por defecto al dar click en enviar 'Submit
  event.preventDefault()

  // The FormData() constructor creates a new FormData object.
  const form = new FormData(this)
  // console.log(form.get('name'));

  // Editar el atributo href con los datos requeridos usamos `` → Template para poder usar valores dinamicos
  $buttonMailTo.setAttribute(
    'href',
    `mailto:jesus_jaml@outlook.com?subject= Nombre: ${form.get(
      'name'
    )} Correo: ${form.get('mail')} &body=${form.get('message')}`
  )
  // Dar click automaticamente al enlace <a> oculto
  $buttonMailTo.click()
}
