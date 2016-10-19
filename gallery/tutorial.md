## Wstęp

Efekt końcowy do którego dążymy (demo). Na ten efekt składa się X kompletnych, samodzielnych etapów, więc nawet jeśli zdążymy zrobić tylko 2, to i tak będziemy mieć gotową, działającą galerię, w najgorszym wypadku z mniejszą ilością wodotrysków.

Pytania kontrolne:

Kto ma doświadczenie z HTML i CSS?

(Ten kurs nie wymaga znajomości HTML i CSS, ale niewątpliwie ułatwia to sprawę. Dla osób, które nie czują się zbyt pewnie pokażemy narzędzia, które pomogą nam w zrozumieniu co się "dzieje" w HTML i CSS)

Kto programował już wcześniej w jakichś innych językach? Jakich?

(Jeżeli są ludzie z doświadczeniem w językach silnie typowanych, można rzucić trzy słowa wstępu, o tym dlaczego JavaScript będzie bardzo inny od tego co znają do tej pory)

Kto nie zna w ogóle angielskiego?

(Znajomość angielskiego bardzo pomaga w nauce programowania, z dwóch powodów - słowa kluczowe i nazwy metod z których będziemy korzystać są często słowami w języku angielskim, w tym języku powstaje też większość materiałów, dokumentacji i tutoriali w Internecie. Jeżeli będą w grupie osoby, które nie kojarzą angielskiego w ogóle, można dla ułatwienia przerzucić się na polskie nazwy funkcji i zmiennych).

Ogólna prośba - wszystkie pytania, prośby, sugestie i pomysły są bardzo mile widziane na każdym etapie, nie bójcie się nam przerywać, zwłaszcza jeżeli czegoś nie rozumiecie albo nie zdążyłyście zrobić.

## Środowisko
Edytor tekstu, przeglądarka, dev toolsy. Skąd pobrać źródła do projektu? (do rozwinięcia)

Ściągawka przy programowaniu (nikt nie zna tego wszystkiego na pamięć! Istnieje też wersja polska, ale jest niekompletna):
https://developer.mozilla.org/

## Stan początkowy

Na stronę internetową składają się trzy warstwy: struktura dokumentu (jakie elementy zawiera? nagłówki, akapity, sekcje, obrazki, tekst, itp) - za to wszystko odpowiedzialny jest HTML. Dalej mamy warstwę prezentacji - jak wyglądają poszczególne elementy? Gdzie są umieszczone na stronie? - na te pytania odpowiada CSS. Ostatnią warstwą jest interakcja z użytkownikiem - co się dzieje na stronie? jakie akcje można wykonać? Do tego potrzebny nam JavaScript.

### Podgląd elementów strony w Dev Toolsach

Podstawowa struktura HTML i CSS już jest gotowa - nasz kurs skupia się na JavaScripcie, więc zaczniemy od momentu w którym większość HTML i CSS jest już napisana. Co widzimy na stronie?
(Obrazek, podpis, nawigację, itp). W prawie każdej współczesnej przeglądarce wbudowane są potężne narzędzia, które pomogą nam zrozumieć z czego składa się strona i w jaki sposób ona działa. 

Na dowolnym elemencie możemy kliknąć **prawy przycisk > Zbadaj element** i zobaczyć, co kryje się pod spodem (klikamy na obrazek). W strukturze HTML widzimy że obrazek zawarty jest wewnątrz elementu `figure` - sam obrazek ładowany jest przy pomocy `img`, a do stworzenia podpisu służy `figcaption`. Widzimy też, że takich elementów jest więcej. Jeżeli najedziemy myszką na dowolny element na liście, strona podświetli nam go na niebiesko.

Po prawej mamy panel który wypisuje wszystkie style które wpływają na wygląd aktualnie podświetlonego elementu i skąd one pochodzą - to przydaje się bardzo przy pisaniu kodu CSS. Na dole za to mamy konsolę, w której możemy bezpośrednio wpisywać kod JavaScript i patrzeć jaki będzie miał efekt na stronie. (Chwila na rozejrzenie się po strukturze drzewa DOM, dostępnych narzędziach. Można poprosić grupę, żeby np powyłączali niektóre style, itp).

## Lekka dygresja - mechanizm przełączania obrazków 

