
import PropTypes from "prop-types";


const Button = ({ buttoncontent, arkocontent }) => {
    return (
        <>
            <button>{buttoncontent}</button>
            <button>{arkocontent}</button>
        </>
    )
}

// Button.defaultProps = {
//     buttoncontent: "Default Button",
//     arkocontent: "Default number"
// }

Button.PropTypes = {
    arkocontent: PropTypes.string.isRequired,
}

export default Button;


// this is Button component
// this is a reusable component