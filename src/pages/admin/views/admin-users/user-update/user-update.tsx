import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  email?: string;
  phone?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const UserUpdateView: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: "Please input your Email!" }]}
    >
      <Input placeholder="Update Email" />
    </Form.Item>

    <Form.Item<FieldType>
      label="Phone"
      name="phone"
      rules={[{ required: true, message: "Please input your Phone!" }]}
    >
      <Input placeholder="Update Phone" />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default UserUpdateView;
