## Bezpieczeństwo i etyka używania narzędzi AI w kodowaniu



Zabronione bez zgody pracodawcy

* kod źródłowy może być przekazany na zewnątrz
* ryzyko wycieku innych poufnych danych
* kwestia regulacji praw autorskich



W odpowiedziach mogą pojawiać się błędy. Trzeba zawsze je sprawdzać



Na pytanie: 

`Jak dodać element na początek tablicy w JavaScript?`<!-- .element: class="prompt" style="font-size: 0.7em; white-space: pre" -->

Chat może odpowiedzieć błędnie: 

```
array[array.length] = 'nowy element';
```

(dodaje element na koniec, nie na początek)
<!-- .element style="font-size: 0.8em" -->

Poprawna odpowiedź:

```
array.unshift('nowy element');
```



Dlaczego? Do danych, na których uczą się modele należą też repozytoria osób mało biegłych w programowaniu. Czasami model może ich błędy przeoczyć i zawrzeć w odpowiedzi.




Wniosek: podpowiedzi chata bardziej powinny służyć do nauki i inspiracji niż zastępować myślenie.

![](img/ostrzezenie.png)<!-- .element: style="width: 35%" -->