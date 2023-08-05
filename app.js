const dropDown = document.querySelectorAll('.list-dropdown')

function toggleOpen() {
  const dropDownUl = this.querySelector('.dropdown-list')
  const dropDownWrapper = this.querySelector('.dropdown-wrapper')
  const dropDownIcon = this.querySelector('.list-dropdown__icon')

  if (dropDownWrapper.getBoundingClientRect().height === 0) {
    dropDownWrapper.style.height = `${
      dropDownUl.getBoundingClientRect().height
    }px`
    dropDownIcon.src = './images/icon-arrow-down.svg'
  } else {
    dropDownWrapper.style.height = 0
    dropDownIcon.src = './images/icon-arrow-up.svg'
  }
}

dropDown.forEach((el) => {
  el.addEventListener('click', toggleOpen)
})

const navToggle = document.querySelector('.mobile-nav-toggle')
const primaryNav = document.querySelector('.primary-navigation')
const mobileGroup = document.querySelector('.mobile-grouping')

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true)
  primaryNav.toggleAttribute('data-visible')
  mobileGroup.classList.toggle('active')
})
