# Applicazione Next.js

Benvenuto nella mia applicazione Basic E-commerce con Next.js! Questo progetto è un esempio di base di come creare un'app e-commerce utilizzando Next.js, un framework React per il rendering del lato server.

## Prerequisiti

Assicurati di avere installato Node.js sul tuo sistema. Puoi scaricarlo e installarlo dal sito ufficiale: [Node.js](https://nodejs.org/)

## Installazione

1. Clona questo repository sul tuo computer utilizzando il comando:

```
git clone https://github.com/tuonome/app-nextjs.git
```

2. Dopo aver clonato il repository, spostati nella directory del progetto utilizzando il comando:

```
cd app-nextjs
```

3. Ora, installa le dipendenze necessarie eseguendo il comando:

```
npm install
```

## Utilizzo

Per avviare l'applicazione in modalità sviluppo, esegui il seguente comando:

```
npm run dev
```

Questo avvierà il server di sviluppo Next.js e renderà l'app accessibile tramite il tuo browser all'indirizzo [http://localhost:3000](http://localhost:3000)

## Struttura del Progetto

La struttura principale del progetto è organizzata in questo modo:

- `pages`: In questa cartella troverai i file corrispondenti alle diverse pagine dell'app. Ogni file in questa cartella rappresenta una rotta dell'applicazione.

  - `api`: Questa cartella contiene le routes API create da Next.js. Per questo progetto specifico non sono state create.
  - `category`: Questo cartella contiene la pagina che renderizza la lista dei prodotti divisi per categoria.
  - `product`: Questa cartella contiene la pagina che mostra la pagina di dettaglio dei prodotti.
  - `_app.tsx`: Questo file è il componente Next.js che inizializza l'applicazione. L'ho customizzata per renderizzare componenti comuni a tutte le pagine.
  - `_document.tsx`: Questo file è il componente Next.js che permette di editare i tags in comune a tutte le pagine.
  - `index.tsx`: Questo file rappresenza la home dell'applicazione.

- `components`: Questa cartella contiene tutti i componenti utilizzati all'interno delle pagine.

- `styles`: Questa cartella contiene i file di stile per personalizzare l'aspetto dell'applicazione.

- `shared`: Questa cartella contiene i file condivisi da tutte le altre cartelle, come per esempio variabili e funzioni.
