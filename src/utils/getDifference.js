export function getDifferenceIsSave(array1, array2) {
  const differenceIsSave = array1.filter((object1) =>
    array2.some(
      (object2) =>
        object1.id === object2.id && object1.isSave !== object2.isSave
    )
  );

  return differenceIsSave;
}

export function getDifferenceObj(array1, array2) {
  const differenceObj = array1.filter(
    (object1) => !array2.some((object2) => object1.id === object2.id)
  );

  return differenceObj;
}

//  EXAMPLE :
/*

const arr1 = [{ id: 1, name: "Tom" }];
const arr2 = [
  { id: 1, name: "Tom" },
  { id: 2, name: "John" },
];

const difference = [
  ...getDifference(arr1, arr2), 
  ...getDifference(arr2, arr1)
];

*/
