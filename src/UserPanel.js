import './App.css';
import {useState} from "react";

export default function UserPanel(props) {

    return <div>
        <h3>Witaj {props.email}</h3>
        <a class="button button-clear" onClick={() => props.onLogout()}>Wyloguj sie</a>
    </div>
}
