import React from 'react';
import logo from './../assets/logo-tindev.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tinder" />
        <ul>
            <li>
                <img src="https://avatars2.githubusercontent.com/u/861751?v=4" alt="" />
                <footer>
                    <strong>Robson Marques</strong>
                    <p>Um dev zika </p>
                </footer>

                <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="dislike" />
                            </button>
                            <button type="button" >
                                <img src={like} alt="like" />
                            </button>
    
                </div>
              </li>
        </ul>
    </div>
  );
}