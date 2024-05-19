## Applicazione di Gestione Attività
Questa applicazione Angular permette agli utenti di aggiungere, visualizzare e cancellare attività. Le attività vengono memorizzate localmente nel browser utilizzando Local Storage, permettendo di mantenere i dati tra le sessioni dell'utente.

## Struttura del Progetto
Componenti: L'applicazione è composta da un singolo componente chiamato AttivitaComponent.
Template HTML: Contiene un modulo per l'aggiunta di nuove attività e una tabella per visualizzare l'elenco delle attività.
Stili SCSS: Include stili di base per il layout e la formattazione dei componenti.

## Funzionalità Principali
Aggiunta di Attività
Gli utenti possono aggiungere una nuova attività inserendo una data e una descrizione.
Il modulo di input è validato: entrambi i campi sono obbligatori.
Dopo l'aggiunta di una nuova attività, il modulo viene resettato.
## Visualizzazione delle Attività

Le attività vengono visualizzate in una tabella.
La tabella mostra un indice (posizione nell'elenco), la data formattata e la descrizione dell'attività.
Cancellazione delle Attività

Ogni attività nella tabella ha un pulsante per la cancellazione.
Quando un'attività viene cancellata, l'elenco si aggiorna automaticamente.
Se l'elenco diventa vuoto, l'indice viene resettato a 0. Se no, l'indice si basa sull'ID massimo attualmente presente nella lista.
Memorizzazione Locale

## Le attività vengono salvate nel Local Storage del browser.
## Le attività vengono caricate dal Local Storage al caricamento dell'applicazione.
