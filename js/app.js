var val;

val = document;

document.getElementById('ant_nedelje').innerText = 'Косово је колевка српског народа. Једнима у срцу, другима на души!';
document.getElementById('afo_nedelje').innerText = 'Америчка демократија је сахрањена! Најискреније саучествујем у болу оних који су јој се бескрајно дивили.';


document.getElementById('ime_gosta').innerText = "АРАНЂЕЛОВИЋ ИВАН";
document.getElementById('ime_gosta').href = "http://sipakrs.blogspot.com/search/label/Ivan%20Aran%C4%91elovi%C4%87?&max-results=8";
document.getElementById('ime_gosta').target = "_blank";
document.getElementById('aforizam_gosta1').innerText = "Адвокат ми је препоручио ванредне правне лекове. У случају нежељене пресуде, обратићу се лекару или фармацеуту.";
document.getElementById('aforizam_gosta2').innerText = "Осуђен сам на три доживотне робије. Уз добро владање, можда ми смање на две.";
document.getElementById('aforizam_gosta3').innerText = "Револтиран грађанин је пуцао у посланика! Као олакшавајућа околност узето је то што је опозициони.";

document.getElementById('ime_gosta2').innerText = "ДАМЊАНОВИЋ ИГОР БРАЦА - ДИБ";
document.getElementById('ime_gosta2').href = "https://dibovanje.wordpress.com/tag/igor-braca-damnjanovic-dib/";
document.getElementById('ime_gosta2').target = "_blank";
document.getElementById('aforizam_gosta4').innerText = "Богиња правде је слепа, па суд не следи њу, него вођу.";
document.getElementById('aforizam_gosta5').innerText = "Унајмио сам адвоката. Ја не умем да лажем.";
document.getElementById('aforizam_gosta6').innerText = "У бракоразводној парници највише је добио адвокат. И моје паре и моју жену.";

document.getElementById('ime_gosta3').innerText = "ОТАШЕВИЋ ЂОРЂЕ";
document.getElementById('ime_gosta3').href = "http://www.alma.co.rs/autori/otasevic.html";
document.getElementById('ime_gosta3').target = "_blank";
document.getElementById('aforizam_gosta7').innerText = "Мафијаш се брани ћутањем. Застрашених сведока.";
document.getElementById('aforizam_gosta8').innerText = "Одлежао је у затвору десет година. Тако му је суђено.";
document.getElementById('aforizam_gosta9').innerText = "Спортски риболовци пуштају ситне рибе. Судије обрнуто.";

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
