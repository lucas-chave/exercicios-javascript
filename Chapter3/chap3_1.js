function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = [];
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.contains = contains;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
   this.length = length;
}

function contains(element) {
   for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return true;
      }
   }
   return false;
}

function append(element) {
   this.dataStore[this.listSize++] = element;
}

function find(element) {
   for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return i;
      }
   }
   return -1;
}

function remove(element) {
   let foundAt = this.find(element);
   if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
   }
   return false;
}

function toString() {
   return this.dataStore;
}

function length() {
   return this.listSize;
}

function clear() {
   delete this.dataStore;
   this.dataStore = [];
   this.listSize = this.pos = 0;
}


function insert(element, after) {
   let insertPos = this.find(after);
   if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
   }
   return false;
}

function contains(element) {
   for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return true;
      }
   }
   return false;
}

function front() {
   this.pos = 0;
}

function end() {
   this.pos = this.listSize - 1;
}

function prev() {
   if (this.pos > 0) {
      --this.pos;
   }
}

function next() {
   if (this.pos < this.listSize - 1) {
      ++this.pos;
   }
}

function currPos() {
   return this.pos;
}

function moveTo(position) {
   this.pos = position;
}

function getElement() {
   return this.dataStore[this.pos];
}

let names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// console.log(names.length());
// names.remove("Raymond");
// console.log(names.length());
// console.log(names.toString());
// names.insert('Fulano', 'Cynthia');
// console.log(names.toString());
// console.log(names.contains('Example'));
// console.log(names.contains('Cynthia'));
// names.clear();
// console.log(names.toString(), 'clear');

names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
// console.log(names.toString());
// names.front();
// console.log(names.getElement());
// console.log(names.toString());
// names.next();
// console.log(names.getElement());
// console.log(names.toString());
// names.next();
// names.next();
// names.prev();
// console.log(names.getElement());
// console.log(names.toString());
// names.end()
// console.log(names.getElement());
// console.log(names.currPos());
// names.moveTo(2)
// console.log(names.getElement());
// console.log(names.currPos());

// console.log(names.toString(), names.length(), names.currPos());

for (names.front(); names.currPos() < names.length(); names.next()) {
   console.log(names.getElement());
}
