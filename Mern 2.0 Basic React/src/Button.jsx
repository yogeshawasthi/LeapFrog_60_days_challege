import Test from "./Test";


const Button = ({buttoncontent,arkocontent}) => {
    // const {buttoncontent} = props;
    return (
        <>
        <button>{buttoncontent}</button>
        <button>{arkocontent}</button>
        <Test dataToSend={arkocontent} />
        
        </>
    );
}
export default Button