import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        🔥 Let's start your pizza journey!🔥
      </p>

      <input
        type="text"
        placeholder="Ready to devour some pizza? Tell us your name!"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-full max-w-lg rounded-full px-6 py-3 text-lg placeholder:text-sm"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
