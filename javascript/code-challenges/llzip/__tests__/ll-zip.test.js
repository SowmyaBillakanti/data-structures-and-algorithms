'use strict';

const llzip = require('../ll-zip')

it('Zip 1. Should return a list that is a zipped composite of two given lists', () => {
    const listOne = new LinkedList();
      listOne.insert('one');
      listOne.insert('two');
      listOne.insert('three');
    const listTwo = new LinkedList();
      listTwo.insert('1');
      listTwo.insert('2');
      listTwo.insert('3');
      expect(listOne.toString(llZip(listOne, listTwo))).toEqual('{ three } -> { 3 } -> { two } -> { 2 } -> { one } -> { 1 } -> NULL');
  })

  it('Zip 2. Should return false if both lists are empty', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();
      expect(llZip(listOne, listTwo)).toEqual(false);
  })

  it('Zip 3. Should return a list that is a zipped composite of two given lists even if they differ in length', () => {
    const listOne = new LinkedList();
      listOne.insert('one');
      listOne.insert('two');
      listOne.insert('three');
    const listTwo = new LinkedList();
      listTwo.insert('1');
      expect(listOne.toString(llZip(listOne, listTwo))).toEqual('{ three } -> { 1 } -> { two } -> { one } -> NULL');
  })

});