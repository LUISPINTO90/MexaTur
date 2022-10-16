//  ARRAY USERS
let users = [{ name: "a", email: "a@a.com", password: "a" }];

//  CLASS USER
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

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
        <input style="margin:auto; margin-top: 1em;" type="text" id="userName" class="swal2-input" placeholder="Nombre">
        <input style="margin:auto; margin-top: 1em;" type="text" id="userEmail" class="swal2-input" placeholder="Correo">
        <input style="margin:auto; margin-top: 1em; margin-bottom: 2em" type="text" id="userPassWord" class="swal2-input" placeholder="Contraseña">
      </form>
    `,
    confirmButtonText: "Crear cuenta",
    focusConfirm: false,
    preConfirm: () => {
      let userName = Swal.getPopup().querySelector("#userName").value;
      let userEmail = Swal.getPopup().querySelector("#userEmail").value;
      let userPassWord = Swal.getPopup().querySelector("#userPassWord").value;

      emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      if (
        userName == "" ||
        userEmail == "" ||
        userPassWord == "" ||
        !emailRegex.test(userEmail)
      ) {
        Swal.showValidationMessage(
          `Por favor, ingrese los datos correctamente`
        );
      } else {
        let newUser = new User(userName, userEmail, userPassWord);

        if (users.find((user) => user.email == userEmail)) {
          Swal.showValidationMessage(`El correo ya est&aacute; en uso`);
        } else {
          users.push(newUser);

          Swal.fire({
            customClass: {
              confirmButton: "swalBtnColor",
              title: "swalTitle",
            },
            title: "REGISTRO EXITOSO",
            icon: "success",
          });

          console.log(users);
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
    },
    title: "INICIA SESI&Oacute;N",
    background: "#fff",
    html: `
      <form>
        <input style="margin:auto; margin-top: 1em;" type="text" id="userEmail" class="swal2-input" placeholder="Correo">
        <input style="margin:auto; margin-top: 1em; margin-bottom: 2em" type="text" id="userPassWord" class="swal2-input" placeholder="Contraseña">
      </form>
    `,
    confirmButtonText: "Ingresar",
    focusConfirm: false,
    preConfirm: () => {
      let userEmail = Swal.getPopup().querySelector("#userEmail").value;
      let userPassWord = Swal.getPopup().querySelector("#userPassWord").value;

      emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      if (
        userEmail == "" ||
        userPassWord == "" ||
        !emailRegex.test(userEmail)
      ) {
        Swal.showValidationMessage(
          `Por favor, ingrese los datos correctamente`
        );
      } else {
        if (
          users.find(
            (user) => user.email == userEmail && user.password == userPassWord
          )
        ) {
          window.location.href = "./profile.html";
        } else {
          Swal.showValidationMessage(
            `Por favor, ingrese los datos correctamente`
          );
        }
      }
    },
  });
});
