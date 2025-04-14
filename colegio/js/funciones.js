function ver_login() {
    const contenido = document.getElementById('formulario');

    if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
        
      } else {
        contenido.style.display = 'none';
  }}
function iniciarSesion(respuesta) {
    respuesta.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    
        
      
    if (usuario === "diego" && contrasena === "1234") {
      document.getElementById('mensaje').textContent = "Inicio de sesión exitoso.";
      document.getElementById('mensaje').style.color = "green";
    } else {
      document.getElementById('mensaje').textContent = "Credenciales incorrectas.";
      document.getElementById('mensaje').style.color = "red";
    }

    return false;
  }
  
  function ver_Más() {
    const contenido = document.getElementById('contenidoNoticia');
    const boton = document.getElementById('btn_Ver');

    if (contenido.style.display === 'none' || contenido.style.display === '') {
      contenido.style.display = 'block';
      boton.textContent = 'Ver menos';
    } else {
      contenido.style.display = 'none';
      boton.textContent = 'Ver más';
    }
  }
  function ver_Más_2() {
    const contenido = document.getElementById('contenidoNoticia_2');
    const boton = document.getElementById('btn_Ver_2');

    if (contenido.style.display === 'none' || contenido.style.display === '') {
      contenido.style.display = 'block';
      boton.textContent = 'Ver menos';
    } else {
      contenido.style.display = 'none';
      boton.textContent = 'Ver más';
    }
  }
  function ver_Más_3() {
    const contenido = document.getElementById('contenidoNoticia_3');
    const boton = document.getElementById('btn_Ver_3');

    if (contenido.style.display === 'none' || contenido.style.display === '') {
      contenido.style.display = 'block';
      boton.textContent = 'Ver menos';
    } else {
      contenido.style.display = 'none';
      boton.textContent = 'Ver más';
    }
  }
  function ver_Más_4() {
    const contenido = document.getElementById('contenidoNoticia_4');
    const boton = document.getElementById('btn_Ver_4');

    if (contenido.style.display === 'none' || contenido.style.display === '') {
      contenido.style.display = 'block';
      boton.textContent = 'Ver menos';
    } else {
      contenido.style.display = 'none';
      boton.textContent = 'Ver más';
    }
  }