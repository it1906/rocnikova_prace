// Vytvořte pole datových objektů v platných formátech JSON (otestujte jejich validitu např. zde: https://jsonformatter.curiousconcept.com/)
// Historické události
const events = [
    {
        "year": "1870",
        "event": "Bitva u Little Bighornu",
        "detail": "Bitva u Little Bighornu je událost, která byla střetnutím mezi armádou Spojených států amerických a válečníky indiánských kmenů Lakotů, severních Šajenů a Arapahů, která se odehrála dne 25. června 1876. USA chtěly postavit železnice k novým osadám, ale mezi osady a východ světadílu se vklínila rezervace přidělená Indiánům, která by musela být objížděna dlouhou oklikou vedoucí jižním směrem. Navíc bylo na posvátném území Siouxů Black Hills nalezeno zlato. Tím byl nad Siouxy vyhlášen konečný ortel. Smlouva se Siouxy šla stranou. Zlato bylo důležitější. Indiáni se o tom dozvěděli a schopný šaman a pohlavár několika válečných spolků Sedící býk sjednotil několik kmenů Siouxů. Rozhodl se postavit na odpor a nenechat se zahánět do stále menších rezervací",
        "url": "https://cs.wikipedia.org/wiki/Bitva_u_Little_Bighornu",
    },
    {
        "year": "1803",
        "event": "Koupě Louisiany",
        "detail": "Koupě Louisiany bylo získání území o rozloze 2 140 000 km² Spojenými státy americkými od Francie v roce 1803. USA zaplatily 60 milionů franků (11 250 000 dolarů), zároveň odpustily Francii dluhy ve výšce 18 milionů franků (3 750 000 dolarů). Celková suma, kterou USA za území Louisiany zaplatily, činila 15 milionů dolarů (v roce 2011 by tato suma představovala 233 milionů dolarů). Louisiana zahrnovala území 15 současných amerických států a dvou kanadských provincií. Koupená země zahrnovala celé území dnešního Arkansasu, Missouri, Iowy, Oklahomy, Kansasu a Nebrasky; části Minnesoty západně od řeky Mississippi; většinu území Severní Dakoty; prakticky celé území Jižní Dakoty; severovýchodní Nové Mexiko; severní Texas;části území dnešních států Montana, Wyoming, a Colorado a část dnešního státu Louisiana na západ od řeky Mississippi, včetně města New Orleans.",
        "url": "https://cs.wikipedia.org/wiki/Koup%C4%9B_Louisiany",
    },
];

