import React from 'react';

const menu =  {
  display: 'flex',
  placeContent: 'space-between',
  fontFamily: 'helvetica neue,helvetica,arial,sans-serif'
}

const bold = {
  fontWeight: 700,
  lineHeight: 1.25
}

const space_between = {
padding: '0px 3px 0px 3px'
}
const beauty_box = {
display: 'flex'
}

const menu_middle = {
  display: 'flex'
}

const Menu = (props) => {
  return (
    <div style={menu}>
      <div style={bold}>Photos(250)</div>

      <div style={menu_middle}>
        <div style={space_between}>
          <img height="12px"src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/square.svg"/>
        </div>
          <span>Show Photos from my</span>
        <div style={beauty_box}>
          <div style={space_between}>
            <img height='20px'src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/overlap.svg"/>
          </div>
          <span>Beauty Matches</span>
          <div >
            <img height="12px" style = {{paddingLeft: '3px'}} src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/question-mark-on-a-circular-black-background.svg"/>
          </div>
        </div>
      </div>

      <div>
        view by color<span style={bold}>(ALL)</span>
      </div>

    </div>
  )
}


export default Menu;

