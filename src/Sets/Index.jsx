import React from 'react';
import { accountService } from '@/_services';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Sets() {
  const user = accountService.userValue;

  const setContainer = {
    margin: '60px 0 0 350px',
    width: '972px',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  };

  const set = {
    width: '300px',
    height: '200px',
    borderRadius:'20px',
    margin: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, .25)',
    background: '#ffffff',
    display:'flex'
  };

  const dottedBorder = {
    width: '300px',
    height: '200px',    
    borderRadius: '20px',
    margin: '12px',
    border: '1.5px dashed #000000',
  };

  const setAccentGreen = {
    width: '14px',
    borderRadius:'20px 0 0 20px',
    height: '100%',
    background: '#2ee340'
  };
  const setAccentRed = {
    width: '14px',
    borderRadius:'20px 0 0 20px',
    height: '100%',
    background: '#ff6767'
  };
  const setAccentBlue = {
    width: '14px',
    borderRadius:'20px 0 0 20px',
    height: '100%',
    background: '#00cabe'
  };
  const setAccentPurple = {
    width: '14px',
    borderRadius:'20px 0 0 20px',
    height: '100%',
    background: '#B073ff'
  };

  const setContents = {
    margin: '30px 30px',
    width: '100%',
  };

  const setTitle = {
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '30px',
    marginBottom:'8px'
  };

  const courseCode = {
    fontSize:'14px',
    lineHeight:'14px',
    margin:'0px'
  };

  const setHr = {
    border: '1px solid #c4c4c4',
    margin: '8px 0px'
  };

  const numTerms = {
    fontSize:'14px',
    lineHeight:'14px',
    margin:'0px'
  };

  return (
    <div>
      {/* new set */}
      <div style={setContainer}>
        <div style={dottedBorder}>
          <div className="text" style={{ textAlign: 'center', margin: 'auto', padding: '80px 0' }}>
            <p>+ &nbsp;&nbsp;&nbsp; New Set</p>
            <div style={{ marginTop: '-10px' }}>
              <hr className='rainbow' ></hr>
            </div>
          </div>
        </div>

        {/* user's sets to map */}
        <div style={set}>
          <div style={setAccentGreen}></div>
          <div style={setContents}>
            <div>
              <p style={setTitle}>Defence Against the Dark Arts</p>
              <p style={courseCode}>DADA - 101</p>
              <hr style={setHr} />
              <p style={numTerms}>15 Terms</p>
            </div>
            
          </div>
        </div>

        <div style={set}>
          <div style={setAccentPurple}></div>
          <div style={setContents}>
            <div>
              <p style={setTitle}>Potions</p>
              <p style={courseCode}>PTNS - 101</p>
              <hr style={setHr} />
              <p style={numTerms}>8 Terms</p>
            </div>
            
          </div>
        </div>

        <div style={set}>
          <div style={setAccentBlue}></div>
          <div style={setContents}>
            <div>
              <p style={setTitle}>History of Magic</p>
              <p style={courseCode}>HOM - 101</p>
              <hr style={setHr} />
              <p style={numTerms}>5 Terms</p>
            </div>
            
          </div>
        </div>

        <div style={set}>
          <div style={setAccentRed}></div>
          <div style={setContents}>
            <div>
              <p style={setTitle}>Transfiguration</p>
              <p style={courseCode}>TNFG - 101</p>
              <hr style={setHr} />
              <p style={numTerms}>13 Terms</p>
            </div>
            
          </div>
        </div>

      </div>

    </div>
  );
}

export { Sets };
