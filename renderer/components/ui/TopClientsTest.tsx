import React from "react";
import NextLink from 'next/link';

export const TopClientsTest = ({clients}) => {

    const topClients = [
        {
            imgProfile: "https://m4faces.com/wp-content/uploads/2021/12/tratamiento-de-lifting-1-300x300.png",
            userName: "Liz"
        },
        {
            imgProfile: "https://m4faces.com/wp-content/uploads/2021/12/tratamiento-de-lifting-1-300x300.png",
            userName: "Ana"
        },
        {
            imgProfile: "https://dragonball.guru/wp-content/uploads/2021/03/Android-16-Profile-Pic-300x300.png",
            userName: "Juan"
        },
        {
            imgProfile: "https://dragonball.guru/wp-content/uploads/2021/03/Android-16-Profile-Pic-300x300.png",
            userName: "Toño"
        },
    ];

    return (
        <div id='section' className="topClientContainer">
            <label>Top clients</label>
            {topClients.map(todo => (
                <div className="userCard">
                    <img src={todo.imgProfile} alt="img profile from user" />
                    <p>{todo.userName}</p>
                </div>
            ))}
        </div>
    );
}