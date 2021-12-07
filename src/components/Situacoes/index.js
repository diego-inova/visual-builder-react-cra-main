import React from 'react'
import { Table, Card, Input } from 'antd'

const { Search } = Input;
const onSearch = value => console.log(value);

const dataSource = [
  {
    unidadeAtendimento: 'UPA RF - UPA Riacho Fundo',
    descricao: 'Equipe Medica Atendimento Normal Observacao Importante',
    atualizado: '07/12 07:25',
    usuario: 'Ana Paulo',
  },
  {
    unidadeAtendimento: 'UPA F - UPA GAMA',
    descricao: 'Equipe Medica Atendimento Normal Observacao Importante',
    atualizado: '07/12 07:25',
    usuario: 'Joao Cunha',
  },
  {
    unidadeAtendimento: 'UPA RF - UPA Riacho Fundo',
    descricao: 'Equipe Medica Atendimento Normal Observacao Importante',
    atualizado: '07/12 10:05',
    usuario: 'Pedro Gabriel',
  },
  {
    unidadeAtendimento: 'UPA PA - UPA Hospital Regional Sobradinho',
    descricao: 'Equipe Medica Atendimento Normal Observacao Importante',
    atualizado: '07/12 12:12',
    usuario: 'Diego Sousa',
  },
  {
    unidadeAtendimento: 'UPA PA - UPA Hospital Universitario Fundo',
    descricao: 'Equipe Medica Atendimento Normal Observacao Importante',
    atualizado: '07/12 11:31',
    usuario: 'Flavio Ricardo',
  },
];

const columns = [
  {
    title: 'Unidade de Atendimento',
    dataIndex: 'unidadeAtendimento',
    key: 'unidadeAtendimento',
  },
  {
    title: 'Descricao',
    dataIndex: 'descricao',
    key: 'descricao',
  },
  {
    title: 'Atualizado',
    dataIndex: 'atualizado',
    key: 'atualizado',
  },
  {
    title: 'Usuario',
    dataIndex: 'usuario',
    key: 'usuario',
  },
  
];

const ModuloSituacoes = () => {

  return (    
    <>      
      <div className="row">
        <Card title="" style={{ width: 1500, height:550 }}>
          <Search
            placeholder="Localizar texto..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />

          <br />
          <br />

          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </div>
    </>
  )
}

export default ModuloSituacoes