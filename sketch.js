function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function count()
{
  let numbers = [1,2,3,4,5,6,7,8,9]; //var 
  let len = numbers.length;

  for(let i = 1; i<=len; i++)
  {
    console.log(numbers[i]);
  }
}