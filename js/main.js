$(document).ready(function(){
    
    // $("#numero-buscar").click(function(){
        $("#numero").keyup(function(){
           
            var valor= $("#numero").val()

            if(valor > 0){
                document.getElementById("splide").innerHTML = '';
                document.getElementById("lista").innerHTML = '';
                document.getElementById("list-stats").innerHTML = '';
                document.getElementById("list-types").innerHTML = '';
                $("#front").attr("src","") 
                $("#back").attr("src","") 
                pornumero($("#numero").val())
            }
               
            
    
        })
       
        
       
    // })
    



    function pornumero(numero){
        fetch(`https://pokeapi.co/api/v2/pokemon/${numero}/`)
        .then(data=>data.json())
        .then(data=>{

           
            console.log(data.name)
            console.log(data.abilities[0].ability.name)
            console.log(data.stats[0].base_stat)
            console.log(data.stats[0].stat.name)
            console.log(data.types[0].type.name)
            console.log(data.abilities[0].is_hidden)
           
            $("#splide").append(`${data.name}`) 
            $("#front").attr("src",`${data.sprites.front_default}`) 
            $("#back").attr("src",`${data.sprites.back_default}`) 

            var lista = document.getElementById("lista")

            for(var i in data.abilities){
                if(data.abilities[i].is_hidden){
                    lista.innerHTML += `<li class="hidden">${data.abilities[i].ability.name}</li> `
                }else{
                    lista.innerHTML += `<li>${data.abilities[i].ability.name}</li> `
                }
            }
            var stat = document.getElementById("list-stats")

            for(var i in data.stats){
                stat.innerHTML += `<li class="${data.stats[i].stat.name}">${data.stats[i].stat.name} : ${data.stats[i].base_stat} </li>`
            }

            var type = document.getElementById("list-types")
            for(var i in data.types){
                type.innerHTML += `<li class="${data.types[i].type.name}">${data.types[i].type.name}</li>`
            }


            
          
        })
        
    }


})