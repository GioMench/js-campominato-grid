![Alt text]("https://github.com/GioMench/js-campominato-grid/blob/main/easy.png")

# Consegna milestone 1
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    - input button in html 
    - eventListener 
    - insertAdjacentHTML

- Ogni cella ha un numero progressivo, da 1 a 100.
    - loop for per generare numberi 

- Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    - loop for decido n righe e n colonne 

- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
    - if/else 




# Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


# milestone 2

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
     
     - genero con loop for 16 numeri casuali con minimo 1 massimo 100
        - Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.
            - e verifico che i numeri non si ripetano 
            - verifico se la cella ha lo stesso numero generato in questo loop  
             
- In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
   - abbiamo calpestato una fungo 
   - al click gli assegno la class emoji
   - la cella si colora di rosso 
   - e la partita termina.
    - come termino la partita??


- Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.


- La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).


- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.
    - creo un calcolo nel n click corretti
    - lo stampo nella Dom 



# BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
