export const bubbleSort = (arr) => {
  let swapped = false
  do {
    swapped = false
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swapped = true
        ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
      }
    }
  } while (swapped)
  return arr
}
