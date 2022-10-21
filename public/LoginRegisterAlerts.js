//  REGISTER USER ALERT
document.getElementById("btnRegister").addEventListener("click", () => {
  Swal.fire({
    customClass: {
      confirmButton: "swalBtnColor",
      title: "swalTitle",
      validationMessage: "validationColor",
    },
    title: "REGÍSTRATE",
    background: "#fff",
    html: `
      <form>
        <input autocomplete="off" style="margin:auto; margin-top: 1em;"
         type="text" id="userName" class="swal2-input" placeholder="Nombre">
        <input autocomplete="off" style="margin:auto; margin-top: 1em;"
         type="text" id="userEmail" class="swal2-input" placeholder="Correo">
        <input autocomplete="off" style="margin:auto; margin-top: 1em; margin-bottom: 2em;"
         type="text" id="userPassword" class="swal2-input" placeholder="Contraseña">
      </form>
    `,
    confirmButtonText: "Crear cuenta",
    focusConfirm: false,
    preConfirm: () => {
      let userName = document.getElementById("userName").value;
      let userEmail = document.getElementById("userEmail").value;
      let userPassword = document.getElementById("userPassword").value;

      emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      if (userName == "" || userEmail == "" || userPassword == "") {
        Swal.showValidationMessage(
          `Por favor, ingrese los datos correctamente`
        );
      } else {
        if (!emailRegex.test(userEmail)) {
          Swal.showValidationMessage(`Ingresa un correo v&aacute;lido`);
        } else {
          if (userEmail in localStorage) {
            Swal.showValidationMessage(`El correo ya est&aacute; en uso`);
          } else {
            let user = {
              userName: userName,
              userEmail: userEmail,
              userPassword: userPassword,
            };

            let json = JSON.stringify(user);
            localStorage.setItem(userEmail, json);

            Swal.fire({
              customClass: {
                confirmButton: "swalBtnColor",
                title: "swalTitle",
              },
              title: "REGISTRO EXITOSO",
              icon: "success",
            });
          }
        }
      }
    },
  });
});

//  LOGIN USER ALERT
document.getElementById("btnLogin").addEventListener("click", () => {
  Swal.fire({
    customClass: {
      confirmButton: "swalBtnColor",
      title: "swalTitle",
      validationMessage: "validationColor",
    },
    title: "INICIA SESI&Oacute;N",
    background: "#fff",
    html: `
      <form>
        <input autocomplete="off" style="margin:auto; margin-top: 1em;"
         type="text" id="userEmailLogin" class="swal2-input" placeholder="Correo">
        <input autocomplete="off" style="margin:auto; margin-top: 1em; margin-bottom: 2em;"
         type="text" id="userPasswordLogin" class="swal2-input" placeholder="Contraseña">
      </form>
    `,
    confirmButtonText: "Ingresar",
    focusConfirm: false,
    preConfirm: () => {
      let userEmail = document.getElementById("userEmailLogin").value;
      let userPassword = document.getElementById("userPasswordLogin").value;

      let user = localStorage.getItem(userEmail);
      let data = JSON.parse(user);
      console.log(data);

      if (user == null) {
        Swal.showValidationMessage(`Usuario incorrecto`);
      } else if (
        userEmail == data.userEmail &&
        userPassword == data.userPassword
      ) {
        window.location.href = "./views/profile.html";

        localStorage.usuario = userEmail;
      } else {
        Swal.showValidationMessage(`Contraseña incorrecta`);
      }
    },
  });
});
