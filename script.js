const reglasPorEscrito = {
  nep_vencimiento: {
    mostrar: ["nepExtras"],
    textoFechaDemandaNotificacion: "Fecha demanda:"
  },
  nep_aceleracion_vencimiento: {
    mostrar: ["nepExtras"],
    textoFechaDemandaNotificacion: "Fecha demanda:"
  },
  exc_aceleracion: {
    mostrar: ["nepExtras"],
    textoFechaDemandaNotificacion: "Fecha notificación:"
  },
  ab6_sentencia: {
    mostrar: ["camposExtras"],
    textoFecha: "Fecha gestión útil:"
  },
  ab6_auto_prueba: {
    mostrar: ["camposExtras"],
    textoFecha: "Fecha gestión útil:"
  },
  ab3_mev_cumplase: {
    mostrar: ["camposExtras"],
    textoFecha: "Fecha gestión útil:"
  },
  ab3_mev_embargo_muebles: {
    mostrar: ["camposExtras"],
    textoFecha: "Fecha gestión útil:"
  },
  ab3_recepcion_exhorto: {
    mostrar: ["camposExtras", "ejecutadoExtras"],
    ocultar: ["bloqueSuscriptorExcepcion"],
    textoFecha: "Fecha gestión útil:"
  },
  ab3_retiro_frustrado: {
    mostrar: ["camposExtras", "ejecutadoExtras"],
    ocultar: ["bloqueSuscriptorExcepcion"],
    textoFecha: "Fecha gestión útil:"
  },
  apelacion_firma: {
    mostrar: ["camposExtras", "bloqueSuscriptorApelacion", "bloqueCorteApelaciones"],
    textoFecha: "Fecha de Sentencia:"
  },
  apelacion_autocontrato: {
    mostrar: ["camposExtras", "bloqueSuscriptorApelacion", "bloqueCorteApelaciones"],
    textoFecha: "Fecha de Sentencia:"
  },
  apelacion_inoponibilidad: {
    mostrar: ["camposExtras", "bloqueSuscriptorApelacion", "bloqueCorteApelaciones"],
    textoFecha: "Fecha de Sentencia:"
  },
  apelacion_iliquidez: {
    mostrar: ["camposExtras", "bloqueSuscriptorApelacion", "bloqueCorteApelaciones"],
    textoFecha: "Fecha de Sentencia:"
  },
  repo_fea: {
  mostrar: ["camposExtras", "bloqueCorteApelaciones"],
    textoFecha: "Fecha de Resolución:"
  },
  repo_ter: {
  mostrar: ["camposExtras"],
  textoFecha: "Fecha de Resolución:"
  },
  not_email: {
  mostrar: ["camposExtras"],
  textoFecha: "Fecha de Resolución:"
  },
  excepcion_inoponibilidad: {
    mostrar: ["ejecutadoExtras", "bloqueSuscriptorExcepcion"]
  },
  excepcion_autocontrato: {
    mostrar: ["ejecutadoExtras", "bloqueSuscriptorExcepcion"]
  },
  desbloqueo_causa: {
    mostrar: ["desbloqueoCausa"]
  },
  excepcion_firma: {
    mostrar: ["desbloqueoCausa"]
  },
  excepcion_firma_bancoChile: {
    mostrar: ["desbloqueoCausa"]
  },
  excepcion_clinica: {
    mostrar: ["desbloqueoCausa"]
  },
  excepcion_iliquidez: {
    mostrar: ["desbloqueoCausa"]
  },
  excepcion_autocontrato_cencosud: {
    mostrar: ["ejecutadoExtras", "bloqueSuscriptorExcepcion"]
  },
  apelacion_autocontrato_cencosud: {
    mostrar: ["camposExtras", "bloqueSuscriptorApelacion", "bloqueCorteApelaciones"],
    textoFecha: "Fecha de Sentencia:"
  },
  objeta_minimo: {
    mostrar: ["desbloqueoCausa"]
  },
  remision_lv: {
  mostrar: ["remisionLvExtras", "camposExtras"],
  textoFecha: "Fecha de Resolución:"
},
};
const validacionesPorEscrito = {
  ab3_recepcion_exhorto: ["ejecutado", "fechaSentencia"],
  apelacion_firma: ["suscriptorApelacion", "fechaSentencia", "corteApelaciones"],
  excepcion_inoponibilidad: ["ejecutado", "suscriptorExcepcion"],
  excepcion_autocontrato: ["ejecutado", "suscriptorExcepcion"],
  nep_vencimiento: ["ejecutadoNep", "fechaMora", "fechaDemanda"],
  exc_aceleracion: ["ejecutadoNep", "fechaMora", "fechaNotificacion"],
  remision_lv: ["tribunal_lv", "rol_lv", "caratulado_lv", "fechaSentencia"],

  // Agrega otros casos según necesites
};

const clasesVisualesPorTipo = {
  nep_vencimiento: "tipo-nep",
  nep_aceleracion_vencimiento: "tipo-nep",
  exc_aceleracion: "tipo-nep",
  apelacion_firma: "tipo-apelacion",
  apelacion_inoponibilidad: "tipo-apelacion",
  apelacion_autocontrato: "tipo-apelacion",
  excepcion_inoponibilidad: "tipo-excepcion",
  excepcion_autocontrato: "tipo-excepcion",
  ab3_recepcion_exhorto: "tipo-default"
};

