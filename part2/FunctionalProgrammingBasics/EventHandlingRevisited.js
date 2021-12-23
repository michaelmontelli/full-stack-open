const Button = props => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    const [value, setValue] = useState(10)

    const handleClick = () => setValue(0)

    return (
        <div>
            {value}
            <Button handleClick={handleClick} text="reset to zero" />
        </div>
    )
}