(najprawdopodobniej TMI - skrócę to jak będę miała bardziej całościowy pogląd)
Na naszym kursie nie będziemy zajmowali się zbyt szczegółowo CSS, ale te dwie właściwości przydadzą nam się do zrozumienia jak działa mechanizm przełączania slajdów:

- `opacity`: przezroczystość. Przyjmuje wartości od 0 (całkiem przezroczyste) do 1 (całkiem nieprzezroczyste).
- `z-index`: kolejność elementów jeden nad drugim. Im wyższa wartość, tym wyżej ustawiony element nad innymi.
- `transition`: parametry animacji między stylami. Dzięki temu parametrowi możemy animować płynne przejścia pomiędzy slajdami.

Obrazek, który jest aktualnie pokazany ma dodaną dodatkowo klasę `show`. Sprawdźmy jakie style są dodane do tej klasy:

- `opacity: 1` - w pełni nieprzezroczysty,
- `z-index: 10` - wyżej w kolejności niż pozostałe obrazki,

Jeżeli sprawdzimy w narzędziach przeglądarki dowolny inny obrazek, zobaczymy domyślne style dla obrazków dodanych do galerii. Domyślnie wyglądają one tak:

- `opacity: 0` - czyli w pełni przezroczyste,
- `z-index: 1` - najniżej w kolejności,
- `transition: opacity 1s` - płynne przejście między przezroczystym a nieprzezroczystym przez jedną sekundę.

W ramach eksperymentu możemy sprawdzić co się stanie, kiedy zabierzemy klasę `show` z elementu nr 1 i dodamy ją do dowolnego innego elementu. (Można w dev toolsach, można w index.html, jak wygodniej)

Widzimy, że element który ma klasę `show` pokazuje się nam jako slajd, ten który tej klasy nie ma będzie niewidoczny. Naszym zadaniem będzie znalezienie sposobu na to, żeby automatycznie przełączać tą klasę pomiędzy obrazkami, tak żeby móc automatycznie przełączać slajdy, przy użyciu kodu.

## Etap 1 - Pisanie pierwszych poleceń

### Wstęp do programowania

Skąd komputer wie, co ma robić?

(Estymowana odpowiedź - dostaje program. Z czego składa się program? )
(Algorytm - przepis, instrukcje krok po kroku, zapisane w zrozumiałym dla komputera języku.)

Jak po polsku brzmiałby kod potrzebny do pokazania slajdu 5?

(czekamy na odpowiedzi, najprawdopodobniej dojdziemy do czegoś takiego)

1. Znajdź slajd 5 w dokumencie.
2. Dodaj do niego klasę `show`. 

### DOM + konsola

Teraz musimy to przetłumaczyć na język komputera. Slajd 5 jest elementem dokumentu HTML, więc potrzebujemy jakiegoś sposobu, żeby się do tego dokumentu dostać. Do tego służy nam obiekt `document`. 
Wpiszmy w naszą konsolę `document` i zobaczmy co się stanie:

(...)

Dostaliśmy z powrotem obiekt który zawiera całą strukturę naszego pliku HTML. Przy pomocy tego obiektu możemy dostać się programowo do wszystkich części tego dokumentu, i je zmieniać przy pomocy kodu. Dla ciekawych - tu możesz przeczytać więcej na ten temat: [What is the DOM? - on CSS Tricks](https://css-tricks.com/dom/)

`document` ma wiele różnych metod dzięki którym możemy operować na elementach strony. W tym momencie poznamy jedną z nich:

`querySelector`, która pozwala wybrać jeden lub wiele elementów spełniających dany warunek.

Jeżeli znacie CSS, to używanie tej metody będzie dla was bardzo proste - selektory działają na tej samej zasadzie co w stylach. Jeżeli ktoś nie zna CSS, to developer toolsy mają dla nas ściągawkę **Kliknij prawym > kopiuj > kopiuj selektor**)

Do wywołania metody na obiekcie służy nam kropka. Jak będzie wyglądało szukanie slajdu 5 w dokumencie? Możemy próbować w konsoli, aż nam się uda.

```
document.querySelector('#slide5')
```

### Element + wołanie na nim metod

To co przechwyciliśmy, to jest element drzewa dokumentu, który też ma wiele różnych metod i właściwości. Nikt nie uczy się tego na pamięć, bo od tego mamy Google i ściągawki (MDN!).  

Dzięki ściągawce dowiedzieliśmy się, że do operowania na klasach będą potrzebne nam dwie metody:

