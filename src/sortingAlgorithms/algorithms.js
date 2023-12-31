export const bubbleSort = (arr) => {
  // `swaps` records all the swaps & comparisons that happen so that we can use them for the animations.
  let swaps = []
  let swapped = false
  do {
    swapped = false
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swapped = true
        swaps.push({ indices: [i - 1, i], type: "swap" })
        ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
      } else {
        swaps.push({ indices: [i - 1, i], type: "comp" })
      }
    }
  } while (swapped)
  return [arr, swaps]
}

export const selectionSort = (array) => {
  let swaps = []
  let n = array.length
  for (let i = 0; i < n; i++) {
    let min = i
    for (let j = i + 1; j < n; j++) {
      swaps.push({ indices: [min, j], type: "comp" })
      if (array[j] < array[min]) {
        min = j
      }
    }
    if (min !== i) {
      swaps.push({ indices: [i, min], type: "swap" })
      let tmp = array[i]
      array[i] = array[min]
      array[min] = tmp
    }
  }
  return [array, swaps]
}

export const insertionSort = (arr) => {
  let swaps = []

  let n = arr.length
  let i, key, j
  for (i = 1; i < n; i++) {
    key = arr[i]
    j = i - 1
    while (j >= 0) {
      swaps.push({ indices: [j, i], type: "comp" })
      if (arr[j] > key) {
        swaps.push({ indices: [j, j + 1], type: "swap" })
        arr[j + 1] = arr[j]
        j = j - 1
      } else {
        break
      }
    }
    arr[j + 1] = key
  }
  return [arr, swaps]
}