const tipsPorEscrito = {
  ab3_recepcion_exhorto: `
    <strong>📎 AB3 recepción exhorto (desarchivo)</strong><br>
    Este escrito solicita al tribunal el abandono del procedimiento considerando la recepción del exhorto como última gestión útil<br><br>
    <strong>Contenido:</strong><br>
    - PRIMER OTROSI: Solicitud abandono<br>
    - SEGUNDO OTROSI: Desarchivo<br>
    - TERCER OTROSI: Tenga presente (FEA)<br>
    - CUARTO OTROSI: Patrocinio y poder<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha de la última gestión útil
  `,
  excepcion_inoponibilidad: `
    <strong>📎 Excepción de inoponibilidad</strong><br>
    Se presenta cuando el pagaré es suscrito por una empresa externa<br><br>
    <strong>Debes completar:</strong><br>
    - Ejecutado<br>
    - Suscriptor (empresa externa)<br><br>
    ⚠️ Verifica que los campos se hayan reemplazado correctamente.
  `,
  apelacion_firma: `
    <strong>📎 Apelación por excepción de 7 firma</strong><br>
    Apelación de sentencia definitiva que desestima excepción 7 firma.<br><br>
    <strong>Debes completar:</strong><br>
    - Fecha de sentencia<br>
    - Suscriptor (ejecutante)<br>
    - Corte de apelaciones<br><br>
    ✅ Asegúrate de revisar bien los argumentos de la sentencia.
    `,
  excepcion_autocontrato: `
    <strong>📎 Excepción autocontrato</strong><br>
    Se presenta cuando el pagaré es suscrito por el ejecutante<br><br>
    <strong>Debes completar:</strong><br>
    - Ejecutado<br>
    - Suscriptor (empresa ejecutante)<br><br>
    ⚠️ Verifica que los campos se hayan reemplazado correctamente.
    `,
   excepcion_autocontrato_cencosud: `
    <strong>📎 Excepción autocontrato</strong><br>
    Se presenta cuando el ejecutante es Cencosud, cuyos mandatos no contienen las facultades de forma expresa<br><br>
    <strong>Debes completar:</strong><br>
    - Ejecutado<br>
    - Suscriptor (empresa ejecutante)<br><br>
    ⚠️ Verifica que los campos se hayan reemplazado correctamente.
    `, 
   excepcion_clinica: `
    <strong>📎 Excepción 7 clínica</strong><br>
    Se presenta cuando se firma un pagaré en blanco por el ejecutado, siendo rellenado posteriormente por el ejecutante. Generalmente lo usan las clínicas <br><br>
    <strong>Debes completar:</strong><br>
    - Ejecutado<br>
    ⚠️ Verifica que los campos se hayan reemplazado correctamente.
    `, 
    excepcion_iliquidez: `
    <strong>📎 Excepción 7 iliquidez</strong><br>
    Se presenta cuando el título ejecutivo es un mutuo hipotecario, argumentando que no se acompaña la tabla de desarrollo<br><br>
    <strong>Debes completar:</strong><br>
    - Ejecutado<br>
    ⚠️ Verifica que los campos se hayan reemplazado correctamente.
    `,
    excepcion_firma: `
    <strong>📎 Excepción 7 firma</strong><br>
    Se presenta cuando el pagaré es firmado por el ejecutado, argumentando que la autorización notarial no se hizo legalmente<br><br>
    <strong>Debes completar:</strong><br>
    - Ejecutado<br>
    ⚠️ Verifica que los campos se hayan reemplazado correctamente.
    `,
    excepcion_firma_bancoChile: `
    <strong>📎 Excepción 7 firma (Banco de Chile)</strong><br>
    Se presenta cuando el pagaré de Banco de Chile es firmado por el ejecutado, argumentando que la autorización notarial no se hizo legalmente, por los siguientes motivos:<br><br>
    1.- Timbre genérico.<br>
    2.- No indica forma a través de la cual le consta identidad del suscriptor.<br>
    3.- Transcurrió bastante tiempo entre suscripción y autorización notarial.<br><br>
    ⚠️ Deberás cambiar el print de la autorización notarial.<br>
    ⚠️ El punto 3 depende de que haya transcurrido un tiempo excesivo entre la suscripción y autorización. De no ser así, se debe eliminar este argumento.<br>
    ⚠️ En general, debes fijarte de que el pagaré del banco contenga las deficiencias que se señalan en la excepción, ya que se contienen detalles que pueden variar.
    `,
    exc_aceleracion: `
    <strong>📎 Excepción 17 aceleración parcial</strong><br>
    Se presenta respecto de los pagarés en cuotas, cuando ha transcurrido un año desde la mora<br><br>
    <strong>Debes completar:</strong><br>
    - Ejecutado<br>
    - Fecha mora<br>
    - Fecha notificación<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha de la mora y de notificación
    `,
    nep_vencimiento: `
    <strong>📎 NEP vencimiento</strong><br>
    Se presenta respecto de los pagarés que no tienen cuotas, cuando ha transcurrido un año desde el vencimiento de la obligación<br><br>
    <strong>Contenido:</strong><br>
    - EN LO PRINCIPAL: Notificación y requerimiento expreso<br>
    - PRIMER OTROSI: Opone excepciones<br>
    - SEGUNDO OTROSI: Medios de prueba<br>
    - TERCER OTROSI: Objeta documentos<br>
    - CUARTO OTROSI: Suspensión del procedimiento<br>
    - QUINTO OTROSI: Desarchivo<br>
    - SEXTO OTROSI: Tenga presente (FEA)<br>
    - SEPTIMO OTROSI: Patrocinio y poder<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha del vencimiento y de la demanda
    ⚠️ Aparece como fecha mora, pero se refiere a la fecha del vencimiento
    `,
    nep_aceleracion_vencimiento: `
    <strong>📎 NEP aceleración vencimiento</strong><br>
    Se presenta respecto de los pagarés en cuotas, cuando ha transcurrido un año desde el ingreso de la demanda<br><br>
    <strong>Contenido:</strong><br>
    - EN LO PRINCIPAL: Notificación y requerimiento expreso<br>
    - PRIMER OTROSI: Opone excepciones<br>
    - SEGUNDO OTROSI: Medios de prueba<br>
    - TERCER OTROSI: Objeta documentos<br>
    - CUARTO OTROSI: Suspensión del procedimiento<br>
    - QUINTO OTROSI: Desarchivo<br>
    - SEXTO OTROSI: Tenga presente (FEA)<br>
    - SEPTIMO OTROSI: Patrocinio y poder<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha de la mora y de la demanda
    `,
    ab6_sentencia: `
    <strong>📎 AB6 sentencia</strong><br>
    Este escrito solicita al tribunal el abandono del procedimiento considerando la "sentencia definitiva" como última gestión útil. Hay patrocinio y poder de Mario Espinosa <br><br>
    <strong>Contenido:</strong><br>
    - PRINCIPAL: Solicitud abandono<br>
    - OTROSI: Desarchivo<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha de la última gestión útil
  `,
  ab6_auto_prueba: `
    <strong>📎 AB6 auto de prueba</strong><br>
    Este escrito solicita al tribunal el abandono del procedimiento considerando el "auto de prueba" como última gestión útil. Hay patrocinio y poder de Mario Espinosa<br><br>
    <strong>Contenido:</strong><br>
    - PRINCIPAL: Solicitud abandono<br>
    - OTROSI: Desarchivo<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha de la última gestión útil
  `,
  ab3_mev_cumplase:`
    <strong>📎 AB3 cúmplase</strong><br>
    Este escrito solicita al tribunal el abandono del procedimiento considerando el "cúmplase" como última gestión útil. Hay patrocinio y poder de Mario Espinosa<br><br>
    <strong>Contenido:</strong><br>
    - PRINCIPAL: Solicitud abandono<br>
    - OTROSI: Desarchivo<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha de la última gestión útil
  `,
  ab3_mev_embargo_muebles:`
    <strong>📎 AB3 embargo bienes muebles</strong><br>
    Este escrito solicita al tribunal el abandono del procedimiento considerando el "embargo de bienes muebles" como última gestión útil. Hay patrocinio y poder de Mario Espinosa<br><br>
    <strong>Contenido:</strong><br>
    - PRINCIPAL: Solicitud abandono<br>
    - OTROSI: Desarchivo<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha de la última gestión útil
  `,
   ab3_retiro_frustrado:`
    <strong>📎 AB3 retiro frustrado</strong><br>
    Este escrito solicita al tribunal el abandono del procedimiento considerando "el retiro frustrado de muebles" como última gestión útil<br><br>
    <strong>Contenido:</strong><br>
    - PRIMER OTROSI: Solicitud abandono<br>
    - SEGUNDO OTROSI: Desarchivo<br>
    - TERCER OTROSI: Tenga presente (FEA)<br>
    - CUARTO OTROSI: Patrocinio y poder<br><br>
    ⚠️ Verifica que hayas ingresado correctamente la fecha de la última gestión útil
  `,
  se_provean_excepciones:`
    <strong>📎 Se provean excepciones</strong><br>
    Este escrito solicita al tribunal que se provean las excepciones y confiera traslado<br><br>
    ⚠️ Muy importante que el tribunal provea excepciones, ya que así suspendemos el apremio y aplica hipótesis del AB6
  `,
  se_reciba_causa_prueba:`
    <strong>📎 Se reciba causa a prueba</strong><br>
    Este escrito solicita al tribunal que se reciba la causa a prueba<br><br>
    ⚠️ Importante dejar la causa judicial con auto de prueba sin notificar, ya que en ese estado procede el AB6<br>
    ⚠️ Si la excepción es dilatoria, espera entre 1 y 2 meses antes de solicitar que se reciba la causa a prueba<br><br>
  `,
  omita_prueba_prescripcion:`
    <strong>📎 Omita recibir la causa a prueba y cite a oír sentencia</strong><br>
    Este escrito solicita al tribunal que se omita la recepción de la causa a prueba y, en su lugar, que se cite a las partes a oír sentencia<br><br>
    ⚠️ Se usa en los casos en que tenemos la certeza de que la sentencia será favorable a nosotros<br>
    
  `,
  notificacion_auto_prueba:`
    <strong>📎 Notificación expresa del auto de prueba</strong><br>
    En este escrito solicitamos al tribunal que nos tenga por notificados expresamente del auto de prueba<br><br>
    ⚠️ Aplica en aquellos casos en que presentamos excepción de prescripción y el objetivo es llegar hasta sentencia<br>
    ⚠️ No aplica en excepciones dilatorias<br><br>
  `,
  citacion_oir_sentencia:`
    <strong>📎 Se cite a las partes a oír sentencia </strong><br>
    En este escrito solicitamos al tribunal que cite a las partes a oír sentencia<br><br>
  `,
  notificacion_sentencia_desbloqueo:`
    <strong>📎 Notificación expresa de sententencia y desbloqueo</strong><br>
    En este escrito solicitamos al tribunal que nos tenga por notificados expresamente de la sentencia y que se visualice la sentencia para acceder a su contenido<br><br>
    ⚠️ Aplica en aquellos casos en que presentamos excepción de prescripción y el objetivo es llegar hasta sentencia<br>
    ⚠️ No aplica en excepciones dilatorias<br><br>
  `,
  ejecutoria_excepciones:`
    <strong>📎 Se certifique ejecutoria </strong><br>
    En este escrito solicitamos al tribunal que certifique que la sentencia que acoge nuestras excepciones se encuentra firme y ejecutoriada<br><br>
  `,
  se_provea_abandono:`
    <strong>📎 Se provea abandono del procedimiento</strong><br>
    Este escrito solicita al tribunal que se provea nuestra presentación de abandono del procedimiento y le confiera traslado<br><br>
    ⚠️ Debemos asegurarnos de que el tribunal haya ordenado notificar por cédula, para evitar futuras nulidades
  `,
  se_resuelva_abandono:`
    <strong>📎 Se falle abandono del procedimiento</strong><br>
    Este escrito solicita al tribunal que se falle nuestra presentación de abandono del procedimiento <br><br>
    ⚠️ Debemos asegurarnos de que el tribunal haya ordenado notificar por cédula, para evitar futuras nulidades
  `,
  ejecutoria_abandono:`
    <strong>📎 Se certifique ejecutoria </strong><br>
    En este escrito solicitamos al tribunal que certifique que la resolución que acoge el abandono del procedimiento se encuentra firme y ejecutoriada<br><br>
  `,
  repo_fea:`
    <strong>📎 Reposición FEA de mandante y mandatario</strong><br>
    Escrito de reposición en contra de resolución que ordena ratificar, argumentando que nuestra presentación cuenta con FEA del mandante y del mandatario <br><br>
  `,
  repo_ter:`
    <strong>📎 Reposición TER puntos de prueba</strong><br>
    Escrito de reposición en contra de resolución que recibe indicente a prueba, pidiendo que se agreguen los siguientes puntos de prueba:<br><br>
    - Calidad en que el tercerista reside en domicilio del embargo<br>
    - Si tercerista tiene posesión exclusiva y excluyente<br><br>
    ⚠️ Recuerda que las tercerías son patrocinadas por Patricio Meza
  `,
  desbloqueo_causa:`
    <strong>📎 Desbloqueo causa judicial</strong><br>
    Escrito que usamos cuando la causa judicial no es visible y ha transcurrido un año desde la demanda. El objetivo es pedir que se visualice la causa judicial para acceder a su contenido y confirmar que procede prescripción<br><br>
    <strong>Contenido:</strong><br>
    - PRINCIPAL: Solicitud desarchivo<br>
    - PRIMER OTROSI: Notificación expresa<br>
    - SEGUNDO OTROSI: Solicitud desbloqueo<br>
    - TERCER OTROSI: Tenga presente (FEA)<br>
    - CUARTRO OTROSI: Patrocinio y poder<br><br>
    ⚠️ Asegúrate de que se trata de un pagaré y no de un título que prescriba en 3 años<br>
    ⚠️ Siempre debemos presentar con FEA de cliente o, en su defecto, con mandato judicial
  `,
    objeta_minimo: `
    <strong>📎 Objeta mínimo de subasta</strong><br>
    Se presenta para objetar el mínimo de subasta y pedir se fije audiencia para designar un perito tasador<br><br>
    <strong>Contenido:</strong><br>
    - PRINCIPAL: Objeta mínimo<br>
    - PRIMER OTROSI: Se fije fecha designación de perito<br>
    - SEGUNDO OTROSI: Tenga presente (FEA)<br>
    - TERCER OTROSI: Patrocinio y poder <br><br>
    `,
    not_email: `
    <strong>📎 Solicita se notifique por email</strong><br>
    Se presenta para solicitar al tribunal que se notifique por email el auto de prueba, sentencia o resolución que ordena comparecencia personal<br><br>
    <strong>Debes completar:</strong><br>
    - Fecha de resolución: Se refiere a la fecha de la resolución que se pretende notificar
  
    `,
  // Puedes seguir agregando más...
};


  function mostrarCamposExtras() {
  const tipoEscrito = document.getElementById("tipoEscrito").value;
  const labelFecha = document.getElementById("labelFecha");
  const labelFechaDemandaNotificacion = document.getElementById("labelFechaDemandaNotificacion");

  resetearCamposExtras(); // Oculta todos los campos opcionales

  const regla = reglasPorEscrito[tipoEscrito];

  if (regla) {
    // Mostrar elementos definidos en la regla
    if (regla.mostrar && Array.isArray(regla.mostrar)) {
      regla.mostrar.forEach(mostrarElemento);
    }

    // Ocultar elementos definidos en la regla
    if (regla.ocultar && Array.isArray(regla.ocultar)) {
      regla.ocultar.forEach(ocultarElemento);
    }

    // Cambiar el texto del label de fecha si se especifica
    if (regla.textoFecha) {
      labelFecha.textContent = regla.textoFecha;
    }

    if (regla.textoFechaDemandaNotificacion) {
      labelFechaDemandaNotificacion.textContent = regla.textoFechaDemandaNotificacion;
    }

    // Aplicar estilo visual del formulario si corresponde
    const form = document.getElementById("formulario");
    form.classList.remove("tipo-nep", "tipo-apelacion", "tipo-excepcion", "tipo-default");
    const claseNueva = clasesVisualesPorTipo[tipoEscrito] || "tipo-default";
    form.classList.add(claseNueva);
  }

  // ✅ Siempre mostrar el tip si existe, independiente de la existencia de regla
  const tipContenedor = document.getElementById("guiaTip");
  if (tipsPorEscrito[tipoEscrito]) {
    tipContenedor.innerHTML = tipsPorEscrito[tipoEscrito];
    tipContenedor.classList.remove("hidden");
  } else {
    tipContenedor.innerHTML = "";
    tipContenedor.classList.add("hidden");
  }
}

  

