import React from 'react';

const Footer = props => {


  switch (props.gameStage) {

    case 1: {
      return (
        <div className="footer">

        </div>
      )
    }

    case 2: {
      return (
        <div className="footer">
          <button className="ready-button" onClick={props.advanceStage}>ready</button>
        </div>
      )
    }

    case 3: {
      return (
        <div className="footer">
          <input value={props.footerInput} onChange={props.updateFooterInput} />
          <button onClick={props.advanceStage}>submit answer</button>
        </div>
      )
    }

    case 4: {
      return (
        <div className="footer">
          <input value={props.footerInput} onChange={props.updateFooterInput} />
          <button onClick={props.advanceStage}>go</button>
        </div>
      )
    }

    case 5: {
      return (
        <div className="footer">
          <input value={props.footerInput} onChange={props.updateFooterInput} />
          <button onClick={props.advanceStage}>go</button>
        </div>
      )
    }

    default: {
      return (
        <div className="footer">
          <input value={props.footerInput} onChange={props.updateFooterInput} />
          <button onClick={props.advanceStage}>go</button>
        </div>
      )
    }

  }
}

export default Footer;