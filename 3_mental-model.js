// a pure function has referential trasnparency
// some engines optimize pure functions by calling them just once (since they're pure, no need to execute them several times with the same input?)


const pi = () => Math.PI;

// more meaningful names + implementation is encapsulated => easier refactoring and understanding
const multiply = (x, y) => x * y;
const sum = (x, y) => x + y;
const double = (x) => multiply(x, 2);
const divide = (x, y) => x / y;
const squared = (x, y) => Math.pow(x, 2);

const height = () => 10;
const diameter = () => 20;

const diameterToRadius = (diameter) => divide(diameter, 2);
const toPerimeter = (diameter) => multiply(diameter, pi);

const areaCircle = (radius) => multiply(pi, squared(radius));
const areaRect = (width, length) => multiply(width, length);

function cylinderArea(height, diameter) {
  const sideArea = areaRect(toPerimeter(diameter), height);
  const circlesAreas = double(areaCircle(diameterToRadius(diameter)));
  return sum(sideArea, circlesAreas);
}

// Can also be rewritten so:
const cylinderAreaLambda = (height, diameter) => 
  sum(
    areaRect(
      toPerimeter(diameter), 
      height
    ),
    double(
      areaCircle(
        diameterToRadius(diameter)
      )
    )
  );
// also clean but hard to read!
// => we'll look at better alternative to nested function calls, namely composition

exports.cylinderAreaLambda = cylinderAreaLambda;