## Jak pisać prompty?



To, jak wygląda nasze pytanie, ma duży wpływ na trafność odpowiedzi. 

Spróbujmy napisać różne wersje zadanego wcześniej promptu:



„Napisz program, który dodaje dwie liczby”



„Napisz program w JavaScript, który dodaje dwie liczby”



„Napisz funkcję w JavaScript, która dodaje dwie liczby”



„Jako senior programistka napisz funkcję w JavaScript, która dodaje dwie liczby”



Istnieją różne, nazwane techniki, które możemy stosować przy układaniu promptów. Ta dziedzina wiedzy to Prompt Engineering. 




Niektóre z tych technik, które mogą się przydać: 



* Promptowanie bez próbek (Zero-shot Prompting)

**Prompt:** "Napisz funkcję JavaScript, która sprawdza, czy dany ciąg znaków jest palindromem.”

**Wyjaśnienie:** Ten prompt bezpośrednio prosi AI o wygenerowanie kodu bez dostarczania jakichkolwiek przykładów czy dodatkowego kontekstu, opierając się wyłącznie na wstępnie przetrenowanej wiedzy modelu.



* Promptowanie oparte na łańcuchu myślenia (Chain-of-thought Prompting)

**Prompt:** "Aby określić, czy ciąg znaków jest palindromem w JavaScript, najpierw pomyśl o odwróceniu ciągu znaków, a następnie porównaj go z oryginalnym ciągiem. Jeśli są takie same, ciąg znaków jest palindromem. Napisz tę logikę jako funkcję.”

**Wyjaśnienie:** Ten prompt kieruje AI przez logiczny proces myślenia, instruując, aby najpierw rozważyło odwrócenie ciągu znaków, a następnie wykonało porównanie, efektywnie "myśląc na głos”.



Najlepiej jest zawrzeć w pytaniu jak najwięcej informacji i oczekiwań, jeśli mamy już jakiś pomysł na rozwiązanie. Jeśli wiemy bardzo mało, pozwólmy odpowiedzieć modelowi a potem zadawajmy dodatkowe pytania, żeby stopniowo dostosowywać odpowiedź. 

Chat pamięta całą rozmowę otwartą w jednym oknie więc możemy odnosić się do jej kontekstu!
