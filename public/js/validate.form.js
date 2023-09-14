//Con esta funcion corroboramos que el campo de IMG sea un URL y no un simple string permitiendo tambien mandarlo vacio
const validarURL = (miurl) => {
  try {
    if (miurl == "" || new URL(miurl)) {
      return true
    }
  } catch (err) {
    return false;
  }
}

//En esta funcion validamos que los campos no esten vacios y en el ultimo IF llamamos a la funcion "validarURL" para comprobar que sea un URL valido
const validateForm = () => {
  const formTitle = document.forms["Form"]["title"].value;
  const formContent = document.forms["Form"]["content"].value;
  const formAuthor = document.forms["Form"]["author"].value;
  const formImg = document.forms["Form"]["img"].value;
  if (formTitle == null || formTitle == "") {
    alert("El titulo, es obligatorio");
    return false;
  };
  if (formContent == null || formContent == "") {
    alert("El post no puede estar vacio");
    return false;
  };
  if (formAuthor == null || formAuthor == "") {
    alert("El autor es obligatorio");
    return false;
  };
  if (!validarURL(formImg)) {
    alert("La imagen debe ser un URL valido");
    return false;
  };
};