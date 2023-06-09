import "./App.css";
import Navigation from "./Navigation";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import YardHoppersApi from "./api";
import jwt_decode from "jwt-decode";
import userContext from "./userContext";

function App() {
  const [token, setToken] = useState(localStorage.getItem("yhToken"));
  const [currUser, setCurrUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("currUser======>", currUser);

  /** useEffect to check state of token.
   * If token, decode token as payload.
   * Make axios request with payload.username.
   * Set response as currUser.
   */
  useEffect(
    function checkToken() {
      async function decodeToken() {
        if (token) {
          const payload = jwt_decode(token);

          YardHoppersApi.token = token;

          const user = await YardHoppersApi.getUserData(payload.username);
          console.log(user)
          setCurrUser(user);
          setIsLoading(false);
        } else {
          setCurrUser(null);
          setIsLoading(false);
        }
      }
      decodeToken();
    },
    [token]
  );

  /** Set joblyToken in localStorage to value of token */
  useEffect(
    function updateLocalStorage() {
      if (token) {
        localStorage.setItem("yhToken", token);
      } else {
        localStorage.removeItem("yhToken");
      }
    },
    [token]
  );

  /** Make request to login, set response as token. */
  async function login({username, password}) {
    const resp = await YardHoppersApi.login( username, password );
    console.log("app.login",resp)
    setToken(resp);
  }

  /** Make request to sign up, set response as token. */
  async function signup(data) {
    console.log("datadatadata =====>>>>>", data)
    const resp = await YardHoppersApi.register(data);
    setToken(resp);
  }

  /** Make request to update user information, set response as currUser */
  async function update(data) {
    const resp = await YardHoppersApi.update(data);
    setCurrUser(resp);
  }

  /** Log out user, reset token. */
  function logout() {
    setToken("");
  }

  if (isLoading) return <i>Loading...</i>;
  return (
    <div className="App">
      <userContext.Provider value={{ currUser }}>
        <BrowserRouter>
          <Navigation />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
