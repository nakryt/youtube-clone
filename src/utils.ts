import numeral from "numeral";

export const prettyPrintStat = (stat: number | string) =>
  stat ? `${numeral(stat).format("0.0a")}` : "0";
