//  REGISTER USER ALERT
document.getElementById("btnRegister").addEventListener("click", () => {
  Swal.fire({
    customClass: {
      confirmButton: "swalBtnColor",
      title: "swalTitle",
    },
    title: "REGÍSTRATE",
    background: "#fff",
    html: `
      <form>
        <input style="margin:auto; margin-top: 1em; text-transform:lowercase;" type="text" id="userName" class="swal2-input" placeholder="Nombre">
        <input style="margin:auto; margin-top: 1em; text-transform:lowercase;" type="text" id="userEmail" class="swal2-input" placeholder="Correo">
        <input style="margin:auto; margin-top: 1em; margin-bottom: 2em; text-transform:lowercase;"
        type="text" id="userPassword" class="swal2-input" placeholder="Contraseña">
      </form>
    `,
    confirmButtonText: "Crear cuenta",
    focusConfirm: false,
    preConfirm: () => {
      let userName = document.getElementById("userName").value;
      let userEmail = document.getElementById("userEmail").value;
      let userPassword = document.getElementById("userPassword").value;

      let user = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
      };

      let json = JSON.stringify(user);
      localStorage.setItem(userEmail, json);
      console.log("user added");
    },
  });
});

//  LOGIN USER ALERT
document.getElementById("btnLogin").addEventListener("click", () => {
  Swal.fire({
    customClass: {
      confirmButton: "swalBtnColor",
      title: "swalTitle",
    },
    title: "INICIA SESI&Oacute;N",
    background: "#fff",
    html: `
      <form>
        <input style="margin:auto; margin-top: 1em; text-transform:lowercase;" type="text" id="userEmailLogin" class="swal2-input" placeholder="Correo">
        <input style="margin:auto; margin-top: 1em; margin-bottom: 2em; text-transform:lowercase;" type="text" id="userPasswordLogin" class="swal2-input" placeholder="Contraseña">
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
        Swal.fire({
          customClass: {
            confirmButton: "swalBtnColor",
            title: "swalTitle",
          },
          title: "USUARIO INCORRECTO",
          icon: "error",
        });
      } else if (
        userEmail == data.userEmail &&
        userPassword == data.userPassword
      ) {
        window.location.href = "./profile.html";

        localStorage.usuario = userEmail;
      } else {
        Swal.fire({
          customClass: {
            confirmButton: "swalBtnColor",
            title: "swalTitle",
          },
          title: "CONTRASEÑA INCORRECTA",
          icon: "error",
        });
      }
    },
  });
});
