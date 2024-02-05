import React, { useState } from 'react';
import { Form, Input, Button, Cascader } from 'antd';
import axios from 'axios';
import CityOptions from './CityOptions'
function TenantForm() {
  const [form] = Form.useForm();
  const handleSubmit = values => {
    //e.preventDefault();
  if (values.region){
  values.region = values.region.join(', ');
  };
    // 调用 API 来创建租户
    axios.post('/tenant', values)
    .then(response => {
      console.log('Success:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    }); 
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h1>Tenant Info</h1>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="联系方式" name="contact">
          <Input  />
        </Form.Item>
        <Form.Item label="住址" name="province">
          <Input />
        </Form.Item>
        <Form.Item label="地址" name="region" rules={[{ required: true,message: '请选择'}]}>
          <Cascader options={CityOptions} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TenantForm;