// Významné postavy
const heroes = [
    {
        "name": "Greg Gianforte",
        "birth": "17. dubna 1961",
        "death": "Stále žije",
        "biography": "Greg Gianforte je americký podnikatel a také politik za Republikánskou stranu. V letech 2017 až 2020 byl poslancem Sněmovny reprezentantů Spojených států amerických za Montanu. Ve volbách v roce 2020 byl následně zvolen guvernérem Montany.",
        "portraits": [
            "greg.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Greg_Gianforte"
    },
    {
        "name": "Joseph Kemp Toole",
        "birth": "12.5.1851",
        "death": "11.3.1929",
        "biography": "Toole se narodil v Savaně, Missouri a chodil do veřejné školy sv. Josefa. V roce 1868 vystudoval Západní Vojenskou Instituci v New Castlu s několika oceněními. Přestěhoval se do Heleny, kde studoval právo. Později se stal prezidentem Montanského teritoria. Vzal si Lily Rosecranskou a měli spolu 3 děti.",
        "portraits": [
            "toole.jpg"
        ],
        "online": "https://en.wikipedia.org/wiki/Joseph_Toole"
    },
    {
        "name": "Gary Cooper",
        "birth": "7.5.1901",
        "death": "13.5.1961",
        "biography": "Gary Cooper se narodil jako Frank James Cooper 7. května 1901 v montanské Heleně jako druhý syn anglických přistěhovalců Charlese Henry Coopera, který se od svého příchodu do USA v roce 1885 stačil vypracovat ze soudního písaře až na respektovaného vrchního soudce, a Alici rozené Brazier. Frankova rodina byla v době jeho dětství už jednou z nějzámožnějších ve městě a vlastnila i šestisetakrový ranč Seven-Bar-Nine, kde si mohli Frank se svým starším bratrem Arthurem (*1895)vyhrát dosytosti. Staré dobré časy Divokého západu sice již dávno pominuly, ale i tak se Frank stačil nadýchat omamného vzduchu starých indiánských a kovbojských dobrodružství.",
        "portraits": [
            "cooper.jpg"
        ],
        "online": "https://www.csfd.cz/tvurce/761-gary-cooper/"
    },
    {
        "name": "Patrick Duffy",
        "birth": "17.3.1949",
        "death": "Stále žije",
        "biography": "Patrick G. Duffy je americký televizní herec a režisér. K jeho nejznámějším rolím patří Bobby Ewing v seriálu stanice CBS Dallas a Frank Lambert v seriálu stanice ABC v sitkomu Krok za krokem. V roce 1976 Duffy dostal roli Marka Harrise v seriálu Muž z Atlantidy.",
        "portraits": [
            "duffy.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Patrick_Duffy"
    },
    {
        "name": "Loren Acton",
        "birth": "7.3.1936",
        "death": "Stále žije",
        "biography": "V Montaně vystudoval High School v Billings a State College v Bozemanu. Poté absolvoval vysokoškolské studium na University of Colorado at Boulder, kde získal titul doktora astrofyziky. Následně získal zaměstnání u Lockheed Palo Alto, zde setrval od roku 1964 do r. 1993. V průběhu let se přihlásil k NASA. V týmu připravujících se amerických astronautů byl od roku 1978 (bylo mu 42 let). Po svém letu do vesmíru zůstal ještě rok u NASA, načež se v roce 1986 vrátil ke své práci u firmy Lockheed. Ve svých 57 letech, v roce 1993 nastoupil jako profesor v Montaně na univerzitu (Montana State University), kde také vystudoval inženýrství. Je ženatý s Evelyn, rozenou Oldenburger a má dvě děti, jmenují se Cheryl a Stanley.",
        "portraits": [
            "loren.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Loren_Acton"
    },
    {
        "name": "David Lynch",
        "birth": "20.1.1946",
        "death": "Stále žije",
        "biography": "David Keith Lynch je americký filmový scenárista, režisér, producent, malíř, hudebník, skladatel a performer. Jedná se o významného představitele postmoderní kinematografie. Byl nominován na Oscara v kategorii nejlepší režie za filmy Sloní muž (1980), Modrý samet (1986) a Mulholland Drive (2001). Sloní muž byl také nominován v kategorii nejlepší scénář. V roce 2019 získal Čestného Oscara za celoživotní přínos kinematografii. Vyhrál hlavní cenu na Filmovém festivalu v Cannes a Benátkách.",
        "portraits": [
            "lynch.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/David_Lynch"
    },
    
];

// Články s historickými zajímavostmi
const articles = [
    {
        "title": "Dražba amerického města Garryowen skončila fiaskem. Nikdo ho nechtěl",
        "text": "Město Garryowen v americké Montaně se prodávat nebude. Unikátní dražba obce o dvou obyvatelích u bojiště Little Bighorn skončila trapasem. Sousedství historického místa, kde v roce 1876 indiáni slavně zvítězili nad generálem Custerem, nepomohlo. Nikdo nechtěl přihazovat.",
        "date": "16.8.2012",
        "author": "iROZHLAS",
        "source": "https://www.irozhlas.cz/zpravy-svet/drazba-americkeho-mesta-garryowen-skoncila-fiaskem-nikdo-ho-nechtel_201208160700_kbrezovska",
        "likes": "43",
        "dislikes": "6",
        "gallery": [
            "drazba.jpeg",
        ]
    },
    {
        "title": "Generál Custer měl vítězství na dosah",
        "text": "Little Bighorn je synonymem posledního vzepětí amerických indiánů a ponižující porážky 7. kavalerie americké armády vedené generálem Georgem Armstrongem Custerem v roce 1876. Jak jsem však přímo na místě památné bitvy zjistil, bylo to trochu složitější, než se obvykle popisuje.",
        "date": "25.6.1876",
        "author": "Radiožurnál",
        "source": "https://radiozurnal.rozhlas.cz/general-custer-mel-vitezstvi-na-dosah-6273264",
        "likes": "420",
        "dislikes": "69",
        "gallery": [
            "custer.jpg",
        ]
    },
    {
        "title": "Bizoni z Yellowstonu se přestěhovali na západ. Uprostřed sněhové bouře a bez médií",
        "text": "Šest desítek bizonů z národního parku v Yellowstonu bylo v pondělí vypuštěno v rezervaci Fort Peck v americkém státě Montana, 800 kilometrů na severovýchod od jejich původního domova. Oznámila to agentura AP s tím, že jde o součást programu na opětné osídlení amerického západu tímto zvířecím druhem.",
        "date": "2012",
        "author": "HOSPODÁŘSKÉ NOVINY",
        "source": "https://zahranicni.ihned.cz/c1-55098210-bizoni-z-yellowstonu-se-prestehovali-na-zapad-uprostred-snehove-boure-a-bez-medii",
        "likes": "55",
        "dislikes": "3",
        "gallery": [
            "yellowstone.jpg",
        ]
    },
    {
        "title": "Rezervace indiánů se mění v peklo. Může za to alkohol",
        "text": "Ve státě Montana žije podle sčítání lidu z roku 2005 bezmála 950 tisíc obyvatel. Počet původních obyvatel Ameriky se pohybuje mezi šesti a sedmi procenty. Celoamerický průměr je přitom 0,8 procenta.",
        "date": "15.5.1891",
        "author": "Vendula Křížová",
        "source": "https://zpravy.aktualne.cz/zahranici/rezervace-indianu-se-meni-v-peklo-muze-za-to-alkohol/r~i:article:476067/",
        "likes": "186",
        "dislikes": "31",
        "gallery": [
            "indian.jpg",
        ]
    }
];

$(function(){
        $("h2").on("click", function(){
            $(this).parents(".row").next().toggle(1000);
        });
    
        events.forEach((event)=>{
            $("#udalosti tbody").append(`<tr>
                <td class="event-year">${event.year}</td>
                <td>
                  <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
                  <p class="event-detail">${event.detail}</p>
                </td>            
            </tr>`);
        });
    
        $(".event-detail").hide();
    
        $(".event-name i, .event-name a").on("mouseover", function(){

            $("#udalosti tr").removeClass("bg-secondary text-white");

            $(this).parents("tr").addClass("bg-secondary text-white");

            $(".event-detail").hide();

            $(this).parent().next().show(150);
        });    
    
        heroes.forEach((hero)=>{
            $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
        });

        function fillPersonCard(person) {

            let hero = heroes.find(item => {return item.name === person});
            $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
            $(".card-title").text(hero.name);
            $(".card-text").text(hero.biography);
            $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
            $(".gallery").empty();
            for (let i = 0; i < hero.portraits.length; i++) {
                $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="img/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);        
            }
        }
    
        $("#postavy li:first").addClass('active');
        fillPersonCard(heroes[0].name);
    
        $("#postavy li").on("click", function(){
            $("#postavy li").removeClass("active");
            $(this).addClass("active");        
            let person = $(this).text();
            $("#portret").slideUp(1, function(){
                fillPersonCard(person);
            });
            $("#portret").slideDown(1);
        });
    
        articles.forEach((article)=>{
            $("#zpravodaj").append(`    
            <div class="col-sm-6 mt-3 pb-3 border-bottom">
              <article>
                <figure>
                  <img src="/img/${article.gallery[0]}" alt="${article.title}" class="img-fluid">
                </figure>
                <h3>${article.title}</h3>
                <div class="article-text">
                    <p>${article.text}</p>
                    <p><a href="${article.source}" target="_new">Celý článek</a></p>
                </div>
                <div class="article-footer">Autor: ${article.author} 
                <button type="button" class="btn btn-success likes"><i class="fas fa-thumbs-up"></i> <span class="badge badge-light">${article.likes}</span></button>
                <button type="button" class="btn btn-danger dislikes"><i class="fas fa-thumbs-down"></i> <span class="badge badge-light">${article.dislikes}</span></button>
                </div>
              </article>
            </div>        
        `);    
        });

        $(".article-text").hide();

        $("#zpravodaj h3").on("click", function(){
            $(this).next(".article-text").toggle();
        });

        $(".likes").on("click", function(){
            let likes = parseInt($(this).find("span").text());
            $(this).find("span").text(likes + 1);
        });
    
        $(".dislikes").on("click", function(){
            let dislikes = parseInt($(this).find("span").text());
            $(this).find("span").text(dislikes + 1);
        });
    
        let timer = 0;
        window.setInterval(()=>{
            timer++;        
            $("article figure img").each(function(index, value){            
                $(value)
                .fadeOut(1000, function(){$(value).attr("src", "img/" + articles[index].gallery[timer % articles[index].gallery.length])})
                .fadeIn(500); 
            });
        }, 5000);    
    })