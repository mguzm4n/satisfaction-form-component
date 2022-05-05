class SatisfactionForm{
    constructor(root, questions, maxScaleNumber){
        if( maxScaleNumber < 5 || maxScaleNumber > 9 ){
            throw new Error("Maximum score too low or too big for a Likert scale");
        }
        if( maxScaleNumber%2 == 0 ){
            throw new Error("Can't use even numbers in scale since there's no option for neutral answers");
        }

        this.root = root;
        this.questions = questions;
        this.maxScaleNumber = maxScaleNumber;
        this.rowsCount = 0;
        this.setupContainer()
        // this.setupHeader()

        
        //this.setupQuestion(rowElement, questions[0])
        this.setupRows()

    }

    setupRows(){
        this.questions.forEach(question => {
            let rowElem = document.createElement('div')
            rowElem.classList.add('form-question');

            this.addQuestion(rowElem, question);
            this.addScoreSelection(rowElem);

            this.container.appendChild(rowElem);
        });
    }

    setupContainer(){
        let container = document.createElement('div');
        container.classList.add('form-container');
        this.root.appendChild(container);
        this.container = container;
    }

    setupHeader(){
        let head = document.createElement('div');
        ['form-question', 'form-header'].forEach( classStr => {
            head.classList.add(classStr) 
        });
        
        this.addRowContent(head);
        this.container.appendChild(head);
    }

    addRowContent(rowElement){
        this.addQuestion();
        this.addScoreSelection();
    }

    addQuestion(rowElement, questionContent){
        let question = document.createElement('div');
        question.classList.add('form-text')
        question.innerText = questionContent;
        rowElement.appendChild(question)
    }

    addScoreSelection(rowElement){
        let scoresContainer = document.createElement('div');
        scoresContainer.classList.add('form-scores');
        let selectorGroupElement = this.addScores(rowElement, scoresContainer);
        rowElement.appendChild(selectorGroupElement)
    }

    addScores(rowElement, selectorGroupElement){
        let scoresRange = [...Array(this.maxScaleNumber).keys()].map((_, i) => i + 1);
        let groupName = `row${this.rowsCount + 1}`;
        let median = Math.floor(scoresRange.length/2);
        console.log(median)
        scoresRange.forEach( (_, i) => {
            let radioSelector = document.createElement('input');
            radioSelector.type = 'radio';
            radioSelector.name = groupName;
            if( i == median ) radioSelector.checked = true;
            selectorGroupElement.appendChild(radioSelector);
        });

        return selectorGroupElement;
    }
}

let myRoot = document.getElementById("subsection");
let firstFormQuestions = ["Me siento agusto utilizando la aplicación",
                          "Siento que necesito ayuda para utilizar la página web",
                          "Necesité aprender demasiadas cosas antes de utilizar la aplicación",
                          "Creo que las personas aprenderían muy rápido a utilizar la aplicación",
                          "Pienso que la aplicación es muy inconsistente",
                          "Encontré que las diferentes funciones de la aplicación están bien \
                           integradas",
                          "Creo que utilizaría esta app con frecuencia"];

let firstForm = new SatisfactionForm(myRoot, firstFormQuestions, 5);