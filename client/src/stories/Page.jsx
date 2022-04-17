import React, { Component } from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Header } from './Header';
import { Index } from './Index';
import { NotFound } from './NotFound';
import './page.css';

export class Page extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <article>
          <Header
            user={this.state.authenticated ? this.state.user : undefined}
            onLogin={() => {window.open("http://localhost:3001/api/auth/discord", "_self")}}
            onLogout={() => {window.open("http://localhost:3001/api/auth/logout", "_self"); this.setState({authenticated: false}) }}
          />

          <section>
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </article>
      </BrowserRouter>
    );
  }
};