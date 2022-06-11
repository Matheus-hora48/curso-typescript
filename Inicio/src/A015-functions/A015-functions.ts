type mapStingsCallback = (item: string) => string;

function mapStings(array: string[], callbackfn: CallableFunction): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
//const abcMapped = mapStings(abc, (item) => item.toUpperCase());

//console.log(abcMapped);
