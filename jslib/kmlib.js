/*
Mượn ý từ w3schools
https://www.w3schools.com/howto/howto_html_include.asp
*/

function includeHTML() {
    var x, i, k, e, file;
    x = document.getElementsByTagName("div");
    k = x.length;
    var getHTML=(e,file)=> {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { e.innerHTML = this.responseText; }
                e.removeAttribute("km-include-html");
                }
            }
        xhttp.open("GET", file, true);
        xhttp.send();
        }

    for (i = 0; i < k; i++) {
        e = x[i];
        file = e.getAttribute("km-include-html");
        if (file) getHTML(e,file);
        }
        
    
}

    document.addEventListener('DOMContentLoaded', () => {includeHTML()});

    /*
    document.addEventListener('readystatechange', () => console.log("!!!"+ document.readyState));
    
    //console.log(document.readyState);
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOMContentLoaded"); 
        console.log(document.readyState);
        //alert("2222");
        //includeHTML();
    });
    window.document.onload = function(e){ 
       }
    window.onload = function(e){ 
        console.log("window.onload"); 
        console.log(document.readyState);
        //includeHTML();
    }
    //includeHTML();

    */