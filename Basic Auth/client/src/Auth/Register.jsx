import React, { useState } from "react";
import { Card, Flex, Typography, Form, Input, Button, Spin, Alert } from "antd";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup.jsx";

function Register() {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className="form-container">
      <Flex>
        {/* form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access!
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Enter your Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: `please input your full name!`,
                },
              ]}
            >
              <Input size="large" placeholder="Enter your Full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: `please input your Email name`,
                },
                {
                  type: "email",
                  message: "The input is not valid Email!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter you Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: `please input your Password`,
                },
              ]}
            >
              <Input size="large" placeholder="Enter you Password" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: `please input your Confirm Password`,
                },
              ]}
            >
              <Input size="large" placeholder="Re-enter you Password" />
            </Form.Item>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <Form-Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin /> : "Create Account"}
                "Create Account"
              </Button>
            </Form-Item>
            <Form-Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign in
                </Button>
              </Link>
            </Form-Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
}

export default Register;
