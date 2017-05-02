function abriendoFormulario(e){

  spanOculto = document.getElementById("spanOculto");
  spanOculto.style.display="block";
  var errorUno = document.getElementById("error-uno");
  errorUno.style.display="block";

  var celular = document.getElementById("celular");

  if( !(/^([9]\d{8})+$/.test(celular.value))){
    celular.style.borderColor="red";
  }
  var nombre = document.getElementById("nombre");
  if( !(/[a-zA-Z]/.test(nombre.value))){
    nombre.style.borderColor="red";
  }
  var email = document.getElementById("email");
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email.value))){
    email.style.borderColor="red";
  }
  var city = document.getElementById("city");
  if( !(/[a-zA-Z]/.test(city.value))){
    city.style.borderColor="red";
  }
}
