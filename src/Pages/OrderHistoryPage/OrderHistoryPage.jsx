import { useState } from 'react';
import './OrderHistoryPage.css';
import { checkTokenService } from '../../utilities/users-service';

export default function OrderHistoryPage() {
  //   const [user, setUser] = useState(null)

  async function handleCheckToken() {
    const expDate = await checkTokenService();
    console.log(expDate);
  }

  return (
    <>
      <h1 className="OrderHistoryPage">OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when token expires</button>
    </>
  );
}