- `classList.add` żeby dodać klasę,
- `classList.remove` żeby klasę zabrać.

Spróbujmy teraz złożyć całą naszą wiedzę do kupy:

- szukamy elementu przy użyciu metody `querySelector` a potem wołamy na nim `classList.add`,
- tekst taki jak selektory czy nazwy klas podajemy w pojedynczych cudzysłowach,
- polecenie kończymy średnikiem.

(Budujemy razem )

```
document.querySelector('#slide5').classList.add('show');
```

Działa!
(Zastanawiamy się razem, jaki kod będzie potrzebny żeby pokazać inny slajd, na przykład 4)

Wpadniemy pewnie na coś takiego: 

```
document.querySelector('#slide4').classList.add('show');
```

Nie działa!

Pytamy się dlaczego (mogą nie wiedzieć).
Tłumaczymy, że element piąty dalej ma dodaną klasę `show`, więc musimy ją mu zabrać, żeby pozostałe elementy były widoczne. Jak to teraz możemy zrobić?

```
document.querySelector('#slide5').classList.remove('show');
```

Dobrze, skopiujmy wszystkie trzy fragmenty do naszego pliku `galeria.js`, przydadzą nam się przy programowaniu nawigacji.

## Etap 2 - prosta nawigacja na guziczkach

Znamy już instrukcje JavaScriptu które pokazują i chowają konkretne slajdy. Teraz spróbujmy je przypisać do konkretnych wydarzeń na stronie. Zaczniemy od nawigacji na dole. Każdy guziczek będzie pokazywał konkretny slajd.

Na początek zacznijmy od pokazania slajdu 5 kiedy wciśniemy guziczek 5. Jaki "przepis" potrzebny nam jest w tym przypadku?

(Zbieramy odpowiedzi i naprowadzamy - powinniśmy skończyć z czymś jak poniżej)

1. Znajdź piąty guziczek.
2. Sprawdzaj, kiedy zostanie kliknięty.
3. Kiedy jest kliknięty wykonaj akcję:
	3.1. Schowaj aktualnie widoczny slajd.
	3.2. Pokaż slajd piąty.
	
### Funkcje

Tym razem zaczniemy od końca - ostatnie dwie instrukcje powinny wykonywać się razem, więc musimy znaleźć jakiś sposób żeby je ze sobą powiązać. Do tego będzie potrzebna nam funkcja.

Na podstawowym poziomie funkcja to jest blok kilku instrukcji które powinny wykonywać się razem. W JavaScripcie możemy definiować funkcje na kilka różnych sposobów, najprostszy z nich to:

```
function nazwafunkcji ( ) {
   /* treść funkcji */
}
```

Stwórzmy funkcję która powinna się wywołać po wciśnięciu guziczka 5. Na razie możemy wstawić tam tylko instrukcję która pokazuje slajd piąty, chowaniem poprzedniego slajdu zajmiemy się zaraz.

```
function showSlide5 ( ) {
   document.querySelector('#slide5').classList.add('show');
}
```
	
### Nasłuchiwanie eventów

Teraz możemy wrócić do pierwszego elementu z naszej listy i powiązać tę funkcję z kliknięciem na guziczku piątym. 

Zacznijmy od pierwszego polecenia, czyli wyszukania guziczka piątego. Pamiętacie, jak to się robi?

(Pytamy uczestniczki)

```
document.querySelector('#pin5')
```

Dodajemy do pliku i idziemy dalej. Teraz potrzebujemy jakiejś metody, która pomoże nam reagować na wydarzenia które się z tym elementem dzieją. Przypominam, że mamy ściągawkę na Mozilla Developers:

`addEventListener`. Ta metoda pozwala na dodanie akcji do wydarzeń, które się dzieją na elemencie. Zdarzeniem może być praktycznie wszystko, co użytkownik robi ze stroną (kliknięcie, przesunięcie myszy nad obiektem, wciśnięcie klawisza, zmiana wielkości okna przeglądarki, scroll, itp.), a także  rzeczy, które dzieją się automatycznie, np. załadowanie strony.

Żeby metoda wiedziała, z jakim wydarzeniem ma do czynienia, przekazujemy do niej w nawiasach dwie rzeczy: typ eventu (w naszym przypadku `'click'`) i akcję która ma się wykonać. Do tego wykorzystamy funkcję, którą napisaliśmy poprzednio.

