# A React application designed to audibly and visually represent the process of sorting algorithms.

This app is a visual way to see insertion sort, bubble sort, and selection sort in action. Available at: https://nidhal-abidi.github.io/AlgoAnimation/

Inspired by: Timo Bingmann ( https://www.youtube.com/watch?v=kPRA0W1kECg )

# Implementation

By clicking on the button "New Random Array", the user generates an array of floats (between 0 and 1) in random order. This array is stored inside a state and is used to generate the bars. The bar's height (% of container's height) = arr[i] \* 100

By clicking on a button for any given algorithm, the user can see the array bars being sorted and can also hear sounds.

The user can mute/unmute sounds and can set the speed to low (depicted by a turtle's pic) or to high (depicted by a rabbit's pic).

The sounds are made using the Web Audio API.

All the array comparisons and accesses are recorded and shown to the user in real-time.

# The Algorithms

All the algorithms used in this application are inside the file 'src/sortingAlgorithms/algorithms.js'.

The animation of all the algorithms is possible by following the same idea: record all the swaps and comparisons that happen during the sort. At the end return the sorted array and another array called swaps.

swaps's elements are objects: { indices: [i, j], type: "swap" } where 'type' is "swap" is two elements will be swapped or 'comp' if the algorithm is just comparing the two values

# Potential Improvements in the Future

Adding a toggle switch where the user can choose to see/listen to a single algorithm or multiple algorithms on the same page to compare their execution.
