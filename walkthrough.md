## Wstęp

Efekt końcowy do którego dążymy (demo). Będziemy budować stronę krok po kroku, więc nie ma problemu jeżeli nie uda nam się przerobić wszystkiego. 

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

Podstawowa struktura HTML i CSS już jest gotowa - nasz kurs skupia się na JavaScripcie, więc zaczniemy od momentu w którym większość HTML i CSS jest już napisana. Co widzimy na stronie?
(1 obrazek z podpisem) Klikając prawym przyciskiem myszki **> Zbadaj element** możemy zobaczyć, co kryje się pod spodem. W strukturze HTML widzimy że obrazek zawarty jest wewnątrz elementu `figure` - sam obrazek ładowany jest przy pomocy `img`, a do stworzenia podpisu służy `figcaption`. Widzimy też, że takich elementów jest więcej. Klikając na dowolny z nich prawym przyciskiem **> Ukryj element** możemy sprawdzić, co kryje się pod spodem. 

## Przełączanie obrazków 

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

W ramach eksperymentu możemy sprawdzić co się stanie, kiedy zabierzemy klasę `slide-show` z elementu nr 3 i dodamy ją do dowolnego innego elementu. W tym celu otwórzmy plik `index.html` i znajdźmy odpowiednie obrazki na liście:

(...)

Widzimy, że przesunięcie klasy z elementu 3 na element 4 sprawiło, że element 4 pokazał nam się na wierzchu. Naszym zadaniem będzie znalezienie sposobu na to, żeby automatycznie przełączać tą klasę pomiędzy obrazkami, tak żeby automatycznie zmienić który obrazek jest na górze, przy użyciu kodu.

## Wstęp do JavaScriptu

Zanim przejdziemy do bardziej ogólnych rozwiązań, spróbujmy napisać kod który przełączy piąty obrazek na wierzch. 

Skąd komputer wie, co ma robić?

Algorytm - przepis, instrukcje krok po kroku, zapisany w zrozumiałym dla komputera języku.

Jak po polsku brzmiałby kod potrzebny do pokazania slajdu 5?

1. Znajdź slajd 5.
2. Dodaj do niego klasę `show`. 

```
document.querySelector('#slide-5').classList.add('slide-show');
```

