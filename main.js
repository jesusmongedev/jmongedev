// Query selectors Variables
const $menuBtn = document.querySelector('.menu-btn')

// toggle open class when clicked $menuBtn button
const toggleMenuBtn = () => {
  $menuBtn.classList.toggle('open')
}

// addEventListener to listen $menuBtn click and run the function toggleMenuBtn
$menuBtn.addEventListener('click', toggleMenuBtn)
