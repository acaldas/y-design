// @ts-ignore
export const getComputedStyles = (baseStyles, customStyles) => {
  const _definition = customStyles &&
    {
      ...baseStyles._definition,
      ...customStyles._definition
    };

  return customStyles ? {...customStyles, _definition} : baseStyles;
}