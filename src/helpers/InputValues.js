export const floatOnly = (val) => {
  const cleanLettersRegex = /[^\d.]|\.(?=.*\.)/g;

  if (val && typeof val === 'string') {
    if (val.match(cleanLettersRegex)) {
      val = val.replace(cleanLettersRegex, '');
    }

    return val;
  }

  return null;
};

export const getFloat = (val) => {
  const valCleared = floatOnly(val);

  if (valCleared) {
    val = parseFloat(valCleared.trim());
  }

  if (isNaN(val)) {
    return null;
  }

  return val;
};

export const isNormalInteger = (str) => {
  const n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
};
