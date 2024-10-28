export const isNull = (value: string | null | undefined): boolean =>
  value === null || value === undefined || value === "";

export const isAnyNull = (...value: any[]): boolean => {
  for (let i = 0; i < value.length; i++) {
    const value_element = value[i];
    if (isNull(value_element)) {
      return true;
    }
  }
  return false;
};
