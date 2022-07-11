// ------------------------ Menu Mobile ------------------------
function menuToggle() {
  const menuIcon = document.querySelector('.menu-icon')
  const header = document.querySelector('header')
  const liHeader = header.querySelectorAll('a')


  liHeader.forEach((item) => {
    item.addEventListener('click', () => {
      document.body.classList.toggle('over-hidden')
      header.classList.toggle('nav-ativo')
      menuIcon.classList.toggle('menu-open')
      icomMnu() 
    })
  })


  menuIcon.addEventListener('click', () => {

    header.classList.toggle('nav-ativo')
    document.body.classList.toggle('over-hidden')
    menuIcon.classList.toggle('menu-open')
    icomMnu() 

  })

  function icomMnu() {
    if (menuIcon.classList.contains('menu-open')) {
      menuIcon.setAttribute('src', "./img/icons/close.png")
    } else {
      menuIcon.setAttribute('src', "./img/icons/menu-closed.png")
    }
  }
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 360) {
      header.classList.add('header-dark')
    } else {
      header.classList.remove('header-dark')
    }
  })

}
menuToggle()

// ------------------------ Progress Bar ------------------------

window.addEventListener('scroll', () => {
  const progressBar = document.querySelector('.progress')
  const alturaJanela = window.innerHeight;
  let alturaJanAtual = window.pageYOffset
  let progressBase = (alturaJanAtual * 100) / alturaJanela;
  progressBar.setAttribute('style', `width:${progressBase}%;`)
})

// ------------------------ scroll Suave ------------------------
function scrollSuave() {
  const jsScroll = document.querySelectorAll('.js-scroll')
  const metadeTela = window.innerHeight * 0.8

  function scrollDetect() {
    jsScroll.forEach((item) => {
      const contentTop = item.getBoundingClientRect().top
      const isVisible = (contentTop - metadeTela) < 0
      if (isVisible) {
        item.classList.add("ativo")
      }
    })


  }
  window.addEventListener('scroll', scrollDetect)
}


scrollSuave()
