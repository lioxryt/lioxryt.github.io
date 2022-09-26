keyMapper = (e) => {
  switch (e.key) {
    case " ":
      return "space"
    case "Enter":
      return "Return"
    case "ControlLeft":
      return "Control"
    case "ArrowUp":
      return "Up"
    case "ArrowDown":
      return "Down"
    case "ArrowLeft":
      return "Left"
    case "ArrowRight":
      return "Right"
    default:
      return e.key
  }
}

keys = {}

document.addEventListener("mousemove", (e) => { e.preventDefault() })
document.addEventListener("dragstart", (e) => { e.preventDefault() })
document.addEventListener("visibilitychange", (e) => {
  console.log("visibilitychange", e)
  Object.keys(keys).filter(key => keys[key]).forEach(key => {
    performKey("up", key)
  })
})

keydown = (e) => {
  performKey("down", keyMapper(e));
}
keyup = (e) => {
  performKey("up", keyMapper(e));
}

performKey = (operation, key) => {

  if (key == "Tab") return;
  if (key == "Meta") return;

  // if already down do not send another down
  if (operation == "down" && keys[key]) return;
  // todo: mutex
  // set keydown immediately because it will eventually happen
  keys[key] = true;

  fetch("/key/" + operation + "/" + key).then(() => {
    // if key has been succesfully upped
    if (operation == "up") {
      keys[key] = false
    }

    console.log(keys)
  }).catch((e) => {
    console.log("key error", e)
    setTimeout(() => {
      performKey(operation, key)
    }, 1)
  })
}

document.addEventListener("keydown", keydown)
document.addEventListener("keyup", keyup)