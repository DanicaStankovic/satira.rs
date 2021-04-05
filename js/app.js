var val;

val = document;

document.getElementById('ant_nedelje').innerText = 'Србија је Исток на Западу и Запад на Истоку. Зато и седи на две столице.';
document.getElementById('afo_nedelje').innerText = 'Опрезан мушкарац контролише ситуацију, а неопрезан плаћа алиментацију.';


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

document.getElementById('ime_gosta3').innerText = "ДОДЕРОВИЋ ЗОРАН";
document.getElementById('ime_gosta3').href = "https://www.rastko.rs/rastko/delo/16033";
document.getElementById('ime_gosta3').target = "_blank";
document.getElementById('aforizam_gosta7').innerText = "Кад су закони пуни рупа, правда споро стиже на циљ.";
document.getElementById('aforizam_gosta8').innerText = "Судија је био на страни правде, али је мито пресудио.";
document.getElementById('aforizam_gosta9').innerText = "Председник је оправдано амнестирао затворенике. Сви до једног су тврдили да су невини.";

document.getElementById('ime_gosta4').innerText = "ЈОВАНОВИЋ ЗОРАН";
document.getElementById('ime_gosta4').href = "https://medijacentar016.com/index.php/2020/05/19/mr-zoran-jovanovic-pisac-i-aforisticar-potomak-nagradjena-pesma/";
document.getElementById('ime_gosta4').target = "_blank";
document.getElementById('aforizam_gosta10').innerText = "Ако Прле ћути, сви други су Тихи!";
document.getElementById('aforizam_gosta11').innerText = "Два су лоша убила Милоша, трећи је сведок сарадник.";
document.getElementById('aforizam_gosta12').innerText = "Није све у дугим ногама, има и нешто између.";

document.getElementById('ime_gosta5').innerText = "КОЦИЋ ДАНИЛО";
document.getElementById('ime_gosta5').href = "https://sr.wikipedia.org/sr-el/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE_%D0%9A%D0%BE%D1%86%D0%B8%D1%9B";
document.getElementById('ime_gosta5').target = "_blank";
document.getElementById('aforizam_gosta13').innerText = "Највећи криминалци ослобођени су на суду. То је најбољи доказ да смо правна држава.";
document.getElementById('aforizam_gosta14').innerText = "Понекад морају и невини да се осуде, да би се постигао задовољавајући учинак правне државе.";
document.getElementById('aforizam_gosta15').innerText = "У Уставу пише једно, у законима друго, у пракси је – треће. Не будимо баш толики формалисти.";

document.getElementById('ime_gosta6').innerText = "КУЛИЋ МИРКО";
document.getElementById('ime_gosta6').href = "https://sr.wikipedia.org/sr-ec/%D0%9C%D0%B8%D1%80%D0%BA%D0%BE_%D0%9A%D1%83%D0%BB%D0%B8%D1%9B";
document.getElementById('ime_gosta6').target = "_blank";
document.getElementById('aforizam_gosta16').innerText = "Сведок би говорио истину, али му нису рекли коју.";
document.getElementById('aforizam_gosta17').innerText = "Уставни суд Босне и Херцеговине је јединствен. Судије интернационалне, одлуке једнонационалне!";
document.getElementById('aforizam_gosta18').innerText = "Што су злочинци моћнији, то лакше доказују кривицу жртава!";

document.getElementById('ime_gosta7').innerText = "ОТАШЕВИЋ ЂОРЂЕ";
document.getElementById('ime_gosta7').href = "http://www.alma.co.rs/autori/otasevic.html";
document.getElementById('ime_gosta7').target = "_blank";
document.getElementById('aforizam_gosta19').innerText = "Мафијаш се брани ћутањем. Застрашених сведока.";
document.getElementById('aforizam_gosta20').innerText = "Одлежао је у затвору десет година. Тако му је суђено.";
document.getElementById('aforizam_gosta21').innerText = "Спортски риболовци пуштају ситне рибе. Судије обрнуто.";

document.getElementById('ime_gosta8').innerText = "ЋОСИЋ МИЛОРАД";
document.getElementById('ime_gosta8').href = "https://www.konkretno.co.rs/autori/milorad-cosic";
document.getElementById('ime_gosta8').target = "_blank";
document.getElementById('aforizam_gosta22').innerText = "Закон гарантује слободу говора, слободно причајте па ћете се уверити.";
document.getElementById('aforizam_gosta23').innerText = "За сваку  власт слобода је нежељена трудноћа.";
document.getElementById('aforizam_gosta24').innerText = "Народ се ућутао, а то је громогласна порука.";

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
