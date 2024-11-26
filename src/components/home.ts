// @ts-check
import { normalizeName, state } from "../common";
import m from "mithril";

export const HomeComponent = {
  view: () => {
    let div = m("div#home");
    div.children.push(
      m("img#app-icon", { src: "img/bK.svg" }),
      m("h1#app-name", "Chess Board"),
    );
    if (state.whiteAddr === window.webxdc.selfAddr) {
      div.children.push(m("h3.sub", "Waiting for opponent..."));
    } else {
      if (state.whiteAddr) {
        let status;
        if (state.request) {
          if (state.request.addr === window.webxdc.selfAddr) {
            status = [
              "Waiting for ",
              m("div.tag.white", normalizeName(state.whiteName)),
              " to accept...",
            ];
          } else {
            status = [
              m("div.tag.black", normalizeName(state.request.name)),
              " requested to join ",
              m("div.tag.white", normalizeName(state.whiteName)),
            ];
          }
        } else {
          status = [
            m("div.tag.white", normalizeName(state.whiteName)),
            " is waiting for opponent...",
          ];
        }
        div.children.push(m("h3.sub", status));
      }
      if (!state.request) {
        div.children.push(
          m(
            "a#join-btn",
            {
              class: "btn",
              onclick: () => joinGame(),
            },
            state.whiteAddr ? "Join Game" : "Start Game",
          ),
        );
      }
    }
    return div;
  },
};

function joinGame() {
  const name = window.webxdc.selfName;
  const addr = window.webxdc.selfAddr;
  if (!state.whiteAddr) {
    const info = normalizeName(name) + " is waiting for an opponent";
    const update = {
      payload: { whiteAddr: addr, whiteName: name },
      info,
      summary: info,
      notify: { "*": info },
    };
    window.webxdc.sendUpdate(update, "");
  } else if (!state.blackAddr && state.whiteAddr !== addr) {
    const info = normalizeName(name) + " requested to join game";
    const update = {
      payload: {
        request: state.whiteAddr,
        addr,
        name,
      },
      info,
      notify: { [state.whiteAddr]: info },
    };
    window.webxdc.sendUpdate(update, "");
  } else {
    console.log("Warning: ignoring call to joinGame()");
  }
}