(Próbujemy pisać razem)

```
function showSlide5 ( ) {
   document.querySelector('#slide5').classList.add('show');
}
document.querySelector('#pin5').addEventListener( 'click', showSlide5 );
```

### Chowanie poprzedniego elementu 

Możemy odświeżyć stronę i sprawdzić jak działa. Teraz potrzebujemy dodać do naszej funkcji polecenie które schowa poprzednio pokazywany slajd. 

Kto ma pomysły jak to zrobić?

(Może być dużo pomysłów. Uczestniczki obeznane z programowaniem zaproponują pewnie użycie zmiennej. To jest bardzo dobry pomysł i można ewentualnie pójść tą drogą, ale znacznie zwiększa czas wymagany do napisania kawałka który działa. Ja bym zaryzykowała zapewnienie tych które wpadną na ten pomysł, że do zmiennych dotrzemy na kolejnym etapie, a na razie pokażemy prostszy sposób który szybciej zabierze nas do celu).

Jeżeli nikt samodzielnie na to nie wpadnie (osoby obeznane z selektorami CSS mogą), możemy podpowiedzieć, że `querySelector` ma różne możliwości przeszukiwania, w tym również po klasie. Dzięki temu możemy szukać elementu, który ma klasę `show`, po to żeby go schować. Nasz algorytm będzie przedstawiał się następująco:

1. Znajdź piąty guziczek.
2. Sprawdzaj, kiedy zostanie kliknięty.
3. Kiedy jest kliknięty wykonaj akcję:
	3.1. Znajdź slajd, który aktualnie ma przypisaną klasę `show`,
	3.2. Zabierz mu tę klasę,
	3.3. Znajdź slajd piąty,
	3.3. Dodaj do niego klasę `show`.

Korzystając z wiedzy, którą mamy do tej pory, uczestniczki nie powinny mieć problemu żeby dodać brakujące fragmenty kodu. Całość przedstawi nam się tak:

```
function showSlide5 ( ) {
   document.querySelector('.show').classList.remove('show');
   document.querySelector('#slide5').classList.add('show');
}
document.querySelector('#pin5').addEventListener( 'click', showSlide5 );
```

(Patrzymy w developer toolsach, że faktycznie działa.)

Teraz możemy na tej podstawie stworzyć podobny kod dla pozostałych slajdów i przycisków. Najprostszym sposobem będzie metoda kopiuj-wklej.

(Instruktorzy z trudem powstrzymują swoje instynkty optymalizatorskie. Na kolejnym etapie to uporządkujemy, kiedy będziemy wiedzieć jak i po co to zrobić.)

## Etap 3 - Nawigowanie do poprzedniego i następnego elementu

Następnym krokiem będzie zaprogramowanie strzałek, które powinny nam przełączać pomiędzy obrazkami. Zastanówmy się, jak będzie wyglądał przepis na przełączanie do następnego slajdu przy użyciu prawej strzałki.

(Burza mózgów, staramy się zbytnio nie podpowiadać. Pierwsza wersja może wyglądać mniej więcej tak:)

1. Znajdź prawą strzałkę,
2. Sprawdzaj, kiedy zostanie kliknięta.
3. Kiedy zostanie kliknięta wykonaj zdarzenie:
	3.1. Znajdź slajd, który aktualnie ma przypisaną klasę `show`,
	3.2. Zabierz mu tę klasę,
	3.3. Znajdź element następny w kolejności,
	3.4. Dodaj mu klasę `show`.
	
Na początek możemy skorzystać z tego co już wiemy, stworzyć szkielet funkcji, dodać w nim zdejmowanie klasy `show` z aktualnie pokazywanego elementu bo to już umiemy zrobić, i podpiąć tę funkcję do zdarzenia. (polecam metodę kopiuj-wklej). 

Będzie to wyglądać mniej więcej tak:

```
function showNextSlide ( ) {
   document.querySelector('.show').classList.remove('show');
   // tutaj będzie reszta naszego kodu
}
document.querySelector('#next').addEventListener( 'click', showNextSlide );
```

(krótka dygresja o komentarzach - co to jest, po co ^. Możemy odświeżyć stronę i zobaczyć jak to działa na razie)
	
Najtrudniejszym etapem tutaj jest punkt 3.3. Pytamy uczestniczek, jakie mają pomysły żeby to zaimplementować. (Nikt chyba raczej nie wpadnie na sposób jak można to zrobić bez zmiennych, więc mamy dobry moment, żeby te zmienne wprowadzić. )

