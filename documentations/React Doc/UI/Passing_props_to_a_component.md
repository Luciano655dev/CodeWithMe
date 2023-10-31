# Passing props to a component 
In this code, the Profile component isn’t passing any props to its child component, Avatar:
```
export default function Profile() {
  return (
    <Avatar />
  );
}
```
You can give Avatar some props in two steps.

## Step 1: Pass props to the child component 
First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):
```
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

### Now you can read these props inside the Avatar component.

## Step 2: Read props inside the child component 
You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.
```
function Avatar({ person, size }) {
  // person and size are available here
}
```
Add some logic to Avatar that uses the person and size props for rendering, and you’re done.
Now you can configure Avatar to render in many different ways with different props. Try tweaking the values!