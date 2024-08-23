import React, { useState } from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

// Styled component for the new sticker
const NewSticker = styled.div`
  display: inline-block;
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
  animation: ${blink} 1s infinite; /* Apply blinking animation */
  margin-bottom: 20px; /* Space between sticker and title */
`;

const Container1 = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://st2.depositphotos.com/2171279/6793/i/450/depositphotos_67934195-stock-photo-blackboard-chalkboard-texture-infographics-collection.jpg'); 
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
  color: white;
`;

const Container2 = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  max-width: 600px; /* Set a max width for better readability */
  width: 100%;
  min-height: 300px; /* Reduced height for code verification */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 1.8rem; /* Reduced font size */
  color: purple;
  font-weight: bold;
  font-family: 'Verdana';
`;

const CodeInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 20px;
  width: 100%; /* Full width input field */
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

function App() {
  const [code, setCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const correctCode = '1234'; // Define your correct code here

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === correctCode) {
      setIsCodeValid(true);
    } else {
      alert('Invalid code. Please try again.');
    }
  };

  return (
    <Container1>
      {!isCodeValid ? (
        <Container2>
          <form onSubmit={handleSubmit}>
            <CodeInput
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="Enter the code assigned to you"
              required
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </Container2>
      ) : (
        <Container2>
          <NewSticker>New</NewSticker><Title>Coming soon!</Title>
        </Container2>
      )}
    </Container1>
  );
}

export default App;
