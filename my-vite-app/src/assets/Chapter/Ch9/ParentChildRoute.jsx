import React from "react";
import { BrowserRouter as Router, Route ,NavLink} from "react-router-dom";

export function UsersMain() {
  return <p>Users content...</p>;
}
export function UserHeader() {
  return <strong>User Header...</strong>;
}

export default function ParentChildRoute() {
  return (
    <Router>
      <section>
        <nav>
          <NavLink
            exact
            to="/"
            style={{ padding: "0 10px" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Home
          </NavLink>
        </nav>
        <header>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/usersHead" component={UserHeader} />
          {/* <Route exact path="/groups" component={GroupsHeader} /> */}
        </header>
        <main>
          <Route exact path="/users" component={UsersMain} />
          {/* <Route exact path="/groups" component={GroupsMain} /> */}
        </main>
      </section>
    </Router>
  );
}
