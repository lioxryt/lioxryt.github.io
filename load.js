FPS = 35
timestamp = new Date().getTime();
images = 0

fpsMeter = () => {
  fps.innerText = images
  images = 0
  setTimeout(fpsMeter, 1000)
}
fpsMeter()

loadImage = () => {
  setTimeout(() => {
    images++
    timestamp = new Date().getTime()
    snapshot.src = "screen/snapshot.jpg?" + timestamp
  }, ((1 / FPS) * 1000) - (new Date().getTime() - timestamp))
}
snapshot.addEventListener("load", loadImage)
snapshot.addEventListener("error", loadImage)

snapshot.src = "screen/snapshot.jpg"

hideLoading = () => {
  document.body.style.backgroundImage = "url()"
  snapshot.removeEventListener("load", hideLoading);
}
snapshot.addEventListener("load", hideLoading)
