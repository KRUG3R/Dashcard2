function enviar(){
   
  var usuario = document.getElementById("txtLogin").value;
  var senha = document.getElementById("senha").value;

  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({"email":usuario,"racf":usuario,"senha":senha});
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://34.207.67.225:8080/login", requestOptions)
    .then(response => trataResultado(response))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

function trataResultado(resultado){
  if (resultado.status==200){
      resultado.json().then(usuario =>
          {
              localStorage.setItem("userDASH", JSON.stringify(usuario));
              window.location="dashcard.html"
          }
          
          
          );
      console.log("acesso ok"+ resultado.body)
  }
  else{
    document.getElementById("senhaIncorreta").style.visibility="visible";
  }

}

function fechar(){
  document.getElementById("senhaIncorreta").style.visibility="hidden";
}

