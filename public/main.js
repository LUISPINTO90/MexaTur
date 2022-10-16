//  ARRAY USERS
let users = [];

//  CLASS USER
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}

//  REGISTER USER ALERT
document.getElementById("btnRegister").addEventListener("click", () => {
  Swal.fire({
    customClass: {
      confirmButton: "swalBtnColor",
    },
    title: "REGÍSTRATE",
    icon: "info",
    background: "#fff",
    html: `
      <input style="margin:auto; margin-top: 1em;" type="text" id="userName" class="swal2-input" placeholder="Nombre">
      <input style="margin:auto; margin-top: 1em;" type="text" id="userEmail" class="swal2-input" placeholder="Correo">
      <input style="margin:auto; margin-top: 1em;" type="text" id="userPassWord" class="swal2-input" placeholder="Contraseña">
    `,
    confirmButtonText: "Crear cuenta",
    focusConfirm: false,
    preConfirm: () => {
      let userName = Swal.getPopup().querySelector("#userName").value;
      let userEmail = Swal.getPopup().querySelector("#userEmail").value;
      let userPassWord = Swal.getPopup().querySelector("#userPassWord").value;

      if (!userName || !userEmail || !userPassWord) {
        Swal.showValidationMessage(
          `Por favor, ingrese los datos correctamente`
        );
      }

      let newUser = new User(userName, userEmail, userPassWord);

      users.push(newUser);

      console.log(users);
    },
  });
});
