document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Aquí puedes agregar tu lógica para validar el inicio de sesión
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Ejemplo de validación simple
    if (username === 'carlos' && password === 'contrasena') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  });
  