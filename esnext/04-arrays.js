const numbers = [1, 2, 3, 4, 5];

{
  const firstItem = numbers[0];
  const secondItem = numbers[1];
  const lastItem = numbers[numbers.length - 1];
  console.log(firstItem, secondItem, lastItem);

  numbers[2] = 7;
  console.log(numbers); // arrays are mutable

  // const a = 2;
  // a = 3;
  // numbers = [6, 7, 8, 9]; // cannot reassign

  // arrays behave like stacks
  numbers.push(6);
  console.log(numbers);

  numbers.pop();
  console.log(numbers);

  // arrays can behave like queues
  numbers.shift();
  console.log(numbers);

  numbers.unshift(1);
  console.log(numbers);

  // index, numbers of items to remove, elements to add
  numbers.splice(2, 2, 3, 4);
  console.log(numbers);
}

// destructuring

{
  const [firstItem, , thirdItem] = numbers;
  const lastItem = numbers[numbers.length - 1];
  console.log(firstItem, thirdItem, lastItem);

  const vector3d = [3, 0, 4];
  {
    const X_COORD = 0;
    const Y_COORD = 1;
    const Z_COORD = 2;
    const x = vector3d[X_COORD];
    const y = vector3d[Y_COORD];
    const z = vector3d[Z_COORD];
    console.log(x, y, z);
  }
  {
    const [x, y, z] = vector3d;
    console.log(x, y, z);
  }
}

// array spread operator (rest)

{
  const [firstItem, , thirdItem, ...rest] = numbers;
  console.log(firstItem, thirdItem, rest, numbers.slice(3));

  const newNumbers = [thirdItem, firstItem, ...rest];
  console.log(newNumbers);

  console.log(numbers, numbers.slice(0), [...numbers]);
}

// immutable push
{
  const pushedNumbers = [...numbers];
  pushedNumbers.push(6);
  console.log(numbers, pushedNumbers);
}

{
  const pushedNumbers = [...numbers, 6];
  console.log(numbers, pushedNumbers);
}

// immutable pop

{
  const poppedNumbers = numbers.slice(0, -1);
  console.log(numbers, poppedNumbers);
}

// immutable shift

{
  const [, ...shiftedNumbers] = numbers;
  console.log(numbers, shiftedNumbers);
}

// immutable unshift

{
  const unshiftedNumbers = [0, ...numbers];
  console.log(numbers, unshiftedNumbers);
}

// immutable item removal

{
  const removedNumbers = [...numbers.slice(0, 2), ...numbers.slice(3)];
  console.log(numbers, removedNumbers);
}

// immutable item replace

{
  const replacedNumbers = [...numbers.slice(0, 2), 6, 7, ...numbers.slice(3)];
  console.log(numbers, replacedNumbers);
}