### Zmienne 

Najprawdopodobniej uczestniczki dojdą do wniosku, że trzeba gdzieś zapamiętać ostatnio wyświetlany slajd i na tej podstawie obliczyć który będzie następny w kolejności. W tym celu potrzebne nam będą zmienne.

Zmienna jest to schowek w którym możemy zapisywać informacje i odczytywać je później w innym miejscu. W wielu językach programowania zmienne wymagają bardzo konkretnego określenia jaki typ danych będzie się w nich znajdował. JavaScript nie ma takich ograniczeń, każda zmienna może być tekstem, liczbą, elementem drzewa DOM, złożonym obiektem, a nawet funkcją (co ma swoje dobre i złe strony).

Żeby stworzyć zmienną w JavaScripcie używamy słowa kluczowego `var`, na przykład:

```
   var courseTitle = 'Galeria JavaScript'; // zmienna tekstowa
```

Której możemy potem używać dalej w kodzie po prostu podając jej nazwę:

```
   var titleLength = courseTitle.length; // zmienna liczbowa - długość tekstu
```

Jak już wspomnieliśmy, w zmiennych JavaScript możemy przechowywać wszystko, więc zastanówmy się w jakiej formie będzie najłatwiej nam zapamiętać obecnie przechowywany element, żeby na jego podstawie obliczyć kolejny.

(Burza mózgów)

Najłatwiej będzie zapamiętywać numer klikniętego elementu, żeby móc potem przełączać obrazki przez dodawanie i odejmowanie. Spróbujmy doprecyzować nasz algorytm i zastanowić się jak to dokładnie powinno działać:

1. Znajdź prawą strzałkę,
2. Sprawdzaj, kiedy zostanie kliknięta. 
3. Kiedy zostanie kliknięta wykonaj zdarzenie: 
	3.1. Znajdź slajd, który aktualnie ma przypisaną klasę `show`,
	3.2. Zabierz mu tę klasę, // dotąd bez zmian
	3.3. Odczytaj numer aktualnego elementu zapisany w zmiennej,
	3.4. Dodaj do niego `1`,
	3.5. Znajdź element o nowym numerze,
	3.6. Dodaj mu klasę `show`.
	3.7. Zapisz nowy numer jako aktualny element.
	
(Dużo nowych informacji naraz, dajemy czas na pytania i upewniamy się że wszyscy zrozumieli)

Przechodzimy do implementacji - skąd odczytać ten numer? Musimy stworzyć go wcześniej poza funkcją, najlepiej na początku pliku.
Przy załadowaniu strony pojawia się pierwszy slajd, więc zapiszmy to od razu w zmiennej:

```
var currentNumber = 1;
```

(Staramy się nie odlatywać za bardzo w dygresje na temat scope, hoistingu, undefined i tym podobnych - na tym etapie TMI. Waham się czy mówić, że jeżeli nie nadamy tej zmiennej wartości na początku, to JavaScript nie rzuci nam od razu komunikatem o błędzie, tylko mogą wyniknąć problemy w zupełnie niespodziewanych miejscach. I tak nie obejmiemy całego JavaScriptu w jeden dzień.) 

### Proste operacje arytmetyczne i na znakach

Wracamy do naszej funkcji do punktów 3.3. i 3.4. Chcemy pobrać aktualną wartość zmiennej `currentNumber`, dodać do niej 1 i zapisać jako nowy numer. W tym celu możemy sobie stworzyć wewnątrz funkcji dodatkową pomocniczą zmienną:

```
var newNumber = currentNumber + 1;
```

(Jak pierwszy raz uczyłam się programowania, to zapis `x = x + 1` był dla mnie kompletnie nieintuicyjny. Zmienna pomocnicza doda nam teraz trochę roboty, ale dzięki niej łatwiej nam to będzie ogarnąć i przejść potem płynnie do parametrów wywołania funkcji. )

Jak znaleźć nowy element? Wszystkie nasze slajdy mają identyfikatory `#slide` + kolejny numer 1,2,3, itd. W JavaScripcie możemy skleić tekst z liczbą używając tego samego znaku +, na przykład:

```
'#slide' + 1
```

