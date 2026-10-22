let votosMinecraft=0;
let votosRoblox=0;

sumarLikeMinecraft=function(){
    let cmpMinecraft;
    cmpMinecraft = document.getElementById("lblMinecraft");
    votosMinecraft = votosMinecraft + 1;
    cmpMinecraft.innerHTML = votosMinecraft;
}
sumarCorazonMinecraft=function(){
    let cmpMinecraft;
    cmpMinecraft = document.getElementById("lblMinecraft");
    votosMinecraft = votosMinecraft + 10;
    cmpMinecraft.innerHTML = votosMinecraft;
}
restarLikeMinecraft=function(){
    let cmpMinecraft;
    cmpMinecraft = document.getElementById("lblMinecraft");
    votosMinecraft = votosMinecraft - 1;
    cmpMinecraft.innerHTML = votosMinecraft;
}
sumarLikeRoblox=function(){
    let cmpRoblox;
    cmpRoblox = document.getElementById("lblRoblox");
    votosRoblox = votosRoblox + 1;
    cmpRoblox.innerHTML = votosRoblox;
}
sumarCorazonRoblox=function(){
    let cmpRoblox;
    cmpRoblox = document.getElementById("lblRoblox");
    votosRoblox = votosRoblox + 10;
    cmpRoblox.innerHTML = votosRoblox;
}
restarLikeRoblox=function(){
    let cmpRoblox;
    cmpRoblox = document.getElementById("lblRoblox");
    votosRoblox = votosRoblox - 1;
    cmpRoblox.innerHTML = votosRoblox;
}