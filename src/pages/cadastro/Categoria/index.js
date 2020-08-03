import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
      }}>

        <FormField
          label="Category name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description:"
          type="????"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categories.map((category, indice) => {
          return (
            <li key={`${category}${indice}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Back to Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
