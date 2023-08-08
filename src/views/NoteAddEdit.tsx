import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export type Note = {
  id: number;
  title: string;
  content: string;
}

export default function NoteAddEdit() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const nav = useNavigate();
  const urlParams = useParams();

  function handleSubmit() {

    const newNote: Note = {
      id: Date.now(),
      title: title,
      content,
    }

    const notes: Note[] = JSON.parse(localStorage.getItem('notes') || '[]');
    if (urlParams.id) {
      const noteIndex = notes.findIndex((note) => note.id === Number(urlParams.id));
      notes[noteIndex] = newNote;
    } else {
      notes.push(newNote);
    }

    localStorage.setItem('notes', JSON.stringify(notes));
    nav('/');
  }

  useEffect(() => {
    if (urlParams.id) {
      const notes: Note[] = JSON.parse(localStorage.getItem('notes') || '[]');
      const note = notes.find((note) => note.id === Number(urlParams.id));
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
    }
  }, [urlParams.id])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }} >{urlParams.id ? 'Not Düzenle' : 'Not Ekle'}</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Not Başlığı"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Not İçeriği"
            style={textareaStyle}
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: 8
          }}
        >
          <button
            onClick={() => { nav('/') }}
            style={{
              ...buttonStyle,
              backgroundColor: 'transparent',
              border: '1px solid #007bff',
              color: '#007bff',
            }}
          >
            Vazgeç
          </button>
          <button type="submit" style={buttonStyle}>Kaydet</button>
        </div>
      </form>
    </div>
  );
};

// Inline CSS Stilleri
const formStyle: React.CSSProperties = {
  maxWidth: '420px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const formGroupStyle: React.CSSProperties = {
  marginBottom: '15px',
};

const inputStyle: React.CSSProperties = {
  width: 'calc(100% - 20px)',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle: React.CSSProperties = {
  width: 'calc(100% - 20px)',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  minHeight: '150px',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
};
