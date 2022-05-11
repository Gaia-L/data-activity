L'applicazione dal nome data-activity è un'applicazione react creata con il comando npx create-react-app e può essere eseguita tramite npm start da prompt dei comandi posizionandosi nella directory data-activity. In seguito a questo comando verrà aperto il browser predefinito su localhost:3000 e visualizzata la pagina iniziale. 
All'interno del src ho creato la directory res con dentro i mock-api-data e un file png utilizzato nel css. 
In src ho creato una nuova cartella chiamata components la quale contiente tutti i componenti utilizzati.
L'App.js è il file principale che permette la visualizzazione di tutti i componenti secondari.
L'App.js di deafult viene richiamato all'interno dell'index.js e mostrato all'avvio dell'applicazione. 

Struttura: 
L'App.js è costituito da:
- Navbar(component):
    contiene il titolo e il componente Info composto a sua volta da un'alert gestito tramite uno stato iniziale settato a false , il quale cambia inseguito al click del button. L'alert permette di visualizzare la legenda della table. 
- MainComponent :
   e il componente padre dal quale il componente figlio DataTable eredita  i dati mostrati in tabella. All'interno del MainComponent ho utilizzato il componentDidMount per mostrare il componente dopo averlo costruito. In questo componente filtro la lista iniziale di pazienti (12 inizialmente) selezionando solo coloro con età compresa tra i 20 e i 40 anni, e in relazione al tipo di attività e ai minuti svolti determino se la soglia di ore di allenamento va al di sotto di quella indicata all'interno del readme presente nella cartella mock-api-data. Il risultato è racchiuso nella proprietà stato aggiunta ai dati del singolo paziente e mostrata nell'ultima colonna della tabella. 
   La DataTable permette di filtrare la lista in base al nome/cognome del paziente e anche di ordinare ogni colonna in ordine alfa-numerico. 
   Il MainComponent mostra anche un Accordion (PanelComponent) con all'interno le cards (Cards component) che illustrano i dati dei pazienti. I dati della tabella filtrati e non filtrati possono essere esportati in file excel. 
- Footer

Nell'App.css ho definito lo stile di alcuni elementi quali table, card, filtri , ed altro. 

IDE usata per lo sviluppo Visual Studio Code.
1:Clonare il progetto: 
- git clone https://github.com/Gaia-L/data-activity.git
2: dopo aver clonato il progetto , posizionarsi in data-activity ed eseguire i segueni comandi:

npm install 

e successivamente : 

npm start 

prova branch2
Prova, ciao Gaia

Talent Academy 2022