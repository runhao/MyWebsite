const differ_time = document.getElementById("differ_time");
debugger;
let dd = Number(differ_time.children[1].innerHTML);
let hh = Number(differ_time.children[2].innerHTML);
let mm = Number(differ_time.children[3].innerHTML);
let ss = Number(differ_time.children[4].innerHTML);
function fix(num, length) {
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}

function changeDate() {
    document.getElementById("differ_time").innerText = "在一起的"+fix(dd,2)+"天"+fix(hh,2)+"时"+fix(mm,2)+"分"+fix(ss,2)+"秒!";
    ss++;
    debugger
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
