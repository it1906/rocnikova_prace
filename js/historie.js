// Vytvořte pole datových objektů v platných formátech JSON (otestujte jejich validitu např. zde: https://jsonformatter.curiousconcept.com/)
// Historické události
const events = [
    {
        "year": "1870",
        "event": "Bitva u Little Bighornu",
        "detail": "Bitva u Little Bighornu je událost, která byla střetnutím mezi armádou Spojených států amerických a válečníky indiánských kmenů Lakotů, severních Šajenů a Arapahů, která se odehrála dne 25. června 1876. USA chtěly postavit železnice k novým osadám, ale mezi osady a východ světadílu se vklínila rezervace přidělená Indiánům, která by musela být objížděna dlouhou oklikou vedoucí jižním směrem. Navíc bylo na posvátném území Siouxů Black Hills nalezeno zlato. Tím byl nad Siouxy vyhlášen konečný ortel. Smlouva se Siouxy šla stranou. Zlato bylo důležitější. Indiáni se o tom dozvěděli a schopný šaman a pohlavár několika válečných spolků Sedící býk sjednotil několik kmenů Siouxů. Rozhodl se postavit na odpor a nenechat se zahánět do stále menších rezervací",
        "url": "https://cs.wikipedia.org/wiki/Bitva_u_Little_Bighornu",
        "evaluation": "true"
    },
    {
        "year": "1803",
        "event": "Koupě Louisiany",
        "detail": "Koupě Louisiany bylo získání území o rozloze 2 140 000 km² Spojenými státy americkými od Francie v roce 1803. USA zaplatily 60 milionů franků (11 250 000 dolarů), zároveň odpustily Francii dluhy ve výšce 18 milionů franků (3 750 000 dolarů). Celková suma, kterou USA za území Louisiany zaplatily, činila 15 milionů dolarů (v roce 2011 by tato suma představovala 233 milionů dolarů). Louisiana zahrnovala území 15 současných amerických států a dvou kanadských provincií. Koupená země zahrnovala celé území dnešního Arkansasu, Missouri, Iowy, Oklahomy, Kansasu a Nebrasky; části Minnesoty západně od řeky Mississippi; většinu území Severní Dakoty; prakticky celé území Jižní Dakoty; severovýchodní Nové Mexiko; severní Texas;části území dnešních států Montana, Wyoming, a Colorado a část dnešního státu Louisiana na západ od řeky Mississippi, včetně města New Orleans.",
        "url": "https://cs.wikipedia.org/wiki/Koup%C4%9B_Louisiany",
        "evaluation": "false"
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Greg_Gianforte_crop.jpg/225px-Greg_Gianforte_crop.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/61/Greg_Gianforte_115th_congress.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Greg_Gianforte"
    },
    {
        "name": "Joseph Kemp Toole",
        "birth": "12.5.1851",
        "death": "11.3.1929",
        "biography": "Toole se narodil v Savaně, Missouri a chodil do veřejné školy sv. Josefa. V roce 1868 vystudoval Západní Vojenskou Instituci v New Castlu s několika oceněními. Přestěhoval se do Heleny, kde studoval právo. Později se stal prezidentem Montanského teritoria. Vzal si Lily Rosecranskou a měli spolu 3 děti.",
        "portraits": [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Joseph_Kemp_Toole.jpg/220px-Joseph_Kemp_Toole.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f8/JosephKToole.JPG"
        ],
        "online": "https://en.wikipedia.org/wiki/Joseph_Toole"
    },
    {
        "name": "Gary Cooper",
        "birth": "7.5.1901",
        "death": "13.5.1961",
        "biography": "Gary Cooper se narodil jako Frank James Cooper 7. května 1901 v montanské Heleně jako druhý syn anglických přistěhovalců Charlese Henry Coopera, který se od svého příchodu do USA v roce 1885 stačil vypracovat ze soudního písaře až na respektovaného vrchního soudce, a Alici rozené Brazier. Frankova rodina byla v době jeho dětství už jednou z nějzámožnějších ve městě a vlastnila i šestisetakrový ranč Seven-Bar-Nine, kde si mohli Frank se svým starším bratrem Arthurem (*1895)vyhrát dosytosti. Staré dobré časy Divokého západu sice již dávno pominuly, ale i tak se Frank stačil nadýchat omamného vzduchu starých indiánských a kovbojských dobrodružství.",
        "portraits": [
            "https://img.csfd.cz/files/images/creator/photos/161/978/161978231_317dfa.png?w100h132crop",
            "https://upload.wikimedia.org/wikipedia/commons/2/27/Gary_cooper_promo_image.jpg"
        ],
        "online": "https://www.csfd.cz/tvurce/761-gary-cooper/"
    },
    {
        "name": "Patrick Duffy",
        "birth": "17.3.1949",
        "death": "Stále žije",
        "biography": "Patrick G. Duffy je americký televizní herec a režisér. K jeho nejznámějším rolím patří Bobby Ewing v seriálu stanice CBS Dallas a Frank Lambert v seriálu stanice ABC v sitkomu Krok za krokem. V roce 1976 Duffy dostal roli Marka Harrise v seriálu Muž z Atlantidy.",
        "portraits": [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Patrick_Duffy_-_Monte-Carlo_Television_Festival.jpg/230px-Patrick_Duffy_-_Monte-Carlo_Television_Festival.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Patrick_Duffy_at_PaleyFest_2013.jpg/225px-Patrick_Duffy_at_PaleyFest_2013.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Patrick_Duffy"
    },
    
];

// Články s historickými zajímavostmi
const articles = [
    {
        "title": "Slavná bitva na Vítkově: Vítězství husitů a potupa křižáků",
        "text": "Obrovské křižácké vojsko se rozložilo kolem Prahy, a když ho 9. července posílily oddíly rakouského vévody Albrechta Habsburského, dosáhlo své největší síly. Přesto jich na úplné obležení pražských měst bylo málo, Žižka stále z Vítkova kontroloval východní oblast.",
        "date": "14.7.1420",
        "author": "Jindřich Kačer",
        "source": "https://www.stoplusjednicka.cz/slavna-bitva-na-vitkove-vitezstvi-husitu-potupa-krizaku",
        "likes": "15",
        "dislikes": "5",
        "gallery": [
            "adolf_liebscher_-_bitva_na_hore_vitkove_dne_14._cervence_roku_1420.jpg",
            "jan_vilimek_-_jan_zizka_z_trocnova-2.jpg",
            "pisanello_024.jpg"
        ]
    },
    {
        "title": "Diplomat Jiří z Poděbrad: Co dělal, než se stal českým králem?",
        "text": "Musel snést hanlivé přídomky od nepřátel, osočování závistivých spojenců i zradu toho, kterému dopomohl ke království. Ač neměl královskou krev, přesto se jím Jiří z Poděbrad stal. Nadávali mu do panchartů, kterým zřejmě byl. Již od sedmi let byl sirotkem uprostřed víru husitských válek. Posmívali se mu kvůli jeho obézní postavě a považovali ho za neschopného rytířských soubojů. Vyčítali mu nekrálovský původ. Ačkoli katolíky toleroval, oni ho osočovali jako kacíře. Přes to všechno dokázal vystoupit po mocenských stupních až na samý vrchol. Kališnický král Jiří z Poděbrad byl zkrátka neobyčejně silnou osobností. Dokázal prozíravě reagovat na soudobé dění a úspěšně vládnout nejen své zemi, ale také sám sobě…",
        "date": "3.9.1448",
        "author": "Robert Vlk",
        "source": "https://www.stoplusjednicka.cz/diplomat-jiri-z-podebrad-co-delal-nez-se-stal-ceskym-kralem",
        "likes": "25",
        "dislikes": "3",
        "gallery": [
            "vaclav_brozik_-_volba.jpg",
        ]
    },
    {
        "title": "Muž s promítačkou: První stálé kino v Praze založil Viktor Ponrepo",
        "text": "Filmové projekce se zpočátku uskutečňovaly v kavárnách nebo nočních podnicích a přesně tak tomu bylo i v českých zemích. Na šíření kinematografie se podílela řada dnes už zapomenutých nadšenců, kteří si pořídili potřebné vybavení a putovali od města k městu. K založení stálého kina se ale z obavy o nedostatek diváků dlouho nikdo neměl. Jedním z prvních odvážlivců se stal  Viktor Ponrepo.",
        "date": "1907",
        "author": "Robert Šimek",
        "source": "https://www.stoplusjednicka.cz/muz-s-promitackou-prvni-stale-kino-v-praze-zalozil-viktor-ponrepo",
        "likes": "24",
        "dislikes": "1",
        "gallery": [
            "ponrepo1.jpg",
            "ponrepo2.jpg",
        ]
    },
    {
        "title": "Pokrok na odiv světu: V roce 1891 se v Praze konala Jubilejní zemská výstava",
        "text": "Velkou zásluhu na uskutečnění výstavy měla pražská obchodní komora a její předseda Bohumil Bondy. Roku 1887 vznikla z jeho popudu komise, která nakonec ustanovila zřízení stálé výstavní budovy v bubenečském parku. O rok později se rozhodlo o termínu výstavy a jejím názvu. Schválené výdaje činily 1 132 000 zlatých. Podnik si vyžadoval postavení mnoha budov, což se ovšem potkalo s velkou nepřízní počasí. Navzdory povodni v září 1890 a silným mrazům na přelomu let 1890 a 1891 byla výstava slavnostně zahájena 15. května 1891. Událost doprovázely Dvořákovy fanfáry a úvodní projev pronesl arcivévoda Karel Ludvík. Později ji navštívil i sám císař František Josef I. ",
        "date": "15.5.1891",
        "author": "Ilona Šťastná",
        "source": "https://www.stoplusjednicka.cz/pokrok-na-odiv-svetu-v-roce-1891-se-v-praze-konala-jubilejni-zemska-vystava",
        "likes": "14",
        "dislikes": "2",
        "gallery": [
            "bruner3_cisar.jpg",
        ]
    }
];

$(function () {

    /* Po kliknutí na některý z nadpisů h2 se střídavě zobrazí nebo zmizí blok (div) pod nadpisem */
    /* $(this) = selektor, který ukazuje na právě aktivní objekt, v tomto případě tedy na jeden z nadpisů h2, na který bylo kliknuto */
    /* Následuje tzv. traverzování: */
    /* parents(".row") - hledá mezi nadřízenými prvky (rodiči) první, který obsahuje třídu .row */
    /* next() - ukáže na nejbližšího sourozence; v tomto případě další div */
    /* toggle() - metoda, která střídavě skrývá|odkrývá vybrané prvky */

    /* V první části je tabulka s významnými událostmi z dějin dané země */
    /* Data jsou do tabulky načtena z proměnné events */
    /* Všimněte si, že v bloku .event-evaluation je použit ternární operátor, který rozhoduje o zobrazení ikony + nebo -*/
    /* Metoda append() přidává nové prvky do vybrané částí stránky (vždy za už existující obsah) */

    /* Po načtení stránky se skryjí všechny detaily událostí */

    /* Při najetí kurzoru myši na ikonu nebo odkaz dojde k následujícím akcím: */
    /* Ze všech řádků tabulky se odstraní dvě uvedené třídy */
    /* Tyto dvě třídy se přidají jen rodičovskému řádku (.parents("tr")) toho (this) prvku, na který zrovna ukázala myš */
    /* Nejprve zajistíme skrytí všech detailů událostí */
    /* Poté ukážeme pouze ten detail, který následuje po prvku, na který zrovna ukázala myš */
    /* Zde je použito tzv. traverzování - metodou parent() nejprve "traverzujeme" na rodiče aktivního prvku (odstavec), 
       poté metodou next() vybereme nejbližšího následujícího sourozence (odstavec s detailem) */
    /* Zároveň zde, ale i na jiných místech, využíváme tzv. řetězení (chaining), kdy můžeme volat několik metod v řadě */

    /* Druhá část stránky obsahuje seznam slavných postav a vedle něj se po kliknutí zobrazuje karta s podrobnějším profilem osobnosti */
    /* Nejprve jsou načtena jména osobností z proměnné heroes do seznamu upraveného pomocí tříd Bootstrapu */

    /* Funkce zajistí načtení dat o vybrané osobnosti a jejich správné zobrazení ve struktuře karty */
    /* Do proměnné hero se z pole heroes načte objekt o osobnosti, která byla vyhledána podle jména */
    /* Metoda html() umožnuje vložení HTML kódu (odpovídá innerHTML() v JS) */
    /* Metoda text() umožnuje vložení "holého" textu (odpovídá innerText() v JS) */
    /* Vyprázdní se oblast s galerií fotek spojených s danou osobností */
    /* V cyklu budou přidány nové bloky s fotkami osobnosti */

    /* Po načtení stránky bude jako aktivní označena první osobnost v seznamu */
    /* Pomocí připravené funkce, které je předáno jméno první osobnosti, se načtou data do profilové karty */

    /* Po kliknutí na jméno osobnosti v seznamu se provede následující sled akcí: */
    /* Nejprve všechny prvky seznamu zbavíme třídu active, abychom měli jistotu, že žádný z nich nebude zvýrazněn */
    /* A nyní přidáním třídy active zvýrazníme právě ten prvek (this), na který bylo kliknuto */
    /* Do proměnné person se uloží textová hodnota (tj. jméno osoby) toho (this) objektu, na který uživatel kliknul */
    /* Celý blok označený id portret se nejprve zaroluje a po dovršení této akce se zavolá tzv. callback funkce */
    /* Součástí callback funkce je změna údajů na profilové kartě podle jména aktuálně vybrané osobnosti (proměnná person) */
    /* Blok portret se během 1 sekundy vyroluje */

    /* Třetí část stránky je věnována článkům z historie země */
    /* Články jsou načteny z proměnné articles a umístěny do responzivních bloků */

    /* Po načtení stránky jsou texty všech článků nejprve skryty */

    /* Po kliknutí na titulek článku se střídavě zobrazuje, nebo skrývá text článku */

    /* Po kliknutí na tlačítka likes a dislikes dojde k symbolickému zvýšení uvedených čísel */
    /* Metoda find() hledá zadaného potomka (podřízený/child prvek) zrovna aktivního elementu (this) */
    /* Metoda text() tady vystupuje jako tzv. getter - slouží k získání dat */
    /* Pomocí parseInt() převedeme získaný text na číslo a uložíme do proměnné likes */
    /* Metoda text() je zde použita ve formě setteru - hodnota se nastavuje */


    /* Animované střídavé zobrazování fotografií z galerií u jednotlivých článků */
})