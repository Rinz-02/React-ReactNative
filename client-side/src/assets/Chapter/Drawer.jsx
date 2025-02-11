import React, { useState } from "react";
import { First, Second, Third } from "./DrawerComponent";
import {Drawer} from "@mui/material";
import { BrowserRouter as Router, Route, Switch, Link } from "react-dom";
import { ListItem,ListItemText } from "@mui/material";

 export function FunctionDrawer({ link }) {
  const [open, setOpen] = useState(false);
  function toggleDrawer(type, key) {
    if (type == "keydown" && (key == "tab" || key == "shift")) {
      return;
    }
    setOpen(!open);
  }
  return (
    <Router>
      <button onClick={toggleDrawer}>Open Drawer</button>
      <section>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {link.map((link) => (
              <ListItem button key={link.url} component={link} to={link.url}>
                <Switch>
                    <Route exact path={link.url} render={() => (
                        <ListItemText
                        primary={link.name}
                        primaryTypographyProps={{color : "primary"}}/>
                    )}/>
                    <Route path="" 
                    render={() => <ListItemText primary={link.name}/>}/>
                </Switch>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}



FunctionDrawer.defaultProps = {
  link: [
    { url: "/first", name: "First Page" },
    { url: "/second", name: "Second Page" },
    { url: "/third", name: "Third Page" },
  ],
};
