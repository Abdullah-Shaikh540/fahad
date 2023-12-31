import './Button.css';
const Button = (props) => {
    return (
        <div className='Adjust'>
        <a className='button4'>
            {props.text}
        </a>

        </div>
    );
};

export default Button;
