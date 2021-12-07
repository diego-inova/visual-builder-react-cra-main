import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { Divider } from 'antd';

import { CommentOutlined,
  LogoutOutlined,
  UserOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  WhatsAppOutlined,
  CloudServerOutlined,
  NumberOutlined
 } from '@ant-design/icons';

import style from './style.module.scss'

const mapStateToProps = ({ settings }) => ({ settings })

const Footer = ({ settings: { isContentMaxWidth } }) => {
  return (
    <div
      className={classNames(style.footerDark, {
        [style.footerFullWidth]: !isContentMaxWidth,
      })}
    >
      <div className={`${style.bottom} py-4`}>
        <div className={style.container}>
          { /* <div className="d-sm-flex align-items-sm-center"> */ }

          <div className="d-sm-flex align-items-sm-center">
            <div className={`clearfix mr-sm-auto ${style.logo}`}>
              <div className={style.logo__letter}>
                INOVA
              </div>
            </div>
            
            <div className="flex-column flex-sm-row">
              
              <CommentOutlined />
              <a className="mb-1 mb-sm-0 px-sm-2" href="#">
                Chat
              </a>
              <Divider type="vertical" />
                
              <LogoutOutlined />
              <a className="mb-1 mb-sm-0 px-sm-2" href="#">
                Sair
              </a>
              <Divider type="vertical" />

              <UserOutlined />
              <a className="mb-1 mb-sm-0 px-sm-2" href="#">
                Usuário: Diego Moreira
              </a>
              <Divider type="vertical" />
              
              <InfoCircleOutlined />
              <a className="mb-1 mb-sm-0 px-sm-2" href="#">
                Avisos do Sistema
              </a>
              <Divider type="vertical" />
              
              <WarningOutlined />
              <a className="mb-1 mb-sm-0 px-sm-2" href="#">
                Informar problema
              </a>
              <Divider type="vertical" />
              
              <WhatsAppOutlined />
              <a className="mb-1 mb-sm-0 px-sm-2" href="#">
                Suporte
              </a>
              <Divider type="vertical" />
              
              <CloudServerOutlined />
              <a className="mb-1 mb-sm-0 px-sm-2" href="#">
                hex://xx/
              </a>
              <Divider type="vertical" />
              
              <NumberOutlined />
              <a className="mb-1 mb-sm-0 px-sm-2" href="#">
                xxxx Unregistered
              </a>
              <Divider type="vertical" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Footer)
