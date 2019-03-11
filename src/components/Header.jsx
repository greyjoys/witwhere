import React from 'react';

const Header = props => {

  switch(props.gameStage) {
  	case 1: {
  	  return(
    	<div className="header">
      	  <h1>**** WITWARE 64 V1.00 BASIC V2 ****</h1>
          <div className="sign-in">
            <label name="username">Player name</label>
            <input id="username" name="username" type="text" value={props.playerName} onChange={props.updatePlayerName}></input>
            <label name="password">Password</label>
            <input id="password" name="password" type="text" value={props.playerPass} onChange={props.updatePlayerPass}></input>
          </div>
        </div>
      )
  	}

	case 2: {
	  return(
	  	<div className="header">
	  	  <h1>**** WITWARE 64 V1.00 BASIC V2 ****</h1>
          <div className="hstatus">Waiting for players to join lobby...</div>
        </div>
      )
    }

    case 3: {
      return(
	  	<div className="header">
	  	  <h1>**** WITWARE 64 V1.00 BASIC V2 ****</h1>
        </div>
      )
    }

    case 4: {
      return(
	  	<div className="header">
	  	  <h1>**** WITWARE 64 V1.00 BASIC V2 ****</h1>
        </div>
      )
    }

    case 5: {
      return(
	  	<div className="header">
	  	  <h1>**** WITWARE 64 V1.00 BASIC V2 ****</h1>
        </div>
      )
    }

    default: {
      <div>error...</div>
    }    
  }
}

export default Header;