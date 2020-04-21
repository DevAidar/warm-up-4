const foo = (arr, minLength, maxLength) => arr.filter((str) => (str.length >= minLength && str.length <= maxLength));

console.log(foo(['dog', 'degree', 'castle', 'quick brown fox'], 4 ,10))
