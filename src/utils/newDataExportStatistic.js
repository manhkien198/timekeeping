export const dataExport = data => {
  const newData = data.map((x, idx) => ({
    ...x,
    rest: x.pdaysUsed ? 12 - x.pdaysUsed : 12,
    id: idx + 1,
    total_day_off: 12,
  }));
  return newData;
};
