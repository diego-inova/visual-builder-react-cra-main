import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'

const mapStateToProps = ({ user, settings, dispatch }) => ({
  dispatch,
  user,
  authProvider: settings.authProvider,
})

const Login = ({ dispatch, user }) => {
  const onFinish = (values) => {
    dispatch({
      type: 'user/LOGIN',
      payload: values,
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div className="pt-2 pb-5 text-center">
        <h1>INOVA COMUNICAÇÕES</h1>
        <h1>E SISTEMAS</h1>
      </div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-32 mb-3">Conecte-se</div>
        
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="mb-4"
          initialValues={{ email: 'demo@visualbuilder.cloud', password: 'VisualBuilder' }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Button
            type="primary"
            className="text-center w-100 btn btn-success"
            htmlType="submit"
            loading={user.loading}
          >
            <strong>Entrar</strong>
          </Button>
        </Form>
        <Link to="/auth/forgot-password" className="vb__utils__link">
          Esqueceu a senha?
        </Link>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Não tem uma conta?</span>
        <Link to="/auth/register" className="vb__utils__link">
          Inscrever-se
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Login)
