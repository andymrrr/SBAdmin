$(document).ready(function () {
    jQuery.datetimepicker.setLocale('es');
  });
function abrir_modal(url)
{
  $("#popup").load(url, function(){
    $(this).modal({
      backdrop:'static',
      keyboard: false
    })
    $(this).modal('show');
  });
  return false;
}

function cerrar_modal()
{
  $('#popup').modal('hide');
  return false;
}
function Mensajeria() {
  function MensajeError(Titulo, Mensaje, buttons) {
      swal.fire({
          title: Titulo,
          text: Mensaje,
          icon: "error",
          buttons: ((buttons === undefined) ? false : buttons),
          dangerMode: true,
      });
  }

  function MensajeInfo(Titulo, Mensaje, buttons) {
      swal.fire({
          title: Titulo,
          text: Mensaje,
          icon: "info",
          buttons: ((buttons === undefined) ? false : buttons),
          dangerMode: true,
      });
  }

  function MensajePregunta(Titulo, Mensaje) {
      return swal.fire({
          title: Titulo,
          text: Mensaje,
          icon: "warning",
          buttons: true,
          dangerMode: true
      });
  };

  function MensajeAlerta(Titulo, Mensaje, buttons) {
      swal.fire({
          title: Titulo,
          text: Mensaje,
          icon: "warning",
          buttons: ((buttons === undefined) ? false : buttons),
          dangerMode: true
      });
  };

  function MensajeCompletado(Titulo, Mensaje, buttons) {
      swal.fire({
          title: Titulo,
          text: Mensaje,
          icon: "success",
          dangerMode: true
      });
  };

  return {
      MensajeError: MensajeError,
      MensajeInfo: MensajeInfo,
      MensajePregunta: MensajePregunta,
      MensajeAlerta: MensajeAlerta,
      MensajeCompletado: MensajeCompletado

  };
}
var GestionarMensaje = Mensajeria();