function mostrarElemento(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("hidden");
}

function ocultarElemento(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

function resetearCamposExtras() {
  ["camposExtras", "ejecutadoExtras", "desbloqueoCausa", "nepExtras", "bloqueSuscriptorApelacion", "bloqueCorteApelaciones", "bloqueSuscriptorExcepcion", "remisionLvExtras"]
    .forEach(ocultarElemento);
}

// 👉 NUEVA FUNCIÓN GLOBAL DE VALIDACIÓN PARA TODOS LOS FORMULARIOS
function validarCamposObligatorios(formularioId) {
  const formulario = document.getElementById(formularioId);
  const campos = formulario.querySelectorAll("input, select, textarea");

  for (let campo of campos) {
    const id = campo.id || "";
    const label = campo.previousElementSibling?.textContent?.toLowerCase() || "";

    const esExcepcion = (
      id.toLowerCase().includes("precisarencargo") ||
      id.toLowerCase().includes("idcausa") ||
      label.includes("buscar causa por id") ||
      label.includes("id causa")
    );

    const esVisible = campo.offsetParent !== null; // asegura que el campo esté visible (por si se oculta dinámicamente)

    if (!esExcepcion && esVisible && !campo.value.trim()) {
      alert(`⚠️ Debes completar el campo: ${campo.previousElementSibling?.textContent || id}`);
      campo.focus();
      return false;
    }
  }

  return true;
}

// ✅ MODIFICAR FUNCIÓN ENVIAR FORMULARIO PARA USAR VALIDACIÓN GLOBAL
function enviarFormulario() {
  if (!validarCamposObligatorios("formulario")) return;

  const tipoEscrito = document.getElementById("tipoEscrito").value;
  const camposAValidar = validacionesPorEscrito[tipoEscrito] || [];

  for (let id of camposAValidar) {
    const campo = document.getElementById(id);
    if (campo && !campo.value.trim()) {
      alert(`⚠️ Debes completar el campo: ${campo.previousElementSibling?.textContent || id}`);
      campo.focus();
      return;
    }
  }

  const datos = {
    tribunal: document.getElementById("tribunal").value,
    rolCausa: document.getElementById("rolCausa").value,
    caratulado: document.getElementById("caratulado").value,
    tipoEscrito: tipoEscrito,
    fechaSentencia: document.getElementById("fechaSentencia")?.value || "",
    suscriptorApelacion: document.getElementById("suscriptorApelacion")?.value || "",
    suscriptorExcepcion: document.getElementById("suscriptorExcepcion")?.value || "",
    corteApelaciones: document.getElementById("corteApelaciones")?.value || "",
    desbloqueo: document.getElementById("desbloqueo")?.value || "",
    ejecutado: document.getElementById("ejecutadoNep")?.value ||
               document.getElementById("ejecutado")?.value || "",
    fechaMora: ["nep_vencimiento", "nep_aceleracion_vencimiento", "exc_aceleracion"].includes(tipoEscrito)
                ? document.getElementById("fechaMora")?.value || "" : "",
    fechaDemanda: ["nep_vencimiento", "nep_aceleracion_vencimiento"].includes(tipoEscrito)
                ? document.getElementById("fechaDemandaNotificacion")?.value || "" : "",
    fechaNotificacion: tipoEscrito === "exc_aceleracion"
                ? document.getElementById("fechaDemandaNotificacion")?.value || "" : "",
    tribunal_lv: document.getElementById("tribunal_lv")?.value || "",
    rol_lv: document.getElementById("rol_lv")?.value || "",
    caratulado_lv: document.getElementById("caratulado_lv")?.value || "",
    ejecutado_remision: document.getElementById("ejecutado_remision")?.value || "",
  };

  // Selección dinámica del suscriptor
  if (["apelacion_firma", "apelacion_autocontrato", "apelacion_inoponibilidad", "repo_fea"].includes(tipoEscrito)) {
    datos.suscriptor = document.getElementById("suscriptorApelacion").value;
  } else if (["excepcion_inoponibilidad", "excepcion_autocontrato"].includes(tipoEscrito)) {
    datos.suscriptor = document.getElementById("suscriptorExcepcion").value;
  } else {
    datos.suscriptor = "";
  }

  mostrarSpinner();

  // ⚠️ Reemplaza esta URL con la URL real de tu Web App publicada en GAS
  const URL_WEBAPP = "https://script.google.com/macros/s/AKfycbxw-TnmxLSnfMmvyuv36U_gUBKxq2mIHHtR9-IFRyx9tLftB7jXm0QJ1VDPf7ASK5UX/exec";

  fetch(URL_WEBAPP, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(datos)
})
.then(response => response.json())
.then(data => {
  ocultarSpinner();
  if (data.url && data.url.includes("https://")) {
    window.open(data.url, "_blank");
    alert("✅ PDF generado. Descárgalo y súbelo a la OJV.");
    document.getElementById("formulario").reset();
    resetearCamposExtras();
  } else {
    alert("⚠️ Hubo un error: " + data.url);
  }
})
.catch(error => {
  ocultarSpinner();
  console.error("❌ Error en fetch:", error);
  alert("❌ Error al generar el escrito: " + error.message);
});




document.addEventListener("DOMContentLoaded", mostrarCamposExtras);

function buscarCausa() {
  const id = document.getElementById("idCausa").value.trim();
  if (!id) return alert("Ingrese un ID");

  google.script.run
    .withSuccessHandler(function(causa) {
      if (causa) {
        document.getElementById("tribunal").value = causa.nombre || "";      // Tribunal
        document.getElementById("rolCausa").value = causa.code || "";        // Rol de causa
        document.getElementById("caratulado").value = causa.title || "";     // Caratulado
      } else {
        alert("⚠️ No se encontró una causa con ese ID");
      }
    })
    .withFailureHandler(function(error) {
      alert("❌ Error al buscar la causa: " + error.message);
    })
    .obtenerDatosCausa(id);
}

function cambiarModo() {
  const modo = document.getElementById("selectorModo").value;


  // Oculta todos los formularios
  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("formularioPagos").classList.add("hidden");
  document.getElementById("formularioEncargos").classList.add("hidden");
  document.getElementById("formularioDesarchivo").classList.add("hidden");
  document.getElementById("formulario-rut-especial").classList.add("hidden"); // ✅ Oculta RUT

  // Oculta el botón de planilla por defecto
  const botonPlanilla = document.getElementById("verPlanillaBtn");
  botonPlanilla.style.display = "inline"; // Lo mostramos por defecto

  // Muestra el formulario correspondiente
  if (modo === "escritos") {
    document.getElementById("formulario").classList.remove("hidden");
  } else if (modo === "pagos") {
    document.getElementById("formularioPagos").classList.remove("hidden");
  } else if (modo === "encargos") {
    document.getElementById("formularioEncargos").classList.remove("hidden");
  } else if (modo === "desarchivo") {
    document.getElementById("formularioDesarchivo").classList.remove("hidden");
  } else if (modo === "rut-especial") {
    document.getElementById("formulario-rut-especial").classList.remove("hidden"); // ✅ Muestra RUT
     // Ocultamos el botón solo para este modo
    botonPlanilla.style.display = "none";
  }
}




function autoCompletarCausa(tipo) {
  const idInput = document.getElementById("idCausa" + tipo).value.trim();
  if (!idInput) return;

  google.script.run.withSuccessHandler(function(causa) {
    if (causa) {
      document.getElementById("cliente" + tipo).value = causa.client || "";        // Cliente
      document.getElementById("rut" + tipo).value = causa.identifier || "";        // RUT
      document.getElementById("rol" + tipo).value = causa.code || "";              // Rol de causa
      setSelectValueByText("tribunal" + tipo, causa.nombre || "");                // Tribunal (select)
    } else {
      alert("⚠️ No se encontró una causa con ese ID");
    }
  }).obtenerDatosCausa(idInput);
}

function setSelectValueByText(selectId, value) {
  const select = document.getElementById(selectId);
  for (let option of select.options) {
    if (option.value === value) {
      select.value = value;
      return;
    }
  }
}



// ✅ APLICAR LA MISMA VALIDACIÓN EN GUARDAR ENCARGOS
function guardarEncargo(tipoEncargo) {
  const formId = tipoEncargo === 'pago_receptor' ? 'formularioPagos'
                : tipoEncargo === 'encargo_receptor' ? 'formularioEncargos'
                : 'formularioDesarchivo';

  if (!validarCamposObligatorios(formId)) return;

  const sufijo = tipoEncargo === 'pago_receptor' ? 'Pagos'
                : tipoEncargo === 'encargo_receptor' ? 'Encargo'
                : 'Desarchivo';

  const datos = {
    tipoEncargo,
    solicitante: document.getElementById("solicitante" + sufijo).value,
    cliente: document.getElementById("cliente" + sufijo).value,
    rut: document.getElementById("rut" + sufijo).value,
    rolCausa: document.getElementById("rol" + sufijo).value,
    tribunal: document.getElementById("tribunal" + sufijo).value,
  };

  if (tipoEncargo === 'pago_receptor' || tipoEncargo === 'desarchivo') {
    datos.monto = document.getElementById("monto" + sufijo).value;
    datos.fechaPago = document.getElementById("fechaPago" + sufijo).value;
    datos.tipoGestion = document.getElementById("tipoGestion" + sufijo).value;
    datos.precisarEncargo = document.getElementById("precisarEncargo" + sufijo).value || "";
    datos.estadoSolicitud = "";
    datos.comprobanteImagen = tipoEncargo === 'desarchivo' ? imagenBase64Desarchivo : imagenBase64;
  } else {
    datos.tipoEncargoDescripcion = document.getElementById("tipoEncargoDescripcion").value;
    datos.fechaResolucion = document.getElementById("fechaResolucionEncargo").value;
    datos.folio = document.getElementById("folioEncargo").value;
    datos.cuaderno = document.getElementById("cuadernoEncargo").value;
    datos.precisarEncargo = document.getElementById("precisarEncargo").value;
    datos.estadoSolicitud = document.getElementById("estadoSolicitudEncargo").value;
  }

  mostrarSpinner();

  google.script.run
    .withSuccessHandler(function(mensaje) {
      ocultarSpinner();
      alert(mensaje);

      if (tipoEncargo === 'pago_receptor') {
        document.getElementById("formularioPagos").reset();
        document.getElementById("imagenPreview").style.display = "none";
        document.getElementById("contenedorImagen").innerHTML = '<p style="color:#888;">Pega aquí tu imagen (Ctrl+V)</p>';
        imagenBase64 = "";
      } else if (tipoEncargo === 'desarchivo') {
        document.getElementById("formularioDesarchivo").reset();
        document.getElementById("imagenPreviewDesarchivo").style.display = "none";
        document.getElementById("contenedorImagenDesarchivo").innerHTML = '<p style="color:#888;">Pega aquí tu imagen (Ctrl+V)</p>';
        imagenBase64Desarchivo = "";
      } else {
        document.getElementById("formularioEncargos").reset();
      }

      descargarTicketPDF(datos, tipoEncargo);
      generarComprobanteTicket(datos, tipoEncargo);
    })
    .withFailureHandler(function(error) {
      ocultarSpinner();
      alert("❌ Ocurrió un error: " + error.message);
    })
    .guardarEncargoAdministrativo(datos);
}



// Unificación de listas de tribunales en todos los selects relacionados
function poblarTribunalesEn(selectId) {
  const listaTribunales = [
    "1° Juzgado Civil de Santiago", "2° Juzgado Civil de Santiago", "3° Juzgado Civil de Santiago",
    "4° Juzgado Civil de Santiago", "5° Juzgado Civil de Santiago", "6° Juzgado Civil de Santiago",
    "7° Juzgado Civil de Santiago", "8° Juzgado Civil de Santiago", "9° Juzgado Civil de Santiago",
    "10° Juzgado Civil de Santiago", "11° Juzgado Civil de Santiago", "12° Juzgado Civil de Santiago",
    "13° Juzgado Civil de Santiago", "14° Juzgado Civil de Santiago", "15° Juzgado Civil de Santiago",
    "16° Juzgado Civil de Santiago", "17° Juzgado Civil de Santiago", "18° Juzgado Civil de Santiago",
    "19° Juzgado Civil de Santiago", "20° Juzgado Civil de Santiago", "21° Juzgado Civil de Santiago",
    "22° Juzgado Civil de Santiago", "23° Juzgado Civil de Santiago", "24° Juzgado Civil de Santiago",
    "25° Juzgado Civil de Santiago", "26° Juzgado Civil de Santiago", "27° Juzgado Civil de Santiago",
    "28° Juzgado Civil de Santiago", "29° Juzgado Civil de Santiago", "30° Juzgado Civil de Santiago",
    "1° Juzgado Civil de Puente Alto", "Juzgado de Letras de Colina", "1° Juzgado Civil de San Miguel",
    "2° Juzgado Civil de San Miguel", "3° Juzgado Civil de San Miguel", "4° Juzgado Civil de San Miguel",
    "1° Juzgado de Letras de San Bernardo", "2° Juzgado de Letras de San Bernardo",
    "1° Juzgado de Letras de Buin", "2° Juzgado de Letras de Buin",
    "1° Juzgado de Letras de Melipilla", "1° Juzgado de Letras de Talagante",
    "2° Juzgado de Letras de Talagante", "Juzgado de Letras de Peñaflor"
  ];

  const select = document.getElementById(selectId);
  if (!select) return;

   // ⚠️ Limpia las opciones existentes, dejando solo la primera ("Seleccione un tribunal")
  const primeraOpcion = select.options[0];
  select.innerHTML = ""; // Borra todo
  if (primeraOpcion) select.appendChild(primeraOpcion); // Vuelve a agregar la primera opción

  listaTribunales.forEach(t => {
    const option = document.createElement("option");
    option.value = t;
    option.textContent = t;
    select.appendChild(option);
  });
}

//Tribunales para el modo de Encargos al receptor (solamente del 1° al 30° Santiago)
function poblarTribunalesSoloSantiago(selectId) {
  const listaTribunales = [];

  for (let i = 1; i <= 30; i++) {
    listaTribunales.push(`${i}° Juzgado Civil de Santiago`);
  }

  const select = document.getElementById(selectId);
  if (!select) return;

  // Borra todo menos la opción por defecto
  while (select.options.length > 1) {
    select.remove(1);
  }

  listaTribunales.forEach(t => {
    const option = document.createElement("option");
    option.value = t;
    option.textContent = t;
    select.appendChild(option);
  });
}


function poblarSolicitantesEn(selectId) {
  const integrantes = ["Cristobal Quiroz", "Carla Rubio", "José Trujillo", "Nicolás Arratia", "Juan Pablo Meléndez", "Camila Huilcaman", "Camilo Montalva", "Francisca Sagredo", "Bastian Norambuena", "Camilo Vicuña", "Gabriela Villa" ];
  const select = document.getElementById(selectId);
  if (!select) return;
  integrantes.forEach(n => {
    const option = document.createElement("option");
    option.value = n;
    option.textContent = n;
    select.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  poblarTribunalesEn("tribunalPagos");
  poblarTribunalesSoloSantiago("tribunalEncargo");
  poblarSolicitantesEn("solicitantePagos");
  poblarSolicitantesEn("solicitanteEncargo");
  poblarSolicitantesEn("solicitanteDesarchivo");
})

//Función para descargar comprobante cuando se solicta pago o un encargo
function descargarComprobante(datos, tipoEncargo) {
  const ahora = new Date().toLocaleString();
  const tipoTexto =
    tipoEncargo === 'pago_receptor' ? 'Pago a Receptor' :
    tipoEncargo === 'encargo_receptor' ? 'Encargo al Receptor' :
    'Desarchivo / Informe';

  const contenido = `
COMPROBANTE DE REGISTRO

Tipo: ${tipoTexto}
Solicitante: ${datos.solicitante}
Cliente: ${datos.cliente}
RUT: ${datos.rut}
Rol de Causa: ${datos.rolCausa}
Tribunal: ${datos.tribunal}
Fecha: ${ahora}
`;

  const blob = new Blob([contenido], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

function generarComprobanteTicket(datos, tipoEncargo) {
  const ahora = new Date().toLocaleString();

  const tipoTexto =
    tipoEncargo === 'pago_receptor' ? 'Pago a Receptor' :
    tipoEncargo === 'encargo_receptor' ? 'Encargo al Receptor' :
    'Desarchivo / Informe';

  const contenidoHTML = `
    <html>
    <head>
      <style>
        body {
          font-family: monospace;
          padding: 20px;
          background: #fff;
          color: #000;
          max-width: 300px;
          margin: auto;
        }
        h2 {
          text-align: center;
          border-bottom: 1px dashed #000;
          padding-bottom: 5px;
          margin-bottom: 15px;
        }
        .item {
          margin-bottom: 10px;
        }
        .label {
          font-weight: bold;
        }
        .footer {
          text-align: center;
          border-top: 1px dashed #000;
          padding-top: 10px;
          margin-top: 20px;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <h2>Comprobante ${tipoTexto}</h2>
      <div class="item"><span class="label">Fecha:</span> ${ahora}</div>
      <div class="item"><span class="label">Solicitante:</span> ${datos.solicitante}</div>
      <div class="item"><span class="label">Cliente:</span> ${datos.cliente}</div>
      <div class="item"><span class="label">RUT:</span> ${datos.rut}</div>
      <div class="item"><span class="label">Rol de Causa:</span> ${datos.rolCausa}</div>
      <div class="item"><span class="label">Tribunal:</span> ${datos.tribunal}</div>
      ${
        tipoEncargo === 'pago_receptor' || tipoEncargo === 'desarchivo'
        ? `<div class="item"><span class="label">Monto:</span> $${datos.monto}</div>
           <div class="item"><span class="label">Fecha de Pago:</span> ${datos.fechaPago}</div>
           <div class="item"><span class="label">Tipo Gestión:</span> ${datos.tipoGestion}</div>`
        : `<div class="item"><span class="label">Tipo de Encargo:</span> ${datos.tipoEncargoDescripcion}</div>
           <div class="item"><span class="label">Folio:</span> ${datos.folio}</div>
           <div class="item"><span class="label">Cuaderno:</span> ${datos.cuaderno}</div>
           <div class="item"><span class="label">Fecha Resolución:</span> ${datos.fechaResolucion}</div>`
      }
      <div class="footer">Grupo Defensa - Registro Exitoso</div>
    </body>
    </html>
  `;

  const ventana = window.open("", "_blank");
  ventana.document.write(contenidoHTML);
  ventana.document.close();
}

async function descargarTicketPDF(datos, tipoEncargo) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const ahora = new Date().toLocaleString();
  const tipoTexto =
    tipoEncargo === 'pago_receptor' ? 'Pago a Receptor' :
    tipoEncargo === 'encargo_receptor' ? 'Encargo al Receptor' :
    'Desarchivo / Informe';

  let contenido = `Grupo Defensa\n\nComprobante: ${tipoTexto}\n\n`;
  contenido += `Fecha: ${ahora}\n`;
  contenido += `Solicitante: ${datos.solicitante}\n`;
  contenido += `Cliente: ${datos.cliente}\n`;
  contenido += `RUT: ${datos.rut}\n`;
  contenido += `Rol Causa: ${datos.rolCausa}\n`;
  contenido += `Tribunal: ${datos.tribunal}\n`;

  if (tipoEncargo === 'pago_receptor' || tipoEncargo === 'desarchivo') {
    contenido += `Monto: $${datos.monto}\n`;
    contenido += `Fecha de Pago: ${datos.fechaPago}\n`;
    contenido += `Tipo Gestión: ${datos.tipoGestion}\n`;
  } else {
    contenido += `Tipo de Encargo: ${datos.tipoEncargoDescripcion}\n`;
    contenido += `Folio: ${datos.folio}\n`;
    contenido += `Cuaderno: ${datos.cuaderno}\n`;
    contenido += `Fecha Resolución: ${datos.fechaResolucion}\n`;
  }

  doc.setFont("courier", "normal");
  doc.setFontSize(10);
  doc.text(contenido, 10, 10);

  const nombreArchivo = `Comprobante_${tipoEncargo}_${Date.now()}.pdf`;
  doc.save(nombreArchivo);
}

function verPlanilla() {
  const modo = document.getElementById("selectorModo").value;

  const baseUrl = "https://docs.google.com/spreadsheets/d/1_D_96CDNezJTH4qWQqm443mrrcC-LULu8wWL4DM_ILY/edit#gid=";

  // Los gid de cada hoja (esto lo obtienes abriendo cada hoja y mirando el final de la URL)
  const gids = {
    pagos: "1562339599",           // Reemplaza con el GID real de la hoja "PagosReceptor"
    encargos: "1060509811", // Reemplaza con el GID real de la hoja "EncargosReceptor"
    desarchivo: "323264567", // Reemplaza con el GID real de la hoja "Desarchivos"
  };

  let gid = "0"; // valor por defecto
  if (modo === "pagos") gid = gids.pagos;
  else if (modo === "encargos") gid = gids.encargos;
  else if (modo === "desarchivo") gid = gids.desarchivo;
  const finalUrl = baseUrl + gid;
  window.open(finalUrl, "_blank");
}

let imagenBase64 = ""; // Variable global para guardar la imagen

  document.getElementById("contenedorImagen").addEventListener("paste", function (event) {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf("image") === 0) {
        const blob = item.getAsFile();
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.getElementById("imagenPreview");
          img.src = e.target.result;
          img.style.display = "block";
          imagenBase64 = e.target.result; // Guarda imagen como base64
        };
        reader.readAsDataURL(blob);
      }
    }
  });
