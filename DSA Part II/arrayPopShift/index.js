let arr = [1, 2, 3, "hii", "hello", true, { person: { name: "John", age: 25 } }];

for (let i = 0;i<arr.length;i++) {
  console.log(arr[i]);
}

console.log(".................................................Push ....................................................");
arr.push(10);
arr.push("goodbye");
arr.push(false);
arr.push({ person: { name: "Jane", age: 30 } });

for (let i = 0;i<arr.length;i++) {
    console.log(arr[i]);
}
  
console.log("................................................. unshift ....................................................");
arr.unshift(0);
arr.unshift("hi");
arr.unshift(true);
arr.unshift({ person: { name: "John", age: 30 } });

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log(".................................................pop ....................................................");
arr.pop();
arr.pop();
arr.pop();
arr.pop();

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log("................................................. shift ....................................................");
arr.shift();
arr.shift();
arr.shift();
arr.shift();

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}