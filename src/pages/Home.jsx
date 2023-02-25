import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Gerenciamento de Estoque</h1>
      <ul>
        <li>
          <Link to="/stock">Gerenciar Estoque</Link>
        </li>
        <li>
          <Link to="/orders">Gerenciar Pedidos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;