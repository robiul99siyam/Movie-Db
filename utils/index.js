export function replaceId(array) {
  return array.map((item) =>
    JSON.parse(
      JSON.stringify({
        id: item._id?.toString(),
        ...item,
        _id: undefined,
      })
    )
  );
}
export function replaceIdObject(obj) {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
}
