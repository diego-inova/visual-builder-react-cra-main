import React from 'react'
import { Table, Tabs, Card, Input, Checkbox } from 'antd'

import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { Search } = Input;
const onSearch = value => console.log(value);

const { TabPane } = Tabs;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Equipe',
    dataIndex: 'equipe',
    key: 'equipe',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    key: 'tipo',
  },
  {
    title: 'Hora',
    dataIndex: 'hora',
    key: 'hora',
  },
  {
    title: 'Tempo',
    dataIndex: 'tempo',
    key: 'tempo',
  },
  {
    title: 'Status atual',
    dataIndex: 'statusAtual',
    key: 'statusAtual',
  },
  {
    title: 'Marca retida',
    dataIndex: 'marcaretida',
    key: 'marcaretida',
  },
  {
    title: 'Telefone',
    dataIndex: 'telefone',
    key: 'telefone',
  },
  {
    title: 'Observacoes sobre equipe',
    dataIndex: 'observacoesSobreEquipe',
    key: 'observacoesSobreEquipe',
  },
  {
    title: 'Chamado',
    dataIndex: 'chamado',
    key: 'chamado',
  },
  {
    title: 'Descricao do chamadoora',
    dataIndex: 'descricaoChamadoora',
    key: 'descricaoChamadoora',
  },
];

const ModuloMovimentacaoEquipes = () => {

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

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>
            
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Regiao 01
                </span>
              }
              key="2"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Regiao 02
                </span>
              }
              key="3"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Regiao 03
                </span>
              }
              key="4"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Regiao 04
                </span>
              }
              key="5"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Regiao 05
                </span>
              }
              key="6"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Regiao 06
                </span>
              }
              key="7"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Regiao 07
                </span>
              }
              key="8"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Central
                </span>
              }
              key="9"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>

              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Eventos Sociais CBMDF
                </span>
              }
              key="10"
            >
              <Search
                placeholder="Localizar texto..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />

              <Checkbox>somente disponiveis</Checkbox>
              <Checkbox>somente com marca retida</Checkbox>
              
              <Table dataSource={dataSource} columns={columns} />
            </TabPane>

          </Tabs>

        </Card>
      </div>
    </>
  )
}

export default ModuloMovimentacaoEquipes