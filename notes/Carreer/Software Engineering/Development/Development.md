
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


## Fib o(n) with memoization

Here is a way to generically memoize any function, written in Python:
```
def memoize(f): 
	storedValues={} 
	def doit(arg): 
	if not storedValues.has_key(arg):
		storedValues[arg] = f(arg) 
		return storedValues[arg] 
return doit

```

fib = memoize(fib) 
>>> fib(10)