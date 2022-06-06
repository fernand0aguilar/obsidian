
- [[DAO]]
- [[Introduction to Cybersecurity]]

## Array Diff

difference function, which subtracts one list from another and returns the result.

It should remove all values from list `a`, which are present in list `b` keeping their order.

```
function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e) ) 
}
```


## Count Ocurrences #

```

function getCount(str) {
	return (str.match(/[aeiou]/ig)||[]).length;
	const vowels = ['a', 'e', 'i', 'o', 'u']
	return str.split('').reduce((acc, char) => {
		  if(vowels.includes(char)) acc += 1
		  return acc
	  }, 0);;
}
```
