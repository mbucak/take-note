import { useNavigate } from "react-router-dom"
import { Note } from "./NoteAddEdit";
import { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import PageHeader from "../components/PageHeader";

export default function Home() {

  const nav = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const notesData: Note[] = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(notesData);
  }, [])

  function handleClick(e: any) {
    nav('/add');
  }

  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: 4,
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div
      style={{
        padding: 16
      }}
    >
      <PageHeader title="Notlar">
        <button
          onClick={handleClick}
          style={{
            ...buttonStyle,
            cursor: 'pointer'
          }}
        >
          Yeni Not Ekle
        </button>
      </PageHeader>
      <NoteList notes={notes} />
    </div>
  )
}