import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './style.css';

export default function BlogView() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const obj = {
    Name: 'Ayush Kumar Rai',
    Gender: 'Male',
    Birthyear: 2001,
    Uid: '2925-6819-5787',
  };
  const [stream, setStream] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [uid, setUid] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, date, uid });
  };

  const openCamera = async () => {
    try {
      const userMediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(userMediaStream);
      setCameraOpen(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setCameraOpen(false);
    }
  };
  const generateDelay = (index) => `${index * 2}s`;

  return (
    <Container style={{ overflowX: 'hidden' }}>
      <h1>PAN CARD SCANNING</h1>
      <div
        style={{
          width: '120%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          {!cameraOpen && (
            <button
              type="button"
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={openCamera}
            >
              Open Camera
            </button>
          )}
          {stream && (
            <div style={{ marginTop: '20px' }}>
              <video
                autoPlay
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                }}
                ref={(video) => {
                  if (video) video.srcObject = stream;
                }}
              />
              <button
                type="button"
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={closeCamera}
              >
                Close Camera
              </button>
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: '10%',
            display: cameraOpen ? 'block' : 'none',
            flexDirection: 'column',
            gap: '100px',
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <label htmlFor="">Name</label> <br />
              <div className={`inputs ${isAnimated ? 'animate-text' : ''}`}>
                {obj.Name &&
                  obj.Name.split('').map((letter, index) => (
                    <span key={index} style={{ animationDelay: generateDelay(index) }}>
                      {letter}
                    </span>
                  ))}
              </div>
              {/* <textarea
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="">Gender</label> <br />
              <div className={`inputs ${isAnimated ? 'animate-text' : ''}`}>
                {obj.Gender &&
                  obj.Gender.split('').map((letter, index) => (
                    <span key={index} style={{ animationDelay: generateDelay(index) }}>
                      {letter}
                    </span>
                  ))}
              </div>
              {/* <textarea
                  fullWidth
                  label="UID"
                  variant="outlined"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                /> */}
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="">D.O.B</label> <br />
              <div className={`inputs ${isAnimated ? 'animate-text' : ''}`}>{obj.Birthyear}</div>
              {/* <textarea
                fullWidth
                label="Date"
                variant="outlined"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="">ID</label> <br />
              <div className={`inputs ${isAnimated ? 'animate-text' : ''}`}>
                {obj.Uid &&
                  obj.Uid.split('').map((letter, index) => (
                    <span key={index} style={{ animationDelay: generateDelay(index) }}>
                      {letter}
                    </span>
                  ))}
              </div>
              {/* <textarea
                fullWidth
                label="UID"
                variant="outlined"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
