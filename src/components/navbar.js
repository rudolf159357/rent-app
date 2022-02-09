import {Button} from "./button.js";

function Navbar(){
  return (
    <div className="navbar">
    <h1 className="logo"> airbnb</h1>
    <div className="button-group">
      <Button value="Become Host" class="btn-bh"/>
      <Button value="Sign Up" class="btn-sign"/>
      <Button value="Log In" class="btn-log"/>
    </div>
  </div>
  );

}

export {Navbar};