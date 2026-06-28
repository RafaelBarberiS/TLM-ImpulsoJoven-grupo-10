const botonModo = document.getElementById("btn-modo");
const claveTema = "tema";

const obtenerTemaGuardado = () => {
  try {
    return localStorage.getItem(claveTema);
  } catch (error) {
    return null;
  }
};

const guardarTema = (tema) => {
  try {
    localStorage.setItem(claveTema, tema);
  } catch (error) {}
};

if (botonModo) {
  const iconoLuna = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M20 14.7A8 8 0 0 1 9.3 4a8.7 8.7 0 1 0 10.7 10.7Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  `;

  const iconoSol = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
      />
    </svg>
  `;

  const actualizarBoton = () => {
    const modoOscuroActivo = document.body.classList.contains("oscuro");

    botonModo.innerHTML = modoOscuroActivo ? iconoSol : iconoLuna;
    botonModo.setAttribute(
      "aria-label",
      modoOscuroActivo ? "Activar modo claro" : "Activar modo oscuro",
    );
    botonModo.setAttribute(
      "title",
      modoOscuroActivo ? "Modo claro" : "Modo oscuro",
    );
  };

  if (obtenerTemaGuardado() === "oscuro") {
    document.body.classList.add("oscuro");
  }

  actualizarBoton();

  botonModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    guardarTema(
      document.body.classList.contains("oscuro") ? "oscuro" : "claro",
    );
    actualizarBoton();
  });
}
