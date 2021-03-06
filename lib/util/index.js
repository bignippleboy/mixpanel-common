export * from './array';

// generic data-manipulation utils

export function abbreviateNumber(number, precision) {
  number = parseFloat(number);
  precision = (precision === undefined) ? 1 : precision;

  let large_numbers = [
    [Math.pow(10, 15), 'Q'],
    [Math.pow(10, 12), 'T'],
    [Math.pow(10, 9), 'B'],
    [Math.pow(10, 6), 'M'],
    [Math.pow(10, 3), 'K'],
  ];
  let suffix = '';

  for (let i = 0; i < large_numbers.length; i++) {
    let bignum = large_numbers[i][0];
    let letter = large_numbers[i][1];

    if (Math.abs(number) >= bignum) {
      number /= bignum;
      suffix = letter;
      break;
    }
  }

  let is_negative = number < 0;
  let fixed = number.toFixed(precision).split('.');
  let formatted = commaizeNumber(Math.abs(parseInt(fixed[0], 10)));

  if (fixed[1] && parseInt(fixed[1], 10) !== 0) {
    formatted += '.' + fixed[1];
  }

  return (is_negative ? '-' : '') + formatted + suffix;
}

export function capitalize(string) {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
}

export function commaizeNumber(number, no_conversion) {
  switch (typeof number) {
    case 'number':
      if (isNaN(number)) {
        return number;
      }
      number = number.toString();
      break;
    case 'string':
      // noop
      break;
    default:
      return number;
  }

  let neg = false;
  if (number[0] === '-') {
    neg = true;
    number = number.slice(1);
  }

  // Parse main number
  let split = number.split('.');
  let commaized = no_conversion ? split[0] : parseInt(split[0] || 0, 10).toString();

  if (commaized.length) {
    commaized = commaized.split('').reverse().join('');
    commaized = commaized.match(/.{1,3}/g).join(',');
    commaized = commaized.split('').reverse().join('');
  }

  if (split[1]) {
    // Add decimals, if applicable
    commaized += '.' + split[1];
  }

  if (neg) {
    commaized = '-' + commaized;
  }

  return commaized;
}

export function extend() {
  return Object.assign(...[{}, ...Array.prototype.slice.call(arguments)]);
}

export function htmlEncodeString(val) {
  return String(val)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\r/g, '&#013;')
    .replace(/\n/g, '&#010;')
    ;
}

// return object with new keys and same values
export function mapKeys(obj, func) {
  return Object.keys(obj).reduce((ret, k) => Object.assign(ret, {[func(k, obj[k])]: obj[k]}), {});
}

// return object with same keys and new values
export function mapValues(obj, func) {
  return Object.keys(obj).reduce((ret, k) => Object.assign(ret, {[k]: func(obj[k], k)}), {});
}

export function nestedObjectDepth(obj) {
  return typeof obj === 'object' ? nestedObjectDepth(obj[Object.keys(obj)[0]]) + 1 : 0;
}

export function nestedObjectKeys(obj, depth=1) {
  const keys = new Set();
  getKeys(obj, depth, keys);
  return Array.from(keys);
}

function getKeys(obj, depth, keySet) {
  if (nestedObjectDepth(obj) > depth) {
    Object.values(obj).forEach(value => getKeys(value, depth, keySet));
  } else {
    Object.keys(obj).forEach(key => keySet.add(key));
  }
}

export function objectFromPairs(pairs) {
  let object = {};
  pairs.forEach(pair => { object[pair[0]] = pair[1]; });
  return object;
}

export function objToQueryString(params) {
  return Object.keys(params).map(k => [k, encodeURIComponent(params[k])].join('=')).join('&');
}

export function parseUrl(url) {
  const parser = document.createElement('a');
  parser.href = url;
  return {
    host: parser.host,
    pathname: parser.pathname,
    url: parser.url,
  };
}

// filter object to include only given keys
export function pick(obj, keys) {
  return keys.reduce((ret, k) => Object.assign(ret, {[k]: obj[k]}), {});
}

export function pluralize(singular, number, plural) {
  plural = plural || (singular + 's');
  return number === 0 || number > 1 ? plural : singular;
}

export function sum(arr) {
  let _sum = 0;
  for (let i = 0; i < arr.length; i++) {
    _sum += arr[i];
  }
  return _sum;
}

export function truncateMiddle(string, len) {
  if (string) {
    if (len <= 3) {
      return string.substr(0, len);
    } else if (string.length <= len) {
      return string;
    } else {
      var start = Math.ceil((len - 3) / 2);
      var end = -1 * Math.floor((len - 3) / 2);
      return string.substr(0, start) + '...' + (end ? string.substr(end) : '');
    }
  }
  return string;
}
