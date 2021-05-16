import './style.sass'

const ErrorMessage = ({errorMessage}) => {
    return (
        <div className="error">
            <h2 className="error__message">{errorMessage}</h2>
        </div>
    );
}

export default ErrorMessage;