let imagenBase64Desarchivo = ""; // Variable global para guardar imagen del formulario desarchivo

document.getElementById("contenedorImagenDesarchivo").addEventListener("paste", function (event) {
  const items = (event.clipboardData || event.originalEvent.clipboardData).items;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type.indexOf("image") === 0) {
      const blob = item.getAsFile();
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.getElementById("imagenPreviewDesarchivo");
        img.src = e.target.result;
        img.style.display = "block";
        imagenBase64Desarchivo = e.target.result; // Guarda imagen como base64 para desarchivo
      };
      reader.readAsDataURL(blob);
    }
  }
});

function mostrarSpinner() {
  document.getElementById("loadingSpinner").classList.remove("hidden");
}

function ocultarSpinner() {
  document.getElementById("loadingSpinner").classList.add("hidden");
}

function mostrarSpinner() {
  const spinner = document.getElementById("spinnerCarga");
  if (spinner) spinner.style.display = "block";
}

function ocultarSpinner() {
  const spinner = document.getElementById("spinnerCarga");
  if (spinner) spinner.style.display = "none";
}

// FUNCIONES PARA AGREGAR EL FORMULARIO DEL PODER NOTARIAL ESPECIAL (numero a texto, convertir grupo, enviar formulario rut especial)
function numeroATexto(n) {
  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const especiales = ["diez", "once", "doce", "trece", "catorce", "quince"];
  const decenas = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

  if (n === 0) return "cero";
  if (n < 10) return unidades[n];
  if (n < 16) return especiales[n - 10];
  if (n < 20) return "dieci" + unidades[n - 10];
  if (n < 30) return n === 20 ? "veinte" : "veinti" + unidades[n - 20];
  if (n < 100) return decenas[Math.floor(n / 10)] + (n % 10 !== 0 ? " y " + unidades[n % 10] : "");
  if (n < 1000) return centenas[Math.floor(n / 100)] + (n % 100 !== 0 ? " " + numeroATexto(n % 100) : "");
  if (n < 2000) return "mil" + (n % 1000 !== 0 ? " " + numeroATexto(n % 1000) : "");
  if (n < 1000000) {
    const miles = Math.floor(n / 1000);
    const resto = n % 1000;
    return numeroATexto(miles) + " mil" + (resto !== 0 ? " " + numeroATexto(resto) : "");
  }
  if (n === 1000000) return "un millón";
  if (n < 2000000) return "un millón" + (n % 1000000 !== 0 ? " " + numeroATexto(n % 1000000) : "");
  if (n < 1000000000000) {
    const millones = Math.floor(n / 1000000);
    const resto = n % 1000000;
    return numeroATexto(millones) + " millones" + (resto !== 0 ? " " + numeroATexto(resto) : "");
  }
  return n.toString();
}

