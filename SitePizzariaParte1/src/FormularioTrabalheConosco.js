
function validar(){
    
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var rua = document.getElementById("rua").value;
    var bairro = document.getElementById("bairro").value;
    var uf = document.getElementById("uf").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    if (nome ==""){
        alert("Informe o nome");
        return false;
    }else if(cpf==""){
        alert("Informe o cpf");
        return false;
    }else if(rua==""){
        alert("Informe a rua");
        return false;
    }
    else if(bairro==""){
        alert("Informe o bairro");
        return false;
    }
    else if(telefone==""){
        alert("Informe o telefone");
        return false;
    }
    else if(email==""){
        alert("Informe o email");
        return false;
    }else{
        return true;
    }
    
    
    }
    
    
