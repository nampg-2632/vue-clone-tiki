export const toVND = (value) => {
  if (value === undefined) {
    return "NaN đ";
  }
  const stringValue = value.toString();
  return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
};
