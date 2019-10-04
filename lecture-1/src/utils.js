import { get } from 'lodash';

export const currency = {
  usd: 'USD',
  bgn: 'BGN',
  eur: 'EUR',
};

export const EUR_TO_BGN_RATE = 1.95583;

const random = (min, max) => Math.random() * (max - min) + min;

const getCurrencies = () => {
  const usdToBgn = random(1.6564, 1.7923, 4);
  const usdToEur = usdToBgn / 1.95583;

  return {
    [currency.usd]: {
      [currency.bgn]: usdToBgn,
      [currency.eur]: usdToEur,
      [currency.usd]: 1,
    },
    [currency.bgn]: {
      [currency.usd]: 1 / usdToBgn,
      [currency.eur]: 1 / EUR_TO_BGN_RATE,
      [currency.bgn]: 1,
    },
    [currency.eur]: {
      [currency.usd]: 1 / usdToEur,
      [currency.bgn]: EUR_TO_BGN_RATE,
      [currency.eur]: 1,
    },
  };
};

const currentCurrencies = getCurrencies();

export const toFixed = (value, precision = 2) => {
  const f = 10 ** precision;

  return Math.round(value * f) / f;
};

export const convertCurrency = (
  value,
  currency,
  targetCurrency,
  precision = 2,
) => {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }

  const ratio = get(currentCurrencies, `${currency}.${targetCurrency}`, NaN);
  if (Number.isNaN(ratio)) {
    throw new Error(`cannot convert ${currency} to ${targetCurrency}`);
  }

  const converted = value * ratio;

  return toFixed(converted, precision);
};

const delay = (result, timeout = 250) =>
  new Promise(resolve => setTimeout(() => resolve(result), timeout));

export const fetchTempertature = () => delay('20C', 1000);

export const fetchHumidity = () => delay('54%');
