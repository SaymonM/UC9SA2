$( document ).ready(function() {

    $("#carrossel img:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 3000)

    function slide() {
        if( $(".banner-ativo").next().length ) {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        } else {
            $(".banner-ativo").removeClass().hide()
            $("#carrossel img:eq(0)").addClass("banner-ativo").show()
        }
    }
    
    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
        
        // if($("#menu").hasClass("menu-ativo")) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }
    })

})
    let email = document.getElementById("campoemail");
    let menu = document.getElementById("");


    function enviarEmail() {
        emailDigitado = email.value;
        console.log(emailDigitado)
    }

    
    function onSubmit () {
        console.log(input.user)
    }

    function renderizarNovidades () {
        let espaco = document.getElementById("espaco-novidades");

        let listaNovidades = [
            {
                imagem: "Imagens/PC3.png",
                titulo: "O dólar está alto",
                descricao: "O dolar está em alta há muito tempo.",
            },
            {
                imagem: "Imagens/PC3.png",
                titulo: "O dólar está alto",
                descricao: "O dolar está em alta há muito tempo.",
            },
            {
                imagem: "Imagens/PC3.png",
                titulo: "O dólar está alto",
                descricao: "O dolar está em alta há muito tempo.",
            },
            {
                imagem: "Imagens/PC3.png",
                titulo: "O dólar está alto",
                descricao: "O dolar está em alta há muito tempo.",
            },
            {
                imagem: "Imagens/PC3.png",
                titulo: "O dólar está alto",
                descricao: "O dolar está em alta há muito tempo.",
            },
            {
                imagem: "Imagens/PC4.png",
                titulo: "O dólar está alto",
                descricao: "O dolar está em alta há muito tempo.",
            },
            
        ]

        let template = "";

        for (let index = 0; index < listaNovidades.length; index++) {
            const novidades = listaNovidades[index];
            
            console.log("Novidade")

            template += '<div class="cardnov"> <img src="${novidades.imagem}"> <h3>${novidade.titulo}</h3> <p>${novidade.descricao}</p> </div>'
            
            espaco.innerHTML = template;
        }
        console.log(template)
    }
