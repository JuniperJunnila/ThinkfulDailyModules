/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  if (s1.length === 0 || s2.length === 0) return true;
  s1.toLocaleLowerCase().split("").sort();
  s2.toLocaleLowerCase().split("").sort();
  for (let i = 0; i < s1.length; i++) if (s1[i] != s2[i]) return false;
  return true;
}

module.exports = anagram;
