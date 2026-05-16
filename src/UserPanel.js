import './App.css';
import {useState} from "react";
import MeetingsPage from "./meetings/MeetingsPage";

export default function UserPanel(props) {

    return <div>
        <h3>Witaj {props.email}</h3>
        <MeetingsPage/>
        <a class="button button-clear" onClick={() => props.onLogout()}>Wyloguj sie</a>
    </div>
}
