export function coincidence(arr1, arr2) {
  arr2 = arr2.filter(Boolean);

  const variation = {};

  for (let item2 of arr2) {
    let count = 0;

    for (let item1 of arr1) {
      if (String(item1).toLowerCase().indexOf(item2.toLowerCase()) > -1) {
        count++;
      }
    }

    variation[item2] = count;
  }

  for (let item of arr2) {
    if (!variation[item]) {
      return false;
    }
  }

  return true;
}
