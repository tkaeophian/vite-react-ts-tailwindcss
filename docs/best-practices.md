# Best Practices

## Use Functional Component
Use a functional component over a class component.

```
// ❌ Bad - Class Component
export default class MyClassComponent extends Component {
  render() {
    return (
      <div>Hi I'm a class component!</div>
    )
  }
}



// ✅ Good - Functional Component
const MyFunctionalComponent = () => {
    return ( 
        <div>Hi I'm a functional component!</div>
     );
}
```

## Avoid Inline Function
Avoid inline function to improve readability

```
// ❌ Bad - Inline Function
const MyFunctionalComponent = () => {
    return ( 
        <div>
            <p>Hi I'm a functional component!</p>
            <button onClick={(e) => {
                console.log('Button Clicked!')
                console.log('Hello world')
            }}>Click me</button>
        </div>
     );
}

// ✅ Good - No Inline Functiona
const MyFunctionalComponent = () => {

    const handleClick = (e: React.MouseEvent) => {
        console.log('Button Clicked!')
        console.log('Hello world')
    }

    return ( 
        <div>
            <p>Hi I'm a functional component!</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
```

## Use Typescript
Typescript providing a better developer experience

```
// ❌ Bad 
const WithoutTypescript = (props) => {
    const { user, isEmailVerified } = props
    return ( 
        <div>
            Welcome back { user.name }
        </div>
     );
}

// ✅ Good
interface IMyComponentProps {
    user: IUser;
    isEmailVerified: boolean
}

const WithTypescript = (props : IMyComponentProps) => {
    const { user, isEmailVerified } = props
    return ( 
        <div>
            Welcome back { user.name }
        </div>
     );
}
```

## Camel Case
Use camel case over snake case

```
// ❌ Bad 
const Snake_Case = () => {

    const handle_click = (e) => {
        console.log('Button Clicked!')
        console.log('Hello world')
    }

    return ( 
        <div>
            <p>Hi I'm a functional component!</p>
            <button onClick={handle_click}>Click me</button>
        </div>
     );
}

// ✅ Good
const CamelCase = () => {

    const handleClick = (e) => {
        console.log('Button Clicked!')
        console.log('Hello world')
    }

    return ( 
        <div>
            <p>Hi I'm a functional component!</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
```