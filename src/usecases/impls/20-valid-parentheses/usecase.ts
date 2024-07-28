// O(n)
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Map<string, string> = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const keys = [...map.keys()];
  for (const char of s) {
    if (keys.includes(char)) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top === undefined || map.get(top) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
