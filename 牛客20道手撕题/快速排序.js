const arr = [1, 8, 4, 5, 3, 9, 10, 7, 6, 2];

function quick_sort(arr, l, r) {
  if (l >= r) return;
  let i = l - 1,
    j = r + 1,
    x = arr[Math.floor((l + r) / 2)];
  while (i < j) {
    do i++;
    while (arr[i] < x);
    do j--;
    while (arr[j] > x);
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  quick_sort(arr, l, j);
  quick_sort(arr, j + 1, r);
}

quick_sort(arr, 0, arr.length - 1);
console.log(arr);