function rutANumeroTexto(rut) {
  if (!rut) return "";
  const partes = rut.split("-");
  if (partes.length !== 2) return "";

  const numero = parseInt(partes[0].replace(/\./g, ""));
  const dv = partes[1].toLowerCase();

  const numeroTexto = numeroATexto(numero);

  let dvTexto = "";
  if (dv === "k") {
    dvTexto = "k";
  } else if (dv === "0") {
    dvTexto = "cero";
  } else if (!isNaN(parseInt(dv))) {
    dvTexto = numeroATexto(parseInt(dv));
  }

  return `${numeroTexto} guion ${dvTexto}`;
}


document.getElementById("rutNumerico").addEventListener("input", function () {
  const rut = this.value;
  const texto = rutANumeroTexto(rut);
  document.getElementById("rutTexto").value = texto;
});

function enviarFormularioRutEspecial() {
  const datos = {
    idCausa: document.getElementById("idCausaRut").value,
    fecha: document.getElementById("fechaRut").value,
    ejecutado: document.getElementById("ejecutadoRut").value.toUpperCase(), // 🔠 transforma a MAYÚSCULAS
    ejecutante: document.getElementById("ejecutanteRut").value,
    rut: document.getElementById("rutNumerico").value,
    rut2: document.getElementById("rutTexto").value,
  };

  google.script.run
    .withSuccessHandler(function (url) {
      alert("Escrito generado exitosamente.");
      window.open(url, "_blank");
    })
    .generarFormularioRutEspecial(datos);
}


