import React from 'react'
import { DatePicker, Space, Form, Checkbox, Button, Collapse, Table, Input, Card, Tag, Tabs, List, Avatar } from 'antd'

import { ExperimentOutlined, FilterOutlined, BuildOutlined, TeamOutlined, SisternodeOutlined, SubnodeOutlined, FileTextOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const dataSource2 = [
  {
    key: '1',
    regiao: 'Ceilandia - Area de Desenvolvimento',
    chamado: '137098...',
    endereco: 'Teste INOVA, Teste',
    paciente: 'Teste INOVA, 59, M 23 anos',
    descricao: 'Teste INOVA, -25/10 14:59',
    situacao: 'Aguardando atendimento',
    equipe: '-',
    usuario: '-',
  },
  {
    key: '2',
    regiao: 'Ceilandia - Area de Desenvolvimento',
    chamado: '137098...',
    endereco: 'Teste INOVA, Teste',
    paciente: 'Teste INOVA, 59, M 23 anos',
    descricao: 'Teste INOVA, -25/10 14:59',
    situacao: 'Aguardando atendimento',
    equipe: '-',
    usuario: '-',
  },
];

const dataSource = [
  {
    key: '1',
    sigla: 'HRG',
    telefone: '3385-0457',
    atualizado: '30/11/2021 20:12',
    dias: 1,
    por: 'Marisa',
    unidade: 'Hospital Reginal Gama',
  },
  {
    key: '2',
    sigla: 'UPA NB',
    telefone: '3385-0447',
    atualizado: '30/11/2021 21:40',
    dias: 0,
    por: 'Leonardo da Silva',
    unidade: 'UPA Nucleo Bandeirante',
  },
];

const columns2 = [
  {
    title: 'Regiao',
    dataIndex: 'regiao',
    key: 'regiao',
  },
  {
    title: 'Chamado',
    dataIndex: 'chamado',
    key: 'chamado',
  },
  {
    title: 'Endereço',
    dataIndex: 'endereco',
    key: 'endereco',
  },
  {
    title: 'Paciente',
    dataIndex: 'paciente',
    key: 'paciente',
  },
  {
    title: 'Descrição',
    dataIndex: 'descricao',
    key: 'descricao',
  },
  {
    title: 'situação',
    dataIndex: 'situacao',
    key: 'situacao',
  },
  {
    title: 'Equipe',
    dataIndex: 'equipe',
    key: 'equipe',
  },
  {
    title: 'Usuário',
    dataIndex: 'usuario',
    key: 'usuario',
  },
];

const columns = [
  {
    title: 'Sigla',
    dataIndex: 'sigla',
    key: 'sigla',
  },
  {
    title: 'Telefone',
    dataIndex: 'telefone',
    key: 'telefone',
  },
  {
    title: 'Atualizado em',
    dataIndex: 'atualizado',
    key: 'atualizado',
  },
  {
    title: 'Dias',
    dataIndex: 'dias',
    key: 'dias',
  },
  {
    title: 'Por',
    dataIndex: 'por',
    key: 'por',
  },
  {
    title: 'Unidade',
    dataIndex: 'unidade',
    key: 'unidade',
  },
];

const { Search } = Input;

const { TabPane } = Tabs;

const data = [
  {
    title: '(CBMDF) MT GAEPH 59 (Meto) - MR56',
  },
  {
    title: '(CBMDF) MT GAEPH 59 (Meto) - MR57',
  },
  {
    title: '(CBMDF) MT GAEPH 59 (Meto) - MR58',
  },
  {
    title: '(CBMDF) MT GAEPH 59 (Meto) - MR59',
  },
];

const onSearch = value => console.log(value);

const ModuloDashBoard = () => {

  return (    
    
    <>
    
      <div className="row">
        <Card title="" style={{ width: 175, height:550 }}>
          
          <br />
          <br />

          <Tag color="red">sem ramal vinculado!</Tag>

          <br />
          <br />

          <p>Atenção!</p>

          <h6>Não há um ramal vinculado ao seu computador. Solicite ajuda ao suporte através do telefone SUPORTE 3213-5289.</h6>
          <h6>Infome que o nome de seu computador é xx-xxx-xxx.</h6>

        </Card>

        <Card title="" style={{ width: 1000, height:550 }}>
          
          <Tabs defaultActiveKey="2">
            <TabPane
              tab={
                <span>
                  <TeamOutlined />
                  Equipes
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

              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description=""
                    />
                  </List.Item>
                )}
              />

              <hr />

              <Tag color="yellow">Amarelo:<p>Equipe não foi atualizada hoje.</p></Tag>

              <Tag color="green">Verde:<p>Atualizado e OK.</p></Tag>
              
              <Tag color="purple">Fundo purple:<p>Atualizado hoje, mas está sem veículo.</p></Tag>

              <Tag color="orange">Laranja:<p>Equipe está ativa..</p></Tag>
              
              <Tag color="red">Vermelho:<p>Equipe desativada.</p></Tag>

            </TabPane>
            <TabPane
              tab={
                <span>
                  <SisternodeOutlined />
                  Situação hospitalar
                </span>
              }
              key="2"
            >
              <Tabs defaultActiveKey="2">
                <TabPane
                  tab={
                    <span>
                      <BuildOutlined />
                      Unidades
                    </span>
                  }
                  key="12"
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

                  <hr />

                  <Tag color="green">Verde:<p>Unidade não tem restrição.</p></Tag>

                  <Tag color="red">Vermelho:<p>Unidade tem restrição cadastrada.</p></Tag>

                  <Tag color="yellow">Amarelo:<p>Unidade sem telefone de contato cadastrado.</p></Tag>

                </TabPane>
              </Tabs>


            </TabPane>

            <TabPane
              tab={
                <span>
                  <SubnodeOutlined />
                  Regulação médica (somente leitura)
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

              <br />
              <br />

              <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="Regiao 05" key="1">
                  <Table dataSource={dataSource2} columns={columns2} />
                </Panel>
                <Panel header="Regiao 06" key="2">
                  <Table dataSource={dataSource2} columns={columns2} />
                </Panel>
              </Collapse>,

            </TabPane>

            <TabPane
              tab={
                <span>
                  <FileTextOutlined />
                  Histórico
                </span>
              }
              key="4"
            >
              
              
              <Tabs defaultActiveKey="2">
                <TabPane
                  tab={
                    <span>
                      <FilterOutlined />
                      Filtros
                    </span>
                  }
                  key="41"
                >
                  
                  <div
                    id="scrollableDiv"
                    style={{
                      height: 300,
                      overflow: 'auto',
                      padding: '0 16px',
                      border: '1px solid rgba(140, 140, 140, 0.35)',
                    }}
                  >
                    <br />
                    
                    <Form.Item label="Ocorrência">
                      <Input placeholder="Número da ocorrência" />
                    </Form.Item>

                    <Form.Item label="Inicio e Fim">
                      <Space direction="vertical" size={12}>
                        <RangePicker showTime />
                      </Space>
                    </Form.Item>

                    <Form.Item label="Solicitante">
                      <Input placeholder="Ex: Diego" />
                    </Form.Item>

                    <Form.Item label="Paciente">
                      <Input placeholder="Ex: Flavia" />
                    </Form.Item>

                    <Form.Item label="Telefone">
                      <Input placeholder="Ex: 6132135260" />
                    </Form.Item>

                    <Form.Item label="TARM">
                      <Input />
                    </Form.Item>

                    <Form.Item label="Motivo">
                      <Input placeholder="" />
                    </Form.Item>

                    <Form.Item label="Cidade">
                      <Input />
                    </Form.Item>

                    <Form.Item label="Bairro">
                      <Input placeholder="" />
                    </Form.Item>

                    <Form.Item label="Endereço">
                      <Input placeholder="Ex: Quadra 206" />
                    </Form.Item>

                    <Form.Item label="Referencia">
                      <Input placeholder="Ex: Padaria" />
                    </Form.Item>

                    <Form.Item label="Queixa">
                      <Input placeholder="Ex: Passando Mal" />
                    </Form.Item>

                    <Form.Item label="Qualificação">
                      <Input />
                    </Form.Item>

                    <Form.Item label="Situação">
                      <Input placeholder="" />
                    </Form.Item>

                    <Form.Item label="Medico">
                      <Input />
                    </Form.Item>

                    <Form.Item label="Equipe">
                      <Input placeholder="" />
                    </Form.Item>

                    <Form.Item label="Tipo diagnostico.">
                      <Input />
                    </Form.Item>

                    <Form.Item label="Diagnostico">
                      <Input placeholder="" />
                    </Form.Item>

                    <Form.Item>
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>somente chamados de homologação</Checkbox>
                      </Form.Item>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Procurar
                      </Button>
                    </Form.Item>
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <ExperimentOutlined />
                      Personalizar colunas
                    </span>
                  }
                  key="42"
                >
                  Conteudo Personalizar colunas
                </TabPane>
              </Tabs>



            </TabPane>

          </Tabs>

        </Card>
      </div>

    </>

  )
}

export default ModuloDashBoard