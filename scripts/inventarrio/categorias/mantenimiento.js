
function inactivar(id)
{
    var data = {id:id};
    data = JSON.stringify(data);
    var token = '{{csrf_token}}';
    $.ajax({
        headers : {"X-CSRFToken": token},
        type:"POST",
        url:"/facturacion/cliente/estado/"+id,
        data: data,
        success: function(response){
            if(response==="OK")
            {
                location.reload(true);
            }
            else{
                Mensaje("Aviso","Error Intentado Cambiar Estado a Cliente");
            }
        },
        error: function(jqXHR, textStatus, errorThrow){
            Mensaje("Aviso",errorThrow,'red');
            cerrar_modal();
        }
    });
  }