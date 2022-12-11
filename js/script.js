if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-05-JS/sw.js", {
    scope: "/Unit-5-05-JS/",
  })
}

;("use strict")

function calculateVolumeClicked() {
  const lengthAString = document.getElementById("lengthA").value
  const lengthBString = document.getElementById("lengthB").value
  const lengthCString = document.getElementById("lengthC").value

  const lengthA = parseFloat(lengthAString)
  const lengthB = parseFloat(lengthBString)
  const lengthC = parseFloat(lengthCString)

  // using the cosine law
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const total = lengthA + lengthB + lengthC
  if (total != 180) {
    document.getElementById("answers").innerHTML =
      "Invalid lenghts provided.  Sum must equal 180"
  } else {
    if (angleA == angleB && angleA == angleC) {
      document.getElementById("answers").innerHTML =
        "You have an equilateral triangle"
    } else if (angleA != angleB && angleA != angleC) {
      document.getElementById("answers").innerHTML =
        "You have an Isoscele triangle"
    } else if (angleA != angleB && angleA == angleC) {
      document.getElementById("answers").innerHTML =
        "You have an Scalene triangle"
    }
  }
}
