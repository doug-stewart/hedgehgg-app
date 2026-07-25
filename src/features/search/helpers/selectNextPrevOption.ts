export const selectNextPrevOption = (
  offset: number,
  suggestions: string[],
  links: string[],
  current: string,
) => {
  const options = [...suggestions, ...links];
  if (options.length === 0) return;
  const index = options.indexOf(current, 0);
  const newOption = options.at(index + offset) || options.at(offset > 0 ? 0 : -1);
  return newOption;
};
