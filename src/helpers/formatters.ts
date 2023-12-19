import colors from '@styles/colors';
import prBrLocale, {addMinutes, format, parseISO} from 'date-fns';

function productId(id: number): string {
  let idParsedToString = String(id);
  while (idParsedToString.length < 6) {
    idParsedToString = `0${idParsedToString}`;
  }
  return idParsedToString;
}

function productAmount(amount: number, address: string): number {
  if (address === 'NAO INFORMADO') {
    return amount * -1;
  }
  return amount;
}

function date(value: string | Date, mask = 'dd/MM/yyyy'): string {
  if (typeof value === 'string') {
    const valueNormalized = addMinutes(
      parseISO(value),
      parseISO(value).getTimezoneOffset(),
    );
    const valueParsed = format(valueNormalized, mask, {
      locale: prBrLocale,
    });
    return valueParsed;
  }
  const valueParsed = format(value, mask);
  return valueParsed;
}

function productAmountColor(
  addressDamage: boolean | number,
  address: string,
): string {
  if (addressDamage) {
    return colors.red500;
  }
  if (address === 'NAO INFORMADO') {
    return colors.yellow600;
  }
  return colors.purple800;
}

export default {productId, productAmount, productAmountColor, date};
