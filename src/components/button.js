

function Button(props){
  return (
    <input type="button" value={props.value} className={`btn ${props.class}`}/>
  );
  
}

export {Button};