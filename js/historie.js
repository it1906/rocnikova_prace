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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Greg_Gianforte_crop.jpg/225px-Greg_Gianforte_crop.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Greg_Gianforte"
    },
    {
        "name": "Tomáš Garrigue Masaryk",
        "birth": "7.3.1850",
        "death": "14.9.1937",
        "biography": "T. G. Masaryk byl pedagog, politik a filozof. V roce 1918 se stal prvním československým prezidentem. Jeho osoba bývá spojována většinou pouze s obdobím první republiky, ačkoli značnou část svého díla vykonal již před ní, zvláště pokud jde o filozofickou realizaci jeho díla knižně, literární časopiseckou činnost a vynikající aktivitu v jeho třech poslaneckých obdobích ve vídeňské říšské radě. Masaryk byl označen za \"Prezidenta Osvoboditele\". Ještě za jeho života a prezidentování, k jeho osmdesátým narozeninám 7. 3. 1930, se národní shromáždění usneslo na zákoně \"Masaryk se zasloužil o stát\" (Lex Masaryk). Když \"Tatíček Masaryk\" 14. září 1937 po zánětu plic zemřel, zemřel pro jeho obdivovatele symbol morální velikosti a velké autority.",
        "portraits": [
            "tgm-01.png",
            "tgm-02.png",
            "tgm-03.jpg",
            "masaryk-capek.gif"
        ],
        "online": "https://cs.wikipedia.org/wiki/Tom%C3%A1%C5%A1_Garrigue_Masaryk"
    },
    {
        "name": "Václav Havel",
        "birth": "5.10.1936",
        "death": "18.12.2011",
        "biography": "Spisovatel a dramatik, zakázaný umělec, pronásledovaný občan, vězeň svědomí, vůdčí osobnost nenásilného svržení komunistického režimu a politických změn v Československu, obránce lidských a občanských práv, poslední prezident Československa a první prezident České republiky.",
        "portraits": [
            "havel-01.jpg",
            "havel-02.jpg",
            "havel-03.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/V%C3%A1clav_Havel"
    },
    {
        "name": "Jan Amos Komenský",
        "birth": "28.3.1592",
        "death": "15.11.1670",
        "biography": "Byl poslední biskup Jednoty bratrské a jeden z největších českých myslitelů, filosofů a spisovatelů. Během svého života si získal renomé především jako pedagog, resp. teoretik pedagogiky a autor mnoha spisů z tohoto oboru. Byl jediným tvůrcem originální, filosoficky ukotvené pedagogické soustavy v českých zemích,[3] zabýval se všeobecnou teorií výchovy, didaktikou, vytvořil speciální metodiku výuky jazyků a sám sepisoval originální učebnice. Už za Komenského života si získaly mimořádnou oblibu jeho jazykové příručky Janua linguarum reserata (Dvéře jazyků otevřené, známé jako Brána jazyků otevřená) a Orbis sensualium pictus (Svět v obrazech). Komenský je považován za zakladatele moderní pedagogiky a vysloužil si přízvisko Učitel národů.",
        "portraits": [
            "komensky-01.jpg",
            "komensky-02.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Jan_Amos_Komensk%C3%BD"
    },
    {
        "name": "Jan Hus",
        "birth": "přibližně 1370",
        "death": "6.7.1415",
        "biography": "Jan Hus svůj život zasvětil boji za reformu církve a společnosti. Rektor Pražské univerzity, který se marně snažil obhájit své myšlenky před koncilem a byl upálen. Jeho lidský vzor i poselství jeho života se staly základem jedné z nejpodstatnějších historických etap našich dějin, která nese jeho jméno – husitství.",
        "portraits": [
            "hus-01.jpg",
            "hus-02.jpg",
            "hus-03.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Jan_Hus"
    },
    {
        "name": "Antonín Dvořák",
        "birth": "8.9.1841",
        "death": "1.5.1904",
        "biography": "Světoznámý český hudební skladatel, dirigent a profesor, jeden z největších hudebních géniů lidských dějin. Když Bůh rozdával darem nadání k hudbě, šel si Dvořák ne dvakrát, ale nejspíše hned třikrát. Za svůj život složil 11 oper (např. Rusalka, Armida, Král a uhlíř, či Jakobín), vokální a vokálně-instrumentální díla (Svatou Ludmilu, Requiem, Te Deum a nádhernou Stabat Mater), komorní skladby, koncerty, sbory, písně (Biblické písně), klavírní skladby, symfonické básně a 9 symfonií, z nichž vysoko do pomyslných hudebních nebes ční symfonie 9. - famózní „Novosvětská“, patřící k tomu vůbec nejkrásnějšímu, co kdy člověk zkomponoval. Snad se ani nelze divit tomu, že Američané, na jejichž půdě \"Novosvětská\" vznikla, považují Antonína Dvořáka také trochu za svého skladatele.",
        "portraits": [
            "dvorak-01.jpg",
            "dvorak-02.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Anton%C3%ADn_Dvo%C5%99%C3%A1k"
    },
    {
        "name": "Karel Čapek",
        "birth": "9.1.1890",
        "death": "25.12.1938",
        "biography": "Karel Čapek byl žurnalistou, prozaikem, dramatikem, překladatelem a kritikem, autorem knih pro děti. Karel Čapek podnikl řadu cest do zahraničí, z nichž získal podněty pro své cestopisné fejetony a prózy. Byl zvolen prvním předsedou československého PEN-KLUBU. Ve své vinohradské vile organizoval Karel Čapek přátelské páteční besedy. Ženou Karla Čapka byla herečka a spisovatelka Olga Scheinpflugová. Čapkovo mnohotvárné a neobyčejně bohaté dílo přervala náhlá smrt. Zemřel 25. prosince 1938 v Praze na zápal plic. Je pochován na Vyšehradě.",
        "portraits": [
            "capek-01.jpg",
            "masaryk-capek.gif",
            "capkove.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Karel_%C4%8Capek"
    },
    {
        "name": "Božena Němcová",
        "birth": "4.2.1820",
        "death": "21.1.1862",
        "biography": "Do podvědomí čtenářů se vryla jako autorka povídek a rozsáhlejších próz z venkovského prostředí a autorka pohádkových sbírek. Začínala jako básnířka a později svou činnost přizpůsobila zájmu o lidové tradice a folklór. Hrdiny povídek jsou většinou prostí lidé, které vykresluje až idealizovaně a staví je do kontrastu s boháči a vrchností.",
        "portraits": [
            "nemcova-01.jpg",
            "nemcova-02.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Bo%C5%BEena_N%C4%9Bmcov%C3%A1"
    },
    {
        "name": "Emil Zátopek",
        "birth": "19.9.1922",
        "death": "21.11.2000",
        "biography": "Emil Zátopek se stal prvním člověkem na světě, který uběhl trať 10 km pod 29 minut (28:54,2 1. června 1954 v Bruselu) a trať 20 km pod jednu hodinu (59:51,8 29. září 1951 ve Staré Boleslavi). Celkem vytvořil třináct světových rekordů na kilometrových a pět na mílových tratích. Jde o jednoho z největších atletů všech dob. Nejvíce ale proslul během olympijských her 1952 v Helsinkách, kde vyhrál běh na 5 km (14:06,72), 10 km (29:17,0), a dokonce i maratón (2:23:03,2), který tehdy běžel poprvé v životě. V každé z těchto disciplín tehdy zároveň ustavil nový olympijský rekord. Tento „trojboj“ se dodnes žádnému vytrvalci nepodařilo zopakovat a atletičtí experti pochybují, že se ještě někomu kdy podaří. Byl znám svým upracovaným stylem běhu, doprovázeným křečovitými grimasami, v cizině byl přezdíván česká lokomotiva a Satupekka.",
        "portraits": [
            "zatopek-01.jpg",
            "zatopek-02.jpg",
            "zatopek-03.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Emil_Z%C3%A1topek"
    },
    {
        "name": "Ema Destinnová",
        "birth": "20.2.1878",
        "death": "28.1.1930",
        "biography": "Do dějin umění se výrazným způsobem zapsala česká umělkyně Emílie Pavlína Kittlová, známá spíše jako Ema Destinnová. Žena, jejíž kouzlo bylo možné spatřit i slyšet, inspirovala umělce v tvorbě i životě. Její lyrický soprán mohutného a dramaticky zbarveného hlasu společně s hereckým ztvárněním stále znovu vyvolával úžas v koncertních sálech slavných scén začátkem 20. století.",
        "portraits": [
            "destinova-01.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Ema_Destinnov%C3%A1"
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