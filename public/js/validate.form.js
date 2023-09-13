const validarURL = (miurl) => {
  try {
    if (miurl == "" || new URL(miurl)) {
      return true
    }
  } catch (err) {
    return false;
  }
}

const validateForm = () => {
  let a = document.forms["Form"]["title"].value;
  let b = document.forms["Form"]["content"].value;
  let c = document.forms["Form"]["author"].value;
  let d = document.forms["Form"]["img"].value;
  if (a == null || a == "") {
    alert("El titulo, es obligatorio");
    return false;
  }
  if (b == null || b == "") {
    alert("El post no puede estar vacio");
    return false;
  }
  if (c == null || c == "") {
    alert("El autor es obligatorio");
    return false;
  }
  if (!validarURL(d)) {
    alert("La imagen debe ser un URL valido");
    return false;
  }
}