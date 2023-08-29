import './customHeader.css'; 

function customHeader(props) {
   return (<h1 className='customHeader'>{props.text}</h1>);
}

export default customHeader;