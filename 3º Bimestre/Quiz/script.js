
const btn = document.querySelectorAll('button');

btn[0].addEventListener('click', buttonActivation1);
btn[1].addEventListener('click', buttonActivation2);
btn[2].addEventListener('click', buttonActivation3);
btn[3].addEventListener('click', buttonActivation4);
btn[4].addEventListener('click', buttonActivation5);

function buttonActivation1() {
    var resp = document.querySelector('input[name=\"q1\"]:checked');
    if (resp.value == "javascript"){
        document.getElementsByTagName("span")[0].style.display = "block";
        btn[1].disabled = false;
        document.querySelectorAll('input[name=\"q1\"]').forEach(element => element.disabled = true);
        document.querySelectorAll('input[name=\"q2\"]').forEach(element => element.disabled = false);
        if(document.getElementsByTagName("span")[1].style.display == "block"){
            document.getElementsByTagName("span")[1].style.display = "none";
        }
    }
    else{
        document.getElementsByTagName("span")[1].style.display = "block";
        if(document.getElementsByTagName("span")[0].style.display = "block"){
            document.getElementsByTagName("span")[0].style.display = "none";
        }
    }
}

function buttonActivation2() {
    var resp = document.querySelector('input[name=\"q2\"]:checked');
    if (resp.value == "morango"){
        document.getElementsByTagName("span")[2].style.display = "block";
        btn[2].disabled = false;
        document.querySelectorAll('input[name=\"q2\"]').forEach(element => element.disabled = true);
        document.querySelectorAll('input[name=\"q3\"]').forEach(element => element.disabled = false);
        if(document.getElementsByTagName("span")[3].style.display == "block"){
            document.getElementsByTagName("span")[3].style.display = "none";
        }
    }
    else{
        document.getElementsByTagName("span")[1].style.display = "block";
        if(document.getElementsByTagName("span")[2].style.display = "block"){
            document.getElementsByTagName("span")[2].style.display = "none";
        }
    }
}

function buttonActivation3() {
    var resp = document.querySelector('input[name=\"q3\"]:checked');
    if (resp.value == "azul"){
        document.getElementsByTagName("span")[4].style.display = "block";
        btn[3].disabled = false;
        document.querySelectorAll('input[name=\"q3\"]').forEach(element => element.disabled = true);
        document.querySelectorAll('input[name=\"q4\"]').forEach(element => element.disabled = false);
        if(document.getElementsByTagName("span")[5].style.display == "block"){
            document.getElementsByTagName("span")[5].style.display = "none";
        }
    }
    else{
        document.getElementsByTagName("span")[5].style.display = "block";
        if(document.getElementsByTagName("span")[4].style.display = "block"){
            document.getElementsByTagName("span")[4].style.display = "none";
        }
    }
}

function buttonActivation4() {
    var resp = document.querySelector('input[name=\"q4\"]:checked');
    if (resp.value == "fiat-uno"){
        document.getElementsByTagName("span")[6].style.display = "block";
        btn[4].disabled = false;
        document.querySelectorAll('input[name=\"q4\"]').forEach(element => element.disabled = true);
        document.querySelectorAll('input[name=\"q5\"]').forEach(element => element.disabled = false);
        if(document.getElementsByTagName("span")[7].style.display == "block"){
            document.getElementsByTagName("span")[7].style.display = "none";
        }
    }
    else{
        document.getElementsByTagName("span")[7].style.display = "block";
        if(document.getElementsByTagName("span")[6].style.display = "block"){
            document.getElementsByTagName("span")[6].style.display = "none";
        }
    }
}

function buttonActivation5() {
    var resp = document.querySelector('input[name=\"q5\"]:checked');
    if (resp.value == "horizon-chase"){
        document.getElementsByTagName("span")[8].style.display = "block";
        document.querySelectorAll('input[name=\"q5\"]').forEach(element => element.disabled = true);
        if(document.getElementsByTagName("span")[9].style.display == "block"){
            document.getElementsByTagName("span")[9].style.display = "none";
        }
    }
    else{
        document.getElementsByTagName("span")[9].style.display = "block";
        if(document.getElementsByTagName("span")[8].style.display = "block"){
            document.getElementsByTagName("span")[8].style.display = "none";
        }
    }
}