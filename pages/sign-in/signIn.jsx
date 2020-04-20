import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignIn = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="login">Login</Label>
        <Input type="text" name="password" id="login" placeholder="login" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="e-mail" />
      </FormGroup>
      <Button>Sign In</Button>
    </Form>
  );
}

export default SignIn;