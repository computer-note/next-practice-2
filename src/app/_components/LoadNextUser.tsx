'use client';

import { useState } from 'react';
import User from './User';

function LoadNextUser(props) {
  const [user, setUser] = useState<any>(props.user);

  function handleLoadButton() {
    async function loadUser() {
      const response = await fetch(`https://randomuser.me/api`, {
        cache: 'no-cache',
      });
      const data = await response.json();
      setUser(data.results[0]);
    }

    loadUser();
  }

  return (
    <div>
      {user && <User user={user} />}
      <button onClick={handleLoadButton}>다음 유저 로드</button>
    </div>
  );
}

export default LoadNextUser;
