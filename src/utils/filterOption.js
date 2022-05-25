export const filterOption = (input, option) => {
  input = input.trim().toLowerCase();
  return option.children?.toLowerCase()?.includes(input);
};