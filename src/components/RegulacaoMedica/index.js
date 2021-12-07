import React from 'react'
import { Card, Tag } from 'antd'

const ModuloRegulacaoMedica = () => {

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
      </div>
    </>
  )
}

export default ModuloRegulacaoMedica