var val;

val = document;

document.getElementById('ant_nedelje').innerText = 'Кога Вашингтон уједе, и Брисела се плаши.';
document.getElementById('afo_nedelje').innerText = 'Злочини на свим странама, а злочинци само на једној.';

document.getElementById('ime_gosta').innerText = 'ЂОРЂЕ ОТАШЕВИЋ';
document.getElementById('ime_gosta').href = 'http://www.alma.co.rs/autori/otasevic.html';
document.getElementById('biografija_gosta').href = 'http://www.alma.co.rs/autori/otasevic.html';
document.getElementById('aforizam_gosta1').innerText = "Балистичком експертизом снајперске пушке утврђено је да је кроз њен двоглед неко гледао у звезде.";
document.getElementById('aforizam_gosta2').innerText = "Време излагања у Парламенту је ограничено. Да би било у складу са посланицима.";
document.getElementById('aforizam_gosta3').innerText = "Дочекали смо их хлебом и сољу. А они нека гледају како ће то да развуку на целу недељу.";
document.getElementById('aforizam_gosta4').innerText = "Јесте он природно глуп, али се без сталног усавршавања овај ниво не може постићи.";
document.getElementById('aforizam_gosta5').innerText = "Кад је видео да умем да читам и пишем, факултетску диплому ми је продао у пола цене.";
document.getElementById('aforizam_gosta6').innerText = "Кратковиде смо послали у прве борбене редове. Да не напрежу очи.";
document.getElementById('aforizam_gosta7').innerText = "Мафијашке вође су изабрале чланове владе тајним гласањем. У складу са највишим демократским стандардима.";
document.getElementById('aforizam_gosta8').innerText = "Није садашња власт крива што смо пали на дно. Закон гравитације је остао од претходног режима.";
document.getElementById('aforizam_gosta9').innerText = "Сведок уопште није био на месту злочина. Ето, колико је напредовала наша демократија.";
document.getElementById('aforizam_gosta10').innerText = "Стално се упоређујем са сиромашнијима од себе, али је избор пао на критичну тачку.";

var potpis = document.createElement("img");
potpis.src = "img/potpis.png";
potpis.setAttribute("id", "potpis");
var futer = document.getElementsByTagName('footer');
futer[0].appendChild(potpis);

function dodavanjeZvezdica() {
    var oblast = document.getElementsByClassName('ap');
       for(var i=0; i<oblast.length; i++) {
        var sadrzajOblasti = oblast[i].innerHTML;
        var noviSadrzajOblasti = sadrzajOblasti.replace(/<br>/g, "<br>***<br>");
        console.log(noviSadrzajOblasti);
        oblast[i].innerHTML = noviSadrzajOblasti;
        }
}

dodavanjeZvezdica();

console.log(val);
