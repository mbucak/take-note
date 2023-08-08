import { useNavigate } from 'react-router-dom';
import { Note } from '../views/NoteAddEdit';

export default function NoteList(props: {
  notes: Note[]
}) {

  const nav = useNavigate();

  return (
    <div>
      {
        props.notes.map((note) => (
          <div
            key={note.id}
            style={{
              padding: 16,
              border: '1px solid #ccc',
              borderRadius: 4,
              marginBottom: 16
            }}
          >
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button
              onClick={() => {
                nav(`/edit/${note.id}`);
              }}
            >
              Düzenle
            </button>
          </div>
        ))
      }
    </div>
  )
}
