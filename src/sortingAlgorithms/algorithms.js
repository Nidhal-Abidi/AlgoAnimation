export const bubbleSort = (arr) => {
  // `swaps` records all the swaps that happen so that we can use them for the animations.
  let swaps = []
  let swapped = false
  do {
    swapped = false
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swapped = true
        swaps.push([i - 1, i])
        ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
      }
    }
  } while (swapped)
  return [arr, swaps]
}
