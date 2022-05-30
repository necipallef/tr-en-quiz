import './index.css'

export function QuestionItemComponent(props) {

    const colorClass = `${props.answer == null ? 'black' : (props.option.value ? 'green' : (props.option === props.answer ? 'red' : 'black'))}`

    return (
        <span
            key={props.option.text}
            className={`${colorClass} option-item`}
            onClick={() => props.onOptionClicked(props.option)}>
                            {props.text}
                        </span>
    )
}
