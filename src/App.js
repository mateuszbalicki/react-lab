import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('mateusz.balicki@gmaill.com')

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let validationMessage = '';
    if (email.length < 5) {
        validationMessage = 'Email jest za krótki'
    } else if (email.length < 15) {
        validationMessage = 'Email jest odpowiedni'
    } else {
        validationMessage = 'Email jest za długi'
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <input type="text" id="femail" value={email} onChange={handleChange}/>
            <button type ="button" onClick={() => alert(email)}>Wyświetl alert</button>
            {email.length > 0 &&<div>Błąd: {validationMessage}</div>}
        </div>
    );
}

export default App;
