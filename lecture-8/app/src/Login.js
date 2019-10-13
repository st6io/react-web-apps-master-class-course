import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Loading, LoginForm } from './components';

const LOG_IN = gql`
  mutation LogIn($email: String!) {
    logIn(email: $email)
  }
`;

export default function Login() {
  const client = useApolloClient();

  const [login, { loading, error }] = useMutation(LOG_IN, {
    onCompleted: ({ logIn: loginData }) => {
      localStorage.setItem('token', loginData);
      client.writeData({ data: { authenticated: true } });
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>An error occurred</p>;

  return <LoginForm login={login} />;
}
