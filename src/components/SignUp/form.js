import React, { useState, useContext } from "react";
import { ProviderContext } from "../Provider";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default function() {
  const history = useHistory();
  const provider = useContext(ProviderContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    return (
      email.length > 0 &&
      password.length > 0 &&
      password === passwordConfirmation
    );
  };

  const onSubmit = event => {
    event.preventDefault();

    provider
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => history.push(ROUTES.EDIT_PROFILE))
      .catch(error => setError(error));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          autoFocus
          type="email"
          placeholder="email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <input type="submit" value="Sign Up!" disabled={!validate()} />

        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}
