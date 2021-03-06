// implementing hash table

//a hash table is an array of arrays,
class HashTable {
  constructor (size) {
    this.buckets = new Array(size).fill(0).map(()=> []);
  }

  hash (key) {
    let chars = key.split('');
    return chars.reduce((result, next) => result + next.charCodeAt(0), 0)
  }

// set hashes the key and stores the key and value in an object under the key
  set (key, value) {
    let hashed = hash(key);
    this.buckets[hash % this.buckets.length].push({key : value});
  }
//get retrives the value based on the key

  get (key) {
      let hashed = hash(key);
      if(this.buckets[hash % this.buckets.length].key == key)
        return this.buckets[hash % this.buckets.length].value;
      return null;
  }
};

// implementing an arrayList

class ArrayList {
  constructor (size) {
    this.list = new Array(size);
  }

  append (value) {
    let temp = this.list;
    let list = new Array(this.list.length * 2);
    for (let i = 0; i < this.list.length; i++) {
      list[i] = this.list[i];
    }
    list[this.list.length] = value;
    this.list = list;
  }
};

StringBuilder = function(objectOfWords) {
  sentence = [];
  for (key in objectOfWords) {
      sentence.push(key)
  }
};


//1.1
allUnique = function(str) {
    checkUniques = str.split('').reduce((acc, cur) => {
		  if(acc[cur]) {
        acc[cur] = acc[cur] + 1
      } else {
        acc[cur] = 1;
      }
      return acc},
		 {});

	for (key in checkUniques) {
		if(checkUniques[key] > 1)
			return false;
	}
	return true;
};

//1.2

function strPermutations(str1, str2) {
  if(str1.length !== str2.length)
    return false
  let holder = str1.split('').reduce((acc, cur) => {
    if (acc[cur])
      acc[cur]++
    else
      acc[cur] = 1;
    return acc
  }, {})
  str2.split('').reduce((acc, cur) => {
    if(!acc[cur])
      return false
    else {
      acc[cur]--
    return acc
    }
  }, holder);

  for (key in holder)
    if (holder[key])
      return false
  return true;
}

//1.3

function URLify (str) {
    return str.split('').map((ele) => {
			if(ele === ' ')
				return ele = '%20';
			return ele;
		}).join('');

};

//1.4

palPerm = (str) => {
  let holder = str.split('').reduce((acc, cur) => {
    if(acc[cur])
      acc[cur]++
    else {
      acc[cur] = 1
    }
    return acc;
  }, {} );
  let oddCount = 0;
  for (key in holder)
    if(holder[key] % 2)
      oddCount++
  if(oddCount > 1)
    return false
  return true
};

//1.5
// this works but is a bad solution, i should have identified how to keep track of the count earlier
function oneAway(str1, str2) {
  let larger = [];
  let smaller = [];
  let badCount = 0;
  let replace = (str1.length === str2.length)
  if(Math.abs(str1.length - str2.length) > 1)
    return false;
  if(replace) {
    let holder1 = str1.split('');
    let holder2 = str2.split('');
    for (let i = 0; i< holder1.length; i++) {
      if(holder1[i] !== holder2[i])
        badCount++;
    }
  } else {
    let shorter = str1.length < str2.length ? str1.split('') : str2.split('');
    let longer = str1.length > str2.length ? str1.split('') : str2.split('');
    for (let j = 0; j < longer.length; j++) {
      if (badCount === 1){
        if(longer[j+1] !== shorter[j]) {
          return false
        }
      } else if(longer[j] !== shorter[j]) {
        badCount++;
      }
    }
  }
  if(badCount > 1)
    return false;
  else {return true}
};

//1.6
strComp = (str) => {
  let current;
  let count = 0;
  let final = '';
  final = str.split('').reduce((acc, cur) => {
    if(cur === current)
      count++;
    else {
      if(count)
        acc = acc + current + count;
      current = cur;
      count = 1;
    }
    return acc;
  }, final)
  final = final + current + count;
  return final.length >= str.length ? str : final;
}
