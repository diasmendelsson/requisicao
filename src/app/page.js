'use client'
import { useState } from 'react'
import styles from './page.css'
import axios from 'axios'




export default function Home() {

  const [data, setData] = useState({
    veiculo: '',
    funcionario: '',
    data: '',
    requisicaoEmpresa: '',
    requisicaoParticular: '',
    valor: ''
  })

  const valueInput = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const addRequisicao = async (e) => {

    e.preventDefault();

    console.log('Enviar para API')
    console.log('Veiculo:' + data.veiculo)
    console.log('Funcionário:' + data.funcionario)
    console.log('Data:' + data.data)
    console.log('Requisição:' + data.requisicaoEmpresa)
    console.log('Requisição:' + data.requisicaoParticular)
    console.log('Valor:' + data.valor)

    const headers = {
      'headers': {

        'Content-Type': 'application/json'
      }
    };

    await axios.post('http://localhost:8080/requisicaos', data, headers)
      .then((response) => {
        console.log(response.data.mensagem);

    setData({
      name: '',
      email:''
    })
        
      }).catch((err) => {
        console.log(err.response.data.mensagem)
      })
  }

    return (
      <main>

       
        <h1>Ficha de Abastecimento</h1>
       
        <form onSubmit={addRequisicao}>

          <fieldset>

            <legend><b>Dados do Veículo</b></legend>
            <label>Placa:</label>
            <input type='text' name='veiculo' onChange={valueInput} value={data.veiculo} />
          </fieldset>

          <fieldset>

            <legend><b>Funcionário</b></legend>
            <label>Nome:</label>
            <input type='text' name='funcionario' onChange={valueInput} value={data.funcionario} />
          </fieldset>

          <fieldset>

            <legend><b>Período</b></legend>
            <label>Data:</label>
            <input type='date' name='data' onChange={valueInput} value={data.data} />
          </fieldset>

          <fieldset>

            <legend><b>Para quem ?</b></legend>
            <label>Empresa</label>
            <input className='radios' type='radio' name='requisicaoEmpresa' onChange={valueInput} value={data.requisicaoEmpresa} />
       
            <label className='part'>Particular</label>
            <input className='radios' type='radio' name='requisicaoParticular' onChange={valueInput} value={data.requisicaoParticular} />
          </fieldset>


          <fieldset>

            <legend><b>Valor</b></legend>

            <input
              type="number"
              name='valor'
              onChange={valueInput} value={data.valor} />
          </fieldset>

          <button type='submit'>Enviar</button>
        </form>
      </main>
    )
  }

