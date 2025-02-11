import React from "react";

const users = [ "User1","User2","User3"];

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    const user = users[id];
    if (user === undefined) {
      reject(`User ${id} not found`);
    } else {
      resolve(user);
    }
  });
}
