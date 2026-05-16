import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('mateusz.balicki@gmaill.com')

    const [isLoggedIn, setIsLoogedIn] = useState(false);

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            { !isLoggedIn &&
            <div>
                <input type="text" onChange={event => setEmail(event.target.value)}/>
                <button type="button" onClick={() => setIsLoogedIn(true)}>Zaloguj się</button>
            </div>}
            { isLoggedIn && <div>
                <h1>Witaj { email }</h1>
                <a onClick={() => setIsLoogedIn(false)}>Wyloguj</a>
            </div>}
        </div>
    );
}

export default App;
