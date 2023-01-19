function key(c){
    const key = document.getElementById("inp"+c);
    console.log(c);
key.addEventListener('keypress',e =>{
    console.log(e);
    var inp = document.getElementById("inp"+c);
    if(e.key === "Enter"){
        var key_value = document.getElementById("inp"+c);
        var p_content = document.getElementById("p-content"+c);
        var content   = document.getElementById("content");
        var terminal  = document.querySelector(".terminal-div");
        var count = 750;
        console.log("done");
        console.log(key_value);
        if(key_value.value == "ls"){
            var plus1 = count+=10 
            var plus2 = c+=1;
            p_content.innerHTML += "<span>welcome.txt</span> <br />";
            p_content.innerHTML += "<span>links.txt</span>  <br />";
            p_content.innerHTML += "<span>whoami.txt</span>  <br />";
            content.innerHTML += '<h3> osama@osamaelkassaby.com:<span style="color:blue ;font-size: 20px;">~</span> <span style="color:white;">$</span> <span class="cl"> <input id="inp'+plus2+'" onclick="key('+plus2+');" type="text"> </span> </h3>';
            content.innerHTML += ' <P class="p-content" id="p-content'+plus2+'">  </p> ';
          //  terminal.style.height = ""+plus1+"px";

        }else if(key_value.value == "clear"){
            var plus1 = count+=10 
            var plus2 = c+=1;
            var content   = document.getElementById("content");
            content.innerHTML = '<h3> osama@osamaelkassaby.com:<span style="color:blue ;font-size: 20px;">~</span> <span style="color:white;">$</span> <span class="cl"> <input id="inp'+plus2+'" onclick="key('+plus2+');" type="text"> </span> </h3>';
            content.innerHTML += ' <P class="p-content" id="p-content'+plus2+'">  </p> ';  
        }else if(key_value.value == "cat welcome.txt"){
            var plus1 = count+=10 
            var plus2 = c+=1;
            var content   = document.getElementById("content");
            content.innerHTML += ' <h3> osama@osamaelkassaby.com:<span style="color:blue ;font-size: 20px;">~</span> <span style="color:white;">$</span> <span class="cl">  '+key_value.value+' </h3>';

            content.innerHTML += '<P class="p-content"> It'+'s osama. Passionate about math and physics, software engineering, and technology.  AI, and cloud computing to solve hard problems. </p>            ';  
            content.innerHTML += '<h3> osama@osamaelkassaby.com:<span style="color:blue ;font-size: 20px;">~</span> <span style="color:white;">$</span> <span class="cl"> <input id="inp'+plus2+'" onclick="key('+plus2+');" type="text"> </span> </h3>';

        }else if(key_value.value == "cat links.txt"){
            var plus1 = count+=10 
            var plus2 = c+=1;
            var content   = document.getElementById("content");
            content.innerHTML += ' <h3> osama@osamaelkassaby.com:<span style="color:blue ;font-size: 20px;">~</span> <span style="color:white;">$</span> <span class="cl">  '+key_value.value+' </h3>';
            content.innerHTML += '<P class="p-content"> *My website: <a href="http://osamaelkassaby.com"> my website </a> </p>';
            content.innerHTML += '<P class="p-content"> *Email : <a href="mailto:osama@osamaelkassaby.com"> osama@osamaelkassaby.com </a> </p>'
            content.innerHTML += '<P class="p-content"> *Instgram: <a href="http://instgram.com/osama_elkassaby"> @osama_elkassaby </a> </p>';
            content.innerHTML += '<P class="p-content"> *Facebook : <a href="http://facebook.com"> @osamaelqassaby </a> </p>';
            content.innerHTML += '<h3> osama@osamaelkassaby.com:<span style="color:blue ;font-size: 20px;">~</span> <span style="color:white;">$</span> <span class="cl"> <input id="inp'+plus2+'" onclick="key('+plus2+');" type="text"> </span> </h3>';

        }
        else{
            content.innerHTML += '<P class="p-content" id="p-content'+plus2+'"> <span>'+key_value.value+': command not found </span>  </p>   <br />';
            content.innerHTML += '<h3> osama@osamaelkassaby.com:<span style="color:blue ;font-size: 20px;">~</span> <span style="color:white;">$</span> <span class="cl"> <input id="inp'+plus2+'" onclick="key('+plus2+');" type="text"> </span> </h3>';
            content.innerHTML += ' <P class="p-content" id="p-content'+plus2+'">  </p> ';
           // terminal.style.height = ""+plus1+"px";

        }
    }
});

var x = document.getElementById('x');
x.addEventListener('click',e=>{
    var terminal_div = document.getElementById('terminal-div');
    terminal_div.style.display = 'none';
});


var img = document.getElementById("terminal-img");
img.addEventListener('click' , e=>{
    var terminal_div = document.getElementById('terminal-div');
    terminal_div.style.display = '';
})

var img = document.getElementById("brave-img");
img.addEventListener('click' , e=>{
   window.open("http://osamaelkassaby.com");
})

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm = "am";
if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();
var p = document.getElementById('clock');
p.innerText = month+ "  " +date + "  " +""+ + hr + ":" + min +"";




}

key(1);


setInterval(() => {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm = "am";
if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}
    var d = new Date();

    var date = d.getDate();

    var p = document.getElementById('clock');
    var date = d.getDate();

    var month = months[d.getMonth()];
    var year = d.getFullYear();
    p.innerText = month+ "  " +date + " : " +""+ + hr + ":" + min +"";
    
    }, 10*100);
// var browserName = (function (agent) {        switch (true) {
//     case agent.indexOf("edge") > -1: return "MS Edge";
//     case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
//     case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
//     case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
//     case agent.indexOf("trident") > -1: return "MS IE";
//     case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
//     case agent.indexOf("safari") > -1: return "Safari";
//     default: return "other";
// }
// })(window.navigator.userAgent.toLowerCase());

// alert(browserName);