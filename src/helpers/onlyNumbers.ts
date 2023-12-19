function onlyNumbers(value: string): boolean {
  const regexOnlyNumbers = /[^0-9]/g;
  const isValueOnlyNumbers = !regexOnlyNumbers.test(value);
  return isValueOnlyNumbers;
}

export default onlyNumbers;
