const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId)
  const y = element.getBoundingClientRect().top + window.pageYOffset - 15
  window.scrollTo({ top: y, behavior: "smooth" })
}

export default smoothScroll
