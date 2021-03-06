import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import NewProjectForm from "./form";
import { ProviderContext } from "../Provider";
import { SessionContext } from "../Session";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const fakebase = {};
  const fakesession = {
    uid: 123
  };

  act(() => {
    ReactDOM.render(
      <MemoryRouter>
        <ProviderContext.Provider value={fakebase}>
          <SessionContext.Provider value={fakesession}>
            <NewProjectForm />
          </SessionContext.Provider>
        </ProviderContext.Provider>
      </MemoryRouter>,
      div
    );
  });
});
