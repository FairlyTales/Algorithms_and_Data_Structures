// function for object deep cloning
// the main idea of deep cloning is to create a complete copy of an object whose
// properties do not share the same references (point to the same underlying values)
// as those of the source object from which the copy was made

function deepClone(obj: any) {
  if (obj === null) return null;

  // create a shallow clone
  let clone = Object.assign({}, obj);

  // iterate though all keys and either assign a primitive if the value in the
  // original object is a primitive or recursively call the clone function
  // if the value is an object
  Object.keys(clone).forEach((key) => {
      clone[key] =
        typeof obj[key] === 'object' ?
          deepClone(obj[key]) :
          obj[key];
    },
  );

  // if an object is an array set its length to that of the original and create
  // a copy using Array.from method, if we don't do it the arrays will be just objects
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }

  return clone;
}

// ----------------------------------------------------------------------------
// Tests
// ----------------------------------------------------------------------------

const originalObject = {
  string: 'I am a sting',
  array: [1, 2, 3, [4, 5, 6]],
  innerObject: {
    number: 1,
    innerInnerObject: {
      number: 2,
      array: [4, 5, 6],
    },
  },
};

const deepClonedObject = deepClone(originalObject);
const shallowClonedObject = Object.assign({}, originalObject);

console.log('originalObject:');
console.log(originalObject);
console.log('deepClonedObject:');
console.log(deepClonedObject);
console.log('shallowClonedObject:');
console.log(shallowClonedObject);

// should be false
console.log('Should be false: ');
console.log(originalObject === deepClonedObject);

// should be false
console.log('Should be false: ');
console.log(originalObject === shallowClonedObject);

// should be false because deep clone houses the entire copied inner object, not just the pointer to an address
console.log('Should be false: ');
console.log(originalObject.innerObject === deepClonedObject.object);

// should be true because shallow copy just stores a pointer to an address
console.log('Should be true: ');
console.log(originalObject.innerObject === shallowClonedObject.innerObject);

