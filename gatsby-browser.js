// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  try {
    // HAMBURGER MENU
    let hamburgerMenu = document.querySelector(".hamburger")
    let hamburgerMenuContent = document.querySelector(".hamburger__content")
    let nav = document.querySelector(".nav")
    let logo = document.querySelector(".nav__logo-image")
    let originalLogo = logo.src
    let originalHeaderColor = nav.classList.contains("nav--dark") ? "nav--dark" : "nav--light"

    const toggleScroll = function() {
      document.body.style.overflow == "hidden"
        ? (document.body.style.overflow = "initial")
        : (document.body.style.overflow = "hidden")
    }

    hamburgerMenu.addEventListener("click", _ => {
      if (hamburgerMenuContent.classList.contains("hamburger__content--closed")) {
        hamburgerMenuContent.classList.add("hamburger__content--opened")
        hamburgerMenuContent.classList.remove("hamburger__content--closed")
        nav.classList.remove("nav--light")
        nav.classList.add("nav--dark")
        logo.src = "/images/logo.svg"
      } else {
        hamburgerMenuContent.classList.add("hamburger__content--closed")
        hamburgerMenuContent.classList.remove("hamburger__content--opened")
        nav.classList.remove("nav--dark")
        nav.classList.remove("nav--light")
        nav.classList.add(originalHeaderColor)
        logo.src = originalLogo
      }
      // toggleScroll()
    })
  } catch (e) {
    console.error(e)
  }
}
