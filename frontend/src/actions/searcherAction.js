import { PALABRA_BUSCADOR } from "./types";

export const palabraBuscador = palabra => dyspatch => {
  dyspatch({
    type: PALABRA_BUSCADOR,
    payload: palabra
  });
};

