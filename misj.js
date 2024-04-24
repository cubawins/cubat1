// Esta funcion se ejecuta cuando incluya es 

$(document).ready(fuction ()
{
    // Insertar_registro();
    // Mostrar_registro();
    // Obtener_registro();
    // Actualizar_registro();
    // Eliminar_registro();

    alert ("Hola mundo");
})

function Insertar_registro()
{
    //evento click en el boton #btn_register
    $(document).on("click",'#btn_register', function() 
    {
        var User = $(#UserName).val();
        var Email = $(#UserEmail).val();
    
        //validacion por frontend
        if(User == "" || Email=="")
        {
            $(#message).html('Llenar los campos en blanco ');
        }
        else
        {
        $.ajax(
            {
                url : 'Insertar_registro.php',
                method: 'post',
                data:{Uname:User, UEmail:Email},
                success: function(data)
                {
                        $('#message').html(data);
                        // $('#Registration').modal('show');
                        // $('form').trigger('reset');
                        // Mostrar_registro();
                }
            })


        }
    })

    $(document).on('click','#btn_close',function())
}    