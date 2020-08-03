import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Add a new video</h1>

      <Link to="/cadastro/categoria">
        Add category
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo;
