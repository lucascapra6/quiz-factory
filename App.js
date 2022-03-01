class AbstractQuiz {
    constructor(description, answer) {
        this.description = description
        this.answer = answer
    }
    printDescription() {
        console.log(this.description)
        return this.printDescription
    }
    printAnswer() {
        console.log(this.answer)
        return this.answer
    }
}

class BooleanQuestions extends AbstractQuiz{
    constructor(description, answer) {
        super(description, answer);
        this.options = {
            true: true,
            false: false
        }
    }
}

class MultipleChoiceQuestions extends AbstractQuiz{
    constructor(description, answer, options) {
        super(description, answer);
        this.options = options
    }
}

class TextQuestion extends AbstractQuiz{
    constructor(description, answer) {
        super(description, answer);
    }
}

// cria uma question personalizada pelo usuário e adiciona ao array questions
const questions = []
const createQuestion = (type, description, answer, choices = null) => {
    questions.push(selectedQuestionType(type, description, answer, choices))
    return {
        type: type,
        description: description,
        answer: answer,
        choices: choices
    }
}
const selectedQuestionType = (type, description, answer, choices) => {
    const questionsType = {
        boolean: new BooleanQuestions(description, answer),
        multipleChoice: new MultipleChoiceQuestions(description, answer, choices),
        text: new TextQuestion(description, answer)
    }
    return questionsType[type]
}

const printQuestionsDescriptions = (questions) => {
    questions.forEach((question) => {
        question.printDescription()
    })
}

const printQuestionsAnswers = (questions) => {
    questions.forEach((question) => {
        question.printAnswer()
    })
}

createQuestion('boolean','is truth of false?', true)
createQuestion('multipleChoice', 'what is the most used language actualy?', 'JS', ['Phyton', 'JS', 'Java'])
createQuestion('text', 'What is the language used to style things on web systems?', 'CSS')

console.log(questions)

