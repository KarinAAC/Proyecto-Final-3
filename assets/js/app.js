function abriendoFormulario(){
  spanOculto = document.getElementById("spanOculto");
  spanOculto.style.display="block";
  var celular = document.getElementById("celular");
  if( !(/^([9]\d{8})+$/.test(celular.value))){
    celular.style.border="0.1px solid red";
  }
  var nombre = document.getElementById("nombre");
  if( !(/[a-zA-Z]/.test(nombre.value))){
    nombre.style.border="0.1px solid red";
  }
  var email = document.getElementById("email");
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email.value))){
    email.style.border="0.1px solid red"
  }
  var city = document.getElementById("city");
  if( !(/[a-zA-Z]/.test(city.value))){
    city.style.border="0.1px solid red";
  }
}
