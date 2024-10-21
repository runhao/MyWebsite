const home = document.getElementById("differTime");
let dd = Number(home.children[1].innerHTML);
let hh = Number(home.children[2].innerHTML);
let mm = Number(home.children[3].innerHTML);
let ss = Number(home.children[4].innerHTML);
function fix(num, length) {
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}

function changeDate() {
    document.getElementById("differTime").innerText = "在一起的"+fix(dd,2)+"天"+fix(hh,2)+"时"+fix(mm,2)+"分"+fix(ss,2)+"秒!";
    ss++;
    if(ss == 60){
        ss=0;
        mm++;
        if(mm == 60){
            mm=0;
            hh++;
            if(hh == 24){
                hh == 0;
            }
        }
    }
}

setInterval(changeDate,1000);
