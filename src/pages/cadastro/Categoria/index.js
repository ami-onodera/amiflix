import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Register a new Category</h1>

      <Link to="/cadastro/categoria">
        Back to Home
      </Link>''
    </PageDefault>
  )
}

export default CadastroCategoria;
