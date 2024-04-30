export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError(`${set} is not a valid set`);
  }
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not a valid array`);
  }
  const bools = array.map((elem) => set.has(elem));
  return bools.every((item) => Boolean(item));
}
