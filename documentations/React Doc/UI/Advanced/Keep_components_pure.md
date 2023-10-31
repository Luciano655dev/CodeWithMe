# Keeping Components Pure
Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.

## You will learn
-> What purity is and how it helps you avoid bugs
-> How to keep components pure by keeping changes out of the render phase
-> How to use Strict Mode to find mistakes in your components

## Purity: Components as formulas 
In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:

It minds its own business. It does not change any objects or variables that existed before it was called.
Same inputs, same output. Given the same inputs, a pure function should always return the same result.
You might already be familiar with one example of pure functions: formulas in math.

### Consider this math formula: y = 2x.
-> If x = 2 then y = 4. Always.
-> If x = 3 then y = 6. Always.
-> If x = 3, y won’t sometimes be 9 or –1 or 2.5 depending on the time of day or the state of the stock market.
-> If y = 2x and x = 3, y will always be 6.

If we made this into a JavaScript function, it would look like this:
```
function double(number) {
  return 2 * number;
}
```
In the above example, double is a pure function. If you pass it 3, it will return 6. Always.