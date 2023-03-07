import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
        <header className={"header"}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMgRs5gr5GW8nZkyBPcIW-LHLgIaXkf6uOA&usqp=CAU' alt="Logo" />
        </header>
        <nav className={"nav"}>
            <div>
               <a>Profile</a>
            </div>
            <div>
               <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className={"content"}>
            Main content
            <div>
                <img src={'https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b3xlbnwwfHwwfHw%3D&w=1000&q=80'} alt={'logo'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>

            </div>
        </div>


    </div>
  );
}

export default App;
