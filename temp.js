const arr = [
  { id: 1, title: "hi" },
  { id: 2, title: "hi--2" },
  { id: 3, title: "hi--3" },
  { id: 4, title: "hi-4", x: { id: 3, title: "hi--3" } },
  { id: 5, title: "hi-5" },
  { id: 6, title: "hi-6" },
];
let ind = 4;
let key = "x";

let one = arr[ind - 1];



let arr2 = [...arr.slice(0, ind - 1), ...arr.slice(ind, arr.length)];

console.log(one);
console.log(arr2);

let updatedOne = [...arr2,{...one,x:{title:"fjwefiowe"}}]


console.log(updatedOne);
