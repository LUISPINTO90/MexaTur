//  SEARCH ALERT
document.getElementById("btnSearch").addEventListener("click", () => {
  Swal.fire({
    customClass: {
      confirmButton: "swalBtnColor",
      title: "swalTitle",
      validationMessage: "validationColor",
    },
    title: "BUSCAR DESTINO POR...",
    background: "#fff",
    html: `
    <article>
    <input
      class="btnSearch"
      type="button"
      id="btnSearchLugar"
      value="Nombre del lugar"
    />
    </article>
    <br />
    <article>
    <input class="btnSearch"
      type="button"
      id="btnSearchEstado"
      value="Estado" 
    />
    </article>
    `,
    confirmButtonText: "OK",
    focusConfirm: false,
    preConfirm: () => {},
  });
});
