import lodash from "lodash";
function hello(to = "world") {
  const txt = `hello ${to}`;
  alert(txt);
  return txt;
}
function useLodash() {
  return lodash;
}
export {
  hello,
  useLodash
};
