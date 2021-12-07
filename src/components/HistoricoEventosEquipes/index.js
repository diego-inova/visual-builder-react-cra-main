import React from 'react'
import { Table, Tabs, Card, Input } from 'antd'

import { AppleOutlined } from '@ant-design/icons';

const { Search } = Input;
const onSearch = value => console.log(value);

const { TabPane } = Tabs;

const dataSource = [
  {
    key: '1',
    equipe: 'P. PILOTO 2',
    dthora: 32,
    usuario: 'Ana Paulo',
    status: 'Reservada',
    chamado: 0,
    observacao: 'Reservada para o usuario Ana Paulo',
    via: 'ESTACAO DE TRABALHO',
  },
];

const columns = [
  {
    title: '',
    dataIndex: '1',
    key: '1',
  },
  {
    title: 'Equipe',
    dataIndex: 'equipe',
    key: 'equipe',
  },
  {
    title: 'Data/Hora',
    dataIndex: 'dthora',
    key: 'dthora',
  },
  {
    title: 'Usuario',
    dataIndex: 'usuario',
    key: 'usuario',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Chamado',
    dataIndex: 'chamado',
    key: 'chamado',
  },
  {
    title: 'observacao',
    dataIndex: 'observacao',
    key: 'observacao',
  },
  {
    title: 'Via',
    dataIndex: 'via',
    key: 'via',
  },
];

const ModuloHistoricoEventosEquipes = () => {

  return (    
    <>
      <div className="row">
        <Card title="" style={{ width: 1500, height:550 }}>

          <Tabs defaultActiveKey="2">
            <TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Todos
                </span>
              }
              key="1"
            >
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
            </TabPane>
            
          </Tabs>

        </Card>
      </div>
    </>
  )
}

export default ModuloHistoricoEventosEquipes