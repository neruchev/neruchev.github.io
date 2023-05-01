const media = window.matchMedia("(prefers-color-scheme: dark)");

let state = media.matches;

const changeTheme = (newState) => {
  state = newState;

  if (newState) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark");
  }
};

changeTheme(state);

document
  .querySelector(".candle")
  .addEventListener("click", () => changeTheme(!state));

media.addEventListener("change", ({ matches }) => changeTheme(matches));
