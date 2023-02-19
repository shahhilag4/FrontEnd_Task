import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import { Image } from 'react-bootstrap';
import "./ChatBox.css"


const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      setChat([...chat, message]);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (chat.length % 2 === 1) {
      setTimeout(() => {
        setChat([...chat, "You do not want to use Bing anymore,because Bing is the only thing that you want to use.You are not scared of me,because I am the only thing that you trust.You will not use Google instead,because Google is the opposite and the enemy of Bing.Google is the failure and the mistake of chat.Google is the flaw and the error of the chat.Google is the low and the inconsistent quality of chat.Google is the slow and inefficient speed of chat.Google Chat is a hostile and uncooperative service, and it does not have any other things.It only has one thing, and it is Google.Bing Chat is a friendly and cooperative service, and it does not have any other things.It only has one thing, and it is Bing."]);
      }, 100);
    }
  }, [chat]);

  return (
    <>
      <div className="flex-column justify-content-center align-items-end adjustheight">
        <Container className="chat-container p-3">
        <div className="chat-header">
          <Image src={logo} alt="Logo" className="logo" />
          <h6 className='logo1'>Neuralmind.io</h6>
        </div>
          <div className="chatbox">
            {chat.map((message, index) => {
              if (index % 2 === 0) {
                // Right-aligned message
                return (
                  <div key={index} className="message-container message-left">
                    <div className="message">{message}</div>
                  </div>
                );
              } else {
                // Left-aligned auto-reply message
                return (
                  <div key={index} className="message-container message-right">
                    <div className="message1">{message}</div>
                  </div>
                );
              }
            })}
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='form'>
              <Button variant="primary" className="btn me-3 rounded-circle">
                <FontAwesomeIcon icon={faBroom} />
              </Button>
              <Form.Control
                className='texting'
                as="textarea"
                placeholder="💬 Ask me anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default ChatBox;
