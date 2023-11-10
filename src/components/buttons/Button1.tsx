interface props {
    text: String,
    onPress: () => void
}

function Button1(props: props) {
    return (
        <button className="button1" onClick={props.onPress}>
            {props.text}
        </button>
    )
}

export default Button1