import React from 'react'
import { Table, Card, Input } from 'antd'

const { Search } = Input;
const onSearch = value => console.log(value);

const dataSource = [
  {
    especialidade: 'HRAS (Hospital Asa Sul), Tel:34457690, ASA SUL',
    band: 3,
    med: 3,
    dois: 3,
    vm: 3,
    leitos: 3/3,
    data: '09/09/20 11:38',
  },
];

const columns = [
  {
    title: 'Especialidade',
    dataIndex: 'especialidade',
    key: 'especialidade',
  },
  {
    title: 'Band',
    dataIndex: 'band',
    key: 'band',
  },
  {
    title: 'Med',
    dataIndex: 'med',
    key: 'med',
  },
  {
    title: '02',
    dataIndex: 'dois',
    key: 'dois',
  },
  {
    title: 'VM',
    dataIndex: 'vm',
    key: 'vm',
  },
  {
    title: 'Leitos',
    dataIndex: 'leitos',
    key: 'leitos',
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
  },
];

const ModuloIntranet = () => {

  return (    
    <>
      <div className="row">

        <Card title="Equipes ativas" style={{ width: 750, height:550 }}>
          
          <p>TENHO QUE DECIDIR SE USO UMA MODAL OU NAO.</p>
          <p>SE UTILIZO UMA LISTA OU ATRIBUTOS ESTATICOS.</p>

        </Card>

        <Card title="Situações" style={{ width: 750, height:550 }}>
          
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

export default ModuloIntranet