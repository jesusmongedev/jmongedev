// Query selectors Variables
const $menuBtn = document.querySelector('.menu-btn')
const $navigator = document.getElementById('nav-menu')
const $navLink = document.querySelectorAll('.nav__link')

// toggle open class and show menu when clicked $menuBtn button
const toggleMenuBtn = () => {
  $menuBtn.classList.toggle('open')
  $menuBtn.classList.contains('open')
    ? $navigator.classList.add('show')
    : $navigator.classList.remove('show')
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
}

$navLink.forEach((n) => n.addEventListener('click', linkAction))
