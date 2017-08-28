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
