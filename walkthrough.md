## Wstęp

Efekt końcowy do którego dążymy (demo). Będziemy budować stronę krok po kroku, więc nie ma problemu jeżeli nie uda nam się przerobić wszystkiego. 

Pytania kontrolne:

Kto ma doświadczenie z HTML i CSS?

Kto programował już wcześniej w jakichś innych językach? Jakich?

Kto nie zna w ogóle angielskiego?

## Co warto przeczytać?

Do nauki od zera:
https://html5hive.org/free-ebook-a-guide-to-html5-and-css3/

CSS dla ciekawskich: 
http://adamschwartz.co/magic-of-css/

Referencje przy programowaniu:
https://developer.mozilla.org/

## Środowisko
Edytor tekstu, przeglądarka, dev toolsy. Skąd pobrać źródła do projektu?

## Stan początkowy

Na stronę internetową składają się trzy warstwy: struktura dokumentu (jakie elementy zawiera? nagłówki, akapity, sekcje, obrazki, tekst, itp) - za to wszystko odpowiedzialny jest HTML. Dalej mamy warstwę prezentacji - jak wyglądają poszczególne elementy? Gdzie są umieszczone na stronie? - na te pytania odpowiada CSS. Ostatnią warstwą jest interakcja z użytkownikiem - co się dzieje na stronie? jakie akcje można wykonać? Do tego potrzebny nam JavaScript.

### Podgląd elementów strony w Dev Toolsach

Podstawowa struktura HTML i CSS już jest gotowa - nasz kurs skupia się na JavaScripcie, więc zaczniemy od momentu w którym większość HTML i CSS jest już napisana. Co widzimy na stronie?
(Obrazek, podpis, nawigację, itp). W prawie każdej współczesnej przeglądarce wbudowane są potężne narzędzia, które pomogą nam zrozumieć z czego składa się strona i w jaki sposób ona działa. 

Na dowolnym elemencie możemy kliknąć **prawy przycisk > Zbadaj element** i zobaczyć, co kryje się pod spodem (klikamy na obrazek). W strukturze HTML widzimy że obrazek zawarty jest wewnątrz elementu `figure` - sam obrazek ładowany jest przy pomocy `img`, a do stworzenia podpisu służy `figcaption`. Widzimy też, że takich elementów jest więcej. Po prawej mamy panel który wypisuje wszystkie style które wpływają na wygląd aktualnie podświetlonego elementu i skąd one pochodzą - to przydaje się bardzo przy pisaniu kodu CSS. Na dole za to mamy konsolę, w której możemy bezpośrednio wpisywać kod JavaScript i patrzeć jaki będzie miał efekt na stronie. (Chwila na rozejrzenie się po strukturze drzewa DOM i dostępnych narzędziach).

## Przełączanie obrazków 

(potencjalnie TMI - skrócę to jak będę miała bardziej całościowy pogląd)
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

## Wstęp do programowania

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

`document` ma wiele różnych metod dzięki którym możemy operować na elementach strony. ([Pełna lista na potem](https://developer.mozilla.org/en-US/docs/Web/API/Document)) W tym momencie poznamy jedną z nich:

`querySelector`, która pozwala wybrać jeden lub wiele elementów spełniających dany warunek.

Jeżeli znacie CSS, to używanie tej metody będzie dla was bardzo proste - selektory działają na tej samej zasadzie co w stylach. Jeżeli ktoś nie zna CSS, to developer toolsy mają dla nas ściągawkę **Kliknij prawym > kopiuj > kopiuj selektor**)

Do wywołania metody na obiekcie służy nam kropka. Jak będzie wyglądało szukanie slajdu 5 w dokumencie? Możemy próbować w konsoli, aż nam się uda.

```
document.querySelector('#slide5')
```

### Element + wołanie na nim metod

To co przechwyciliśmy, to jest element drzewa dokumentu, który też ma wiele różnych metod i właściwości. Nikt nie uczy się tego na pamięć, bo od tego mamy Google i ściągawki takie jak [ta](https://developer.mozilla.org/en-US/docs/Web/API/Element).  

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

## Krok 2 - prosta nawigacja

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

`addEventListener`. Przekazujemy do niej w nawiasach dwie rzeczy typ eventu (w naszym przypadku `'click'`) i akcję która ma się wykonać. Do tego wykorzystamy funkcję, którą napisaliśmy poprzednio.

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

Jeżeli nikt samodzielnie na to nie wpadnie (osoby obeznane z selektorami CSS mogą), możemy podpowiedzieć, że `querySelector` ma różne możliwości przeszukiwania, w tym również po klasie. Dzięki temu możemy zmodyfikować nasz algorytm, żeby przedstawiał się następująco:

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
### Zmienne 

Najprawdopodobniej uczestniczki dojdą do wniosku, że trzeba gdzieś zapamiętać ostatnio wyświetlany slajd. Jeżeli chcemy tak zrobić to w tym celu potrzebne nam będą zmienne.

Zmienna jest to schowek w którym możemy zapisywać informacje i odczytywać je później w innym miejscu. W wielu językach programowania zmienne wymagają bardzo konkretnego sprecyzowania jaki typ danych konkretnie będzie się w nich znajdował. JavaScript nie ma takich ograniczeń, każda zmienna może być tekstem, liczbą, elementem drzewa DOM, złożonym obiektem, a nawet funkcją (co ma swoje dobre i złe strony).

Żeby stworzyć zmienną w JavaScripcie używamy słowa kluczowego `var`, na przykład:

```
   var courseTitle = 'Galeria JavaScript';
```

Której możemy potem używać dalej w kodzie po prostu podając jej nazwę:

```
   var titleLength = courseTitle.length;
```

Jak już wspomnieliśmy, w zmiennych JavaScript możemy przechowywać wszystko, włącznie z elementami DOM, więc nic nie stoi na przeszkodzie, żeby zapisywać tam element który jest aktualnie na wierzchu.