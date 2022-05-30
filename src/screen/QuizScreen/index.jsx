import './index.css'
import {useState} from "react";
import {QuestionComponent} from "../../component/QuestionComponent";
import {getQuestions} from "../../consts/questions";
import {shuffleArray} from "../../utils/shuffleArray";

export function QuizScreen() {
    const [started, setStarted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [hasAnswered, setAnswered] = useState(false);

    function onStartClick() {
        setStarted(true)
        setCurrentQuestionIndex(0);
        const allQuestions = getQuestions();
        shuffleArray(allQuestions)
        setQuestions(allQuestions)
    }

    function onNextClick() {
        setCurrentQuestionIndex(i => i + 1)
        setAnswered(false)
    }

    function onAnswer(answer) {
        if (answer) {
            setCorrectCount(c => c + 1)
        }
        setAnswered(true);
    }

    if (!started) {
        return (
            <div className='question-container'>
                <button onClick={onStartClick}>Start!</button>
            </div>
        )
    }

    if (currentQuestionIndex === questions.length) {
        return (
            <div className='question-container'>
                <p>Score: {correctCount}/{questions.length}</p>
            </div>
        )
    }

    return (
        <div className='question-container'>
            <QuestionComponent
                key={questions[currentQuestionIndex].text}
                question={questions[currentQuestionIndex]}
                currentQuestionIndex={currentQuestionIndex}
                onAnswer={onAnswer}/>
            {
                hasAnswered !== true ? null :
                    <button className='next-button' onClick={onNextClick}>Next >></button>
            }
        </div>
    )
}
