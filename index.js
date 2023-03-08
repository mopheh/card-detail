const cardHolder = document.querySelector("#validationCustom01")
const inputCardNumber = document.querySelector("#validationCustom02")
const inputCVV = document.querySelector("#validationCustom03")
const inputCardYear = document.querySelector("#validationCustomYear")
const inputCardMonth = document.querySelector("#validationCustomMonth")
const cardMonth = document.querySelectorAll("h5 span")[0]
const cardYear = document.querySelectorAll("h5 span")[1]
const CVV = document.querySelector(".bg-card-back span")
const cardHolderName = document.querySelector(".card-holder-name")
const cardNumber = document.querySelector(".card-number")

function cc_format(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

  v.match(/^(\d+ )*(\d+)$/)
    ? (document.querySelector(
        ".card-num-input .invalid-feedback"
      ).style.display = "none")
    : (document.querySelector(".card-num-input .invalid-feedback").innerText =
        "Wrong format, numbers only") &&
      (document.querySelector(
        ".card-num-input .invalid-feedback"
      ).style.display = "block") &&
      (document.querySelector(
        ".form-control.is-valid, .was-validated .form-control:valid"
      ).style.backgroundImage = "none")

  var matches = v.match(/\d{4,16}/g)
  var match = (matches && matches[0]) || ""
  var parts = []

  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }

  if (parts.length) {
    return parts.join(" ")
  } else {
    return value
  }
}

cardHolder.addEventListener("input", function (e) {
  cardHolderName.innerText = e.target.value
})

inputCardNumber.addEventListener("input", function (e) {
  if (e.target.value.length === 0) {
    cardNumber.innerText = cc_format("0000000000000000")
  } else {
    e.target.value = cc_format(e.target.value)
    cardNumber.innerText = e.target.value
  }
})

inputCardMonth.addEventListener("input", function (e) {
  if (e.target.value.length === 0) {
    cardMonth.innerText = "00"
  } else if (e.target.value.length >= 2) {
    e.target.value = e.target.value.slice(0, 2)
    cardMonth.innerText = e.target.value
  } else {
    cardMonth.innerText = e.target.value
  }
})

inputCardYear.addEventListener("input", function (e) {
  if (e.target.value.length === 0) {
    cardYear.innerText = "00"
  } else if (e.target.value.length >= 2) {
    e.target.value = e.target.value.slice(0, 2)
    cardYear.innerText = e.target.value
  } else {
    cardYear.innerText = e.target.value
  }
})

inputCVV.addEventListener("input", function (e) {
  if (e.target.value.length === 0) {
    CVV.innerText = "000"
  } else if (e.target.value.length >= 3) {
    e.target.value = e.target.value.slice(0, 3)
    CVV.innerText = e.target.value
  } else {
    CVV.innerText = e.target.value
  }
})
var form = document.querySelector("form")
document.querySelector("form").addEventListener(
  "submit",
  function (e) {
    if (!form.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      e.preventDefault()
      document.querySelector(".card-form").classList.add("d-none")
      document.querySelector(".complete-modal").classList.remove("d-none")
      document.querySelector(".bg-card-front").style.top = "20.5%"
    }

    form.classList.add("was-validated")
  },
  false
)
