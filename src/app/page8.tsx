import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.body);

export default function Page8() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState('🌸This is the content of Page 8.');
  const [fastContent, setFastContent] = useState('🌸This is the fast content of Page 8.');
  const [content2, setContent2] = useState('🌸This is the second content of Page 8.');
  const [content3, setContent3] = useState('🏠This is the third content of Page 8.');
  const [content4, setContent4] = useState('🌙This is the fourth content of Page 8.');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleFastChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFastContent(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent2(event.target.value);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent3(event.target.value);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent4(event.target.value);
  };

  return (
    <div>
      <h1>Page 8</h1>
      <div onClick={openModal} style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <p style={{ display: 'inline-block', animation: 'marquee 10s linear infinite' }}>{content}</p>
      </div>
      <div onClick={openModal} style={{ overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '24px', marginTop: '20px' }}>
        <p style={{ display: 'inline-block', animation: 'marquee-fast 22s linear infinite' }}>{fastContent}</p>
      </div>
      <div onClick={openModal} style={{ overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '20px', marginTop: '20px' }}>
        <p style={{ display: 'inline-block', animation: 'marquee 12s linear infinite' }}>{content2}</p>
      </div>
      <div onClick={openModal} style={{ overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '32px', marginTop: '20px' }}>
        <p style={{ display: 'inline-block', animation: 'marquee 6s linear infinite' }}>{content3}</p>
      </div>
      <div onClick={openModal} style={{ overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '64px', marginTop: '20px' }}>
        <p style={{ display: 'inline-block', animation: 'marquee 4s linear infinite' }}>{content4}</p>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Edit Content">
        <h2>Edit Content</h2>
        <textarea value={content} onChange={handleChange} style={{ width: '100%', height: '100px' }} />
        <h2>Edit Fast Content</h2>
        <textarea value={fastContent} onChange={handleFastChange} style={{ width: '100%', height: '100px' }} />
        <h2>Edit Second Content</h2>
        <textarea value={content2} onChange={handleChange2} style={{ width: '100%', height: '100px' }} />
        <h2>Edit Third Content</h2>
        <textarea value={content3} onChange={handleChange3} style={{ width: '100%', height: '100px' }} />
        <h2>Edit Fourth Content</h2>
        <textarea value={content4} onChange={handleChange4} style={{ width: '100%', height: '100px' }} />
        <button onClick={closeModal}>Close</button>
      </Modal>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-fast {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
