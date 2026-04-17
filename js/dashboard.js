import { auth, db } from "./firebase.js";

$(function () {
  let name = localStorage.getItem("username");

  if (name) {
    $("#welcome-text").text("Welcome, " + name);
  }
});