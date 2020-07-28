import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Register a new Video</h1>

      <Link to="/cadastro/categoria">
        Register a Category
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;