(Jeżeli pojawi się pytanie: skąd JavaScript wie czy dodaje do siebie dwie liczby, czy liczbę i tekst? Zgaduje na podstawie tego jakie dane dostaje na wejściu, i w większości przypadków idzie mu to bardzo dobrze).

Czyli w tym przypadku nasz selektor będzie miał postać:

```
'#slide' + newNumber
```

Patrzymy na kod, który napisaliśmy na poprzednich etapach i na tej podstawie próbujemy ogarnąć punkty 3.5 - 3.7:

```
var currentNumber = 1;

function showNextSlide ( ) {
    document.querySelector('.show').classList.remove('show');
	var newNumber = currentNumber + 1;
    document.querySelector('#slide' + newNumber).classList.add('show');	
	currentNumber = newNumber;
}
document.querySelector('#next').addEventListener( 'click', showNextSlide );
```

(Testujemy)

### Instrukcje warunkowe

Co się dzieje? Działa, ale po dojechaniu do końca slajdów przełącza nam na czarny ekran.

(Dlaczego?)

Mamy tylko 5 slajdów, więc po dojechaniu do końca skrypt próbuje załadować nam slajd 6 który nie istnieje.

Co możemy z tym zrobić?

(Po dodawaniu sprawdzić jaki mamy obecny numer - jeżeli jest większy niż 5, to trzeba zmienić go z powrotem na 1).

Poprawiamy algorytm naszej funkcji:

	3.1. Znajdź slajd, który aktualnie ma przypisaną klasę `show`,
	3.2. Zabierz mu tę klasę, 
	3.3. Odczytaj numer aktualnego elementu zapisany w zmiennej,
	3.4. Dodaj do niego `1`,
	3.5. Jeżeli nowy numer jest większy od 5, to zmień go na 1.
	3.6. Znajdź element o nowym numerze,
	3.7. Dodaj mu klasę `show`.
	3.8. Zapisz nowy numer jako aktualny element.
	
Do tego celu posłużą nam **instrukcje warunkowe**. Przydają się nam one do tego, żeby wykonywać fragmenty kodu tylko kiedy jest spełniony jakiś warunek. Podstawowa składnia wygląda tak:

```
if ( warunek ) {
    wykonaj kod, który jest tutaj.
}
```

Spróbujmy to zastosować w naszym przypadku:

```
if ( newNumber > 5 ) {
    newNumber = 1;
}
```

W którym miejscu w funkcji należy to dodać? (Zgodnie z algorytmem):

```
function showNextSlide ( ) {
    document.querySelector('.show').classList.remove('show');
	var newNumber = currentNumber + 1;
	if( newNumber > 5 ) {
		newNumber = 1;
	}
    document.querySelector( '#slide' + newNumber ).classList.add('show');
	currentNumber = newNumber;
}
document.querySelector('#next').addEventListener( 'click', showNextSlide );
```

Testujemy. Działa? Świetnie, na tej podstawie możemy stworzyć teraz analogiczną funkcję dla prawej strzałki:

(tutaj uczestniczki już powinny poradzić sobie same, możemy je lekko nakierować)

```
function showPreviousSlide ( ) {
    document.querySelector('.show').classList.remove('show');
	var newNumber = currentNumber - 1;
	if( newNumber < 1 ) {
		newNumber = 5;
	}
    document.querySelector( '#slide' + newNumber ).classList.add('show');
	currentNumber = newNumber;
}
document.querySelector('#prev').addEventListener( 'click', showPreviousSlide );
```

## Etap 4 - łączenie dwóch nawigacji razem

- Intensywnie testujemy połączenie nawigacji strzałkami z nawigacją przyciskami
- Próbujemy zrozumieć jak to działa i dlaczego nie do końca dobrze (funkcje pod przyciskami nie aktualizują currentNumber);
- Hurra! Właśnie mamy nasz pierwszy side effect :-) Takie rzeczy często się dzieją przy dodawaniu nowych funkcjonalności do starej aplikacji, dlatego przydają się testy i upraszczanie kodu jak to tylko możliwe.
- Krótkie wyjaśnienie dlaczego lepiej nie rozbudowywać każdej z funkcji showSlide1... showSlide5, tylko stworzyć jedną uniwersalną, która obejmie wszystkie aspekty pokazywania slajdu o podanym numerze.

### Parametry funkcji

- tworzymy uniwersalną funkcję która pokaże nam slajd o podanym numerze
- krótki wstęp teoretyczny
- kod:

```
function showSlide ( newNumber ) {
    document.querySelector( '.show' ).classList.remove( 'show' );
    document.querySelector( '#slide' + newNumber ).classList.add( 'show' );
	currentNumber = newNumber;	
}
```

- z poprzednio stworzonych funkcji usuwamy wspólną część kodu i wołamy zamiast tego showSlide z odpowiednim numerem. Przykład dla guziczka 1:

```
function showSlide1 ( ) {
   showSlide( 1 );
}
document.querySelector( '#pin1' ).addEventListener( 'click', showSlide1 );
```

I dla strzałki:

```
function showNextSlide ( ) {
	var newNumber = currentNumber + 1;
	if( newNumber > 5 ) {
		newNumber = 1;
	}
    showSlide( newNumber );
}
document.querySelector( '#next' ).addEventListener( 'click', showNextSlide );
```

### Debugowanie

- Zauważamy, że fajnie by było, gdyby guziczki na dole pokazywały nam na którym slajdzie aktualnie jesteśmy. Możemy do tego wykorzystać klasę `selected`.
- Prosimy grupę, żeby napisała analogiczną funkcję `selectPin` która przyjmuje numer pinu, usuwa klasę selected z poprzedniego i nadaje ją temu o podanym numerze.

```
function selectPin ( newNumber ) {
    document.querySelector( '.selected' ).classList.remove( 'selected' );
    document.querySelector( '#pin' + newNumber ).classList.add( 'show' );
	// currentNumber = newNumber;	
}
```

- Tłumaczymy dlaczego nie zmieniamy currentNumber drugi raz,
- Zastanawiamy się gdzie najlepiej tą funkcję wywołać. Możemy poddać pod dyskusję, czy lepiej ją wołać w handlerach eventów czy w funkcji `showSlide`. Ustalamy, że chcemy podświetlać pin za każdym razem kiedy przełączamy slajdy, więc najlepiej dodać to w `showSlide`:


```
function showSlide ( newNumber ) {
    document.querySelector( '.show' ).classList.remove( 'show' );
    document.querySelector( '#slide' + newNumber ).classList.add( 'show' );
	currentNumber = newNumber;	
	selectPin( newNumber);
}
```

- Testujemy - piny się nie podświetlają, błędy w konsoli. Próbujemy zrozumieć co się dzieje. 
- Na początku funkcja próbuje usunąć klasę `selected` z elementu który ma tę klasę. Niestety, na starcie żaden element nie ma takiej klasy i stąd się bierze błąd.
- Jak to rozwiązać? Upewnić się, że przy załadowaniu strony mamy prawidłowo pokazany pierwszy element i podświetlony pierwszy pin:

```
var currentNumber = 1;
document.querySelector( '#slide' + currentNumber ).classList.add( 'show' );	
document.querySelector( '#pin' + currentNumber ).classList.add( 'selected' );
```

Testujemy jeszcze raz - działa! :)

## Etap 5 - Autoplay // przyklad w step5.js, opis do zrobienia

- Algorytm na tablicy
- zapamiętanie stanu play/pauza
- guzik do play / pausy, który zmienia swój wygląd w zależności od stanu
- wprowadzenie setInterval, implementacja
- clearInterval po wyłączeniu

## Etap 6 - Dodawanie nowych obrazków // TODO

Wydaje mi się, że 5 kroków powyżej wystarczy jak na 8h zajęć, chyba że trafimy na doświadczone zawodniczki. W takim przypadku możemy pokusić się o usprawnienie galerii żeby była w stanie obsłużyć dowolną liczbę obrazków, a niekoniecznie 5. 

Wprowadzamy pojęcia:

- tablice
- pętla for do iterowania po elementach tablicy
- dla odważnych - tworzenie elementów DOM i dopinanie ich do już istniejących

## Etap 7 - jakby jeszcze było mało

Nie sądzę, żeby ktokolwiek tutaj doszedł, ale kto wie...? Zaczytujemy całą listę obrazków i ich opisów z JSONa na serwerze, na tej podstawie budujemy całego HTMLa i podpinamy wszystkie elementy. Więcej na pewno nie potrzeba.


## Referencje

- [obiekt `document` i jego właściwości](https://developer.mozilla.org/en-US/docs/Web/API/Document),
- [metody i właściwości elementów drzewa DOM](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- ... todo