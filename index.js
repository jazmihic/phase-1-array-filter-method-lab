// Code your solution here
function findMatching(array, targetName) {
  const anotherArray = array.filter(
    (arr) => arr.toLowerCase() === targetName.toLowerCase()
  );
  return anotherArray;
}
function fuzzyMatch(array, letter) {
  const anotherArray = array.filter((arr) => arr.startsWith(letter));
  return anotherArray;
}
function matchName(array, targetName) {
  const anotherArray = array.filter((arr) => arr.name === targetName);
  return anotherArray;
}
