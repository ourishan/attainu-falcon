import { SQUARE, CUBE, ROOT } from "./actionTypes";

export function squareAction(payload) {
  return {
    type: SQUARE,
    payload
  };
}
export function cubeAction(payload) {
  return {
    type: CUBE,
    payload
  };
}
export function rootAction(payload) {
  return {
    type: ROOT,
    payload
  };
}
