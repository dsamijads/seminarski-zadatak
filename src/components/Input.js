import React from 'react';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'


export default function Input({onSendMessage, onChangeTypingState}) {
  const [text, setText] = useState('');
  
  function onChange(e) {
    const text = e.target.value;
    setText(text);
  }
np,
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    if (!text?.trim()?.length) {
      return;
    }
    onSendMessage(text);
  }
  
  return (
    <div className={styles.input}>
      <form onSubmit={e => onSubmit(e)}>
      <input
          onChange={e => onChange(e)}
          value={text}
          type='text'
          placeholder='Enter your message and press ENTER'
          autoFocus
      />
      <button>Send</button>
      </form>
    </div>
  );
}