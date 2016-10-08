# Tworzenie galerii obrazków przy użyciu JavaScriptu

Strona internetowa z technicznego punktu widzenia składa się z trzech elementów:

 * struktury dokumentu,
 * definicji stylu i wyglądu,
 * interakcji.

Za każdą z tych rzeczy odpowiada inna technologia. Strukturę dokumentu definiujemy w języku HTML. Style i wygląd ogólny strony tworzymy w CSS. Natomiast za interakcje odpowiada język JavaScript.

## Struktura i wygląd dokumentu

Struktura dokumentu jest zdefiniowana przy pomocy języka HTML. W naszym przykładzie nie jest ona szczególnie skomplikowana - w gruncie rzeczy mamy tutaj dwie sekcje: &lt;fieldset/&gt; zawierający elementy sterujące galerią oraz &lt;div/&gt; z obrazkami. W arkuszach styli CSS dzieje się już nieco więcej - najważniejsze jest, że szerokość div'a z obrazkami jest ustawiona na sztywno na 400 pikseli, że zawijanie linii jest tam wyłączone oraz włączone jest ukrywanie treści "wylewającej" się z elementu.

## Kod JavaScript

Kod JavaScript odpowiada za wszelkie interakcje. Jeśli chcemy, żeby po kliknięciu guzika "następny" wyświetlał się kolejny obrazek, musimy to sami oprogramować. 

Zadania, które należy tutaj wykonać, to:
 1. Wykombinować sposób przesuwania zawartości diva z obrazkami.
 1. Znaleźć guziczki i diva.
 1. Pod guziczki podpiąć akcję przesuwania zawartości diva.

Zaczynamy od definiowania zmiennych.
Zmiennych używamy do przechowywania danych:

 * liczbowych
 * tekstowych
 * logicznych
 * tablicowych

