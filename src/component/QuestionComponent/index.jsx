import {useState} from "react";
import './index.css'
import {QuestionItemComponent} from "../QuestionItemComponent";

function getLetterByIndex(index) {
    return index === 0 ? 'A' :
        index === 1 ? 'B' :
            index === 2 ? 'C' :
                index === 3 ? 'D' :
                    'Z'
}

export function QuestionComponent(props) {
    const [answer, setAnswer] = useState(null);

    function onOptionClicked(option) {
        if (answer) {
            return
        }

        setAnswer(option)
        props.onAnswer(option.value)
    }

    return (
        <div>
            <p className='question-text'>{props.currentQuestionIndex + 1}. {props.question.text}</p>
            <div>
                {props.question.options.map((option, index) => {
                    return (
                        <QuestionItemComponent
                            key={option.text}
                            answer={answer}
                            option={option}
                            text={`${getLetterByIndex(index)}) ${option.text} `}
                            onOptionClicked={onOptionClicked}/>
                    )
                })}
            </div>
        </div>
    )
}
