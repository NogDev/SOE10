import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
         
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Tecnologias</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Tecnologias</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/25827712?s=400&u=4b4df62325f2118daa9a30a9f7c4702db4d10606&v=4" alt="Nog"/>
              <div className="user-info">
                <strong>Anderson Nogueira</strong>
                <span>Java, React</span>
              </div>
            </header>
            <p>Não tem </p>
            <a href="https://github.com/NogDev">Perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/25827712?s=400&u=4b4df62325f2118daa9a30a9f7c4702db4d10606&v=4" alt="Nog"/>
              <div className="user-info">
                <strong>Anderson Nogueira</strong>
                <span>Java, React</span>
              </div>
            </header>
            <p>Não tem </p>
            <a href="https://github.com/NogDev">Perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/25827712?s=400&u=4b4df62325f2118daa9a30a9f7c4702db4d10606&v=4" alt="Nog"/>
              <div className="user-info">
                <strong>Anderson Nogueira</strong>
                <span>Java, React</span>
              </div>
            </header>
            <p>Não tem </p>
            <a href="https://github.com/NogDev">Perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/25827712?s=400&u=4b4df62325f2118daa9a30a9f7c4702db4d10606&v=4" alt="Nog"/>
              <div className="user-info">
                <strong>Anderson Nogueira</strong>
                <span>Java, React</span>
              </div>
            </header>
            <p>Não tem </p>
            <a href="https://github.com/NogDev">Perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;