function buscarDatosRutEspecial() {
  const id = document.getElementById("idCausaRut").value.trim();
  if (!id) return;

  google.script.run.withSuccessHandler((datos) => {
    if (!datos) {
      alert("No se encontró la causa.");
      return;
    }

    document.getElementById("ejecutadoRut").value = datos.client || "";


    const rutGenerado = datos.identifier || "";
    document.getElementById("rutNumerico").value = rutGenerado;
    document.getElementById("rutTexto").value = rutANumeroTexto(rutGenerado);
  }).obtenerDatosCausa(id);
}
function buscarDatosCausaRut() {
  const id = document.getElementById("idCausaRut").value.trim();

  if (!id) {
    alert("Por favor ingresa un ID de causa válido.");
    return;
  }

  google.script.run
    .withSuccessHandler(function (datos) {
      if (!datos) {
        alert("❌ No se encontró la causa con ese ID.");
        return;
      }

      // ✅ Debug visual para verificar lo que llega
      alert(
        "📦 Datos recibidos:\n" +
        "Ejecutado (client): " + datos.client + "\n" +
        "RUT (identifier): " + datos.identifier + "\n" +
        "Tribunal (nombre): " + datos.nombre + "\n" +
        "Caratulado (title): " + datos.title
      );

      // ✅ Asignación clara y directa
      document.getElementById("ejecutadoRut").value = datos.client || "";
      document.getElementById("rutNumerico").value = datos.identifier || "";

      // Activa la conversión a texto del RUT
      document.getElementById("rutNumerico").dispatchEvent(new Event("input"));
    })
    .withFailureHandler(function () {
      alert("⚠️ Error al buscar datos de la causa.");
    })
    .obtenerDatosCausa(id);
}
}
