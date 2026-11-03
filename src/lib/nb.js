const SHORT = /(^|[\s(“"])(a|an|the|to|of|in|on|at|by|for|and|or|but|so|I|my|is|it|as|up|no|not|from|with|into|than|&) /gi;

export function nb(text) {
  let out = text;
  for (let i = 0; i < 2; i++) out = out.replace(SHORT, (m, p, w) => `${p}${w} `);
  return out;
}
