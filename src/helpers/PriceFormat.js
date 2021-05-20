// 1000.00 -> 1 000.00
export const formatPrice = (num) => {
  const spacesRegex = /\B(?=(\d{3})+(?!\d))/g;
  if (num === null || num === undefined) {
    return '0.00';
  }

  if (typeof num === 'number') {
    return num.toFixed(2).replace(spacesRegex, ' ');
  }

  if (typeof num === 'string') {
    return parseFloat(num).toFixed(2).replace(spacesRegex, ' ');
  }
};

// use (9).pad(2) // output - 09
export const PricePad = (num, size) => {
  let s = String(num);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
};

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