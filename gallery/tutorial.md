# Tworzenie galerii obrazków przy użyciu JavaScriptu

Strona internetowa z technicznego punktu widzenia składa się z trzech elementów:

 * struktury dokumentu,
 * definicji stylu i wyglądu,
 * interakcji.

Za każdą z tych rzeczy odpowiada inna technologia. Strukturę dokumentu definiujemy w języku HTML. Style i wygląd ogólny strony tworzymy w CSS. Natomiast za interakcje odpowiada język JavaScript.

## Struktura i wygląd dokumentu

Struktura dokumentu jest zdefiniowana przy pomocy języka HTML. W naszym przykładzie nie jest ona szczególnie skomplikowana - w gruncie rzeczy mamy tutaj dwie sekcje: &lt;fieldset/&gt; zawierający elementy sterujące galerią oraz &lt;div/&gt; z obrazkami. W arkuszach styli CSS dzieje się już nieco więcej - najważniejsze jest, że szerokość div'a z obrazkami jest ustawiona na sztywno na 400 pikseli, że zawijanie linii jest tam wyłączone oraz włączone jest ukrywanie treści "wylewającej" się z elementu.

### DOM

Struktura dokumentu zdefiniowana w HTML jest udostępniana przez przeglądarkę w postaci DOM - Document Object Model. Dzięki temu JavaScript ma dostęp do struktury dokumentu i może ją dowolnie modyfikować.

#### Ćwiczenia

* Wyświelić w konsoli zawartość wybranego elementu HTML
* Zmienić zawartość wybranego elementu HTML
* Dodać dziecko
* Skasować wybrany element HTML

### Załączanie javascriptu do kodu HTML

Można to zrobić na kilka sposobów. Najprostszy polega na tym, że kod JS wstawiamy bezpośrednio w źródle strony w ramach taga `<script></script>`. Ma to dwie zalety (łatwo zrozumieć jaki kod w danym miejscu jest dostępny, przeglądarka nie musi wykonać dodatkowego połączenia z serwerem). 

Alternatywnym (i polecanym przez nas) sposobem jest trzymanie kodu JS w osobnym pliku i załadowanie go przy pomocy taga `<script src=""></script>`. Ułatwia to pracę, ponieważ:

* możemy użyc tego samego kodu na wielu stronach
* mamy rozdzielone konteksty dokumentu i programu
* przeglądarki trzymają kod w cache

Wpływ ładowania JS na ładowanie się całej strony: dlaczego warto umieszczać ładowanie skryptów na końcu strony.

Temat zaawansowany: atrybut `async`

Trzecim sposobem jest umieszczanie kodu JS w atrybutach definujących reakcje elementów na zdarzenia (np. `<body onload="(function() {console.log('Document loaded')})();">`. Takiego sposobu generalnie nie zalecamy. Łatwo się zgubić w gąszczu nawiasów, cudzysłowów pojedynczych i podwójnych, wcięć itd. Należy go używać conajwyżej do podpięcia funkcji pod handlery (np. `<body onload="start();">`)

#### Ćwiczenia

Załączyć kawałek kodu JS bezpośrednio w dokumencie i z osobnego pliku.

## Kod JavaScript

Kod JavaScript odpowiada za wszelkie interakcje. Jeśli chcemy, żeby po kliknięciu guzika "następny" wyświetlał się kolejny obrazek, musimy to sami oprogramować. 

Zadania, które należy tutaj wykonać, to:
 1. Zastanowić się, co stanowi wejście do naszego programu
 1. Zastanowić się, co ma być efektem działania (wyjściem) programu
 1. Wykombinować sposób przesuwania zawartości diva z obrazkami.
 1. Znaleźć guziczki i diva.
 1. Pod guziczki podpiąć akcję przesuwania zawartości diva.

### Zmienne

Zaczynamy od definiowania zmiennych.
Zmiennych używamy do przechowywania danych:

 * liczbowych
 * tekstowych
 * logicznych
 * tablicowych
 * a także funkcji

### Funkcje

Funkcja to tak naprawdę mały program:

* Ma wejście - argumenty, które przekazujemy w nawiasach
* Ma swoją logikę - kod pomiędzy nawiasami klamrowymi (w tzw. ciele)
* Ma wyjście - wartość przy słowie `return` (co jeśli nie ma returna?)

W JavaSkrpycie funkcja może też korzystać ze zmiennych znajdujących się poza jej ciałem, o ile te zmienne są dostępne w miejscu, w którym znajduje się definicja tej funkcji. Jeżeli funkcja wpływa w jakiś sposób na cokolwiek innego niż jej wejście i wyjście (na przykład powoduje przewinięcie się obrazka w galerii lub zmienia wartość zmiennej zdefiniowanej poza jej ciałem) to mówimy, że taka funkcja ma efekt uboczny. Uboczny nie znaczy w tym kontekście "nieporządany"

```
var a = 10;

var logVariables = function (b) {
  var c = 30;
  console.log(a + b + c);
}

logVariables(20);
```

Temat zaawansowany: co się stanie gdy zawołamy `logVariables("20");`? Dlaczego?

### Instrukcja warunkowa - if

Prędzej czy później w naszym programie pojawia się potrzeba, żeby dany kawałek kodu (albo funkcja) wykonał się wtedy i tylko wtedy gdy spełniony jest określony warunek. Na przykład chcemy, żeby obrazki w galerii przewijały się w lewo tylko wtedy, gdy po lewej stronie są jeszcze jakieś obrazki. 

Do warunkowego wykonywania kodu służy instrukcja `if`

```
var mniejszeWieksze = function (a) {
  if (a < 10) {
    console.log("a jest mniejsze od 10");
  }

  if (a > 10) {
    console.log("a jest większe od 10");
  }

  if (a === 10) { // dlaczego nie `=`? dlaczego nie `==`?
    console.log("a jest równe 10");
  }
}
```

Inne operatory porównania:
`>=`, `<=`, `!=`, `==`

Temat zaawansowany: `else if`, `else`
Temat zaawansowany: operatory logiczne `&&`, `||`



