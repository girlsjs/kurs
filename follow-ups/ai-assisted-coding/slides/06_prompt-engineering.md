## Jak pisać prompty?



To, jak wygląda nasze pytanie, ma duży wpływ na trafność odpowiedzi. 

Spróbujmy napisać różne wersje zadanego wcześniej promptu:



`Napisz program, który dodaje dwie liczby`<!-- .element: class="prompt" -->



`Napisz program w JavaScript, który dodaje dwie liczby`<!-- .element: class="prompt" -->



`Napisz funkcję w JavaScript, która dodaje dwie liczby`<!-- .element: class="prompt" -->



`Jako senior programistka napisz funkcję w JavaScript, która dodaje dwie liczby`<!-- .element: class="prompt" -->



Istnieją różne, nazwane techniki, które możemy stosować przy układaniu promptów. Ta dziedzina wiedzy to Prompt Engineering. 




Niektóre z tych technik, które mogą się przydać: 



Promptowanie z kilkoma przykładami (Few-shot Prompting)

![](img/few-shot.png)<!-- .element: style="width: 35%" -->




<!-- .slide: style="font-size: 0.9em" -->
**Prompt:** \
`Aby zmienić tekst elementu o id "demo" użyj takiego kodu: document.querySelector('#demo').innerHTML = 'Witaj, świecie!' Aby zmienić tekst w pierwszym paragrafie użyj takiego kodu: document.querySelector('p').textContent = 'Zmieniony tekst'; Jak mogę użyć JavaScript do zmiany tekstu w elemencie HTML o klasie "moja-klasa" na "Nowy tekst"? `<!-- .element: class="prompt" style="font-size: 0.8em"-->




**Wyjaśnienie:** Optymalizuje zdolność modelu do interpretacji i odpowiedzi na pytania w specyficznym kontekście bez konieczności dodatkowego trenowania na dużych zbiorach danych.




Promptowanie oparte na łańcuchu myślenia (Chain-of-thought Prompting)

![](img/chain-of-thought.png)<!-- .element: style="width: 35%" -->




**Prompt:** `Aby określić, czy ciąg znaków jest palindromem w JavaScript, najpierw pomyśl o odwróceniu ciągu znaków, a następnie porównaj go z oryginalnym ciągiem. Jeśli są takie same, ciąg znaków jest palindromem. Napisz tę logikę jako funkcję.` <!-- .element: class="prompt" -->



**Wyjaśnienie:** Ten prompt kieruje AI przez logiczny proces myślenia, instruując, aby najpierw rozważyło odwrócenie ciągu znaków, a następnie wykonało porównanie, efektywnie "myśląc na głos".



Najlepiej jest zawrzeć w pytaniu jak najwięcej informacji i oczekiwań, jeśli mamy już jakiś pomysł na rozwiązanie. Jeśli wiemy bardzo mało, pozwólmy odpowiedzieć modelowi a potem zadawajmy dodatkowe pytania, żeby stopniowo dostosowywać odpowiedź. 

Chat pamięta całą rozmowę otwartą w jednym oknie więc możemy odnosić się do jej kontekstu!

note: czasem niestety ten kontekst bywa ograniczeniem, tj. ChatGPT kręci się wokół tego samego rodzaju rozwiązań nawet jak prosimy go, by spróbował inaczej. Jak widzimy, że biedak się zablokował otwieramy nowe okno i zadajemy pytanie precyzyjniej, na bazie zebranych informacji z pierwszego czatu. Zazwyczaj to pomaga :)
