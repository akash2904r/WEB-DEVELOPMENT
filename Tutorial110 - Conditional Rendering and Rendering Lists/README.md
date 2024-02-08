# Conditional Rendering

### We can use an ternary operator ( ? : ) for an if-else conditional rendering
For example,
```
{
    showBtn ? <div>Yayy!!! I have been displayed...</div> : <div>Click the above button</div>
}
```
In the above example,
- If the showBtn is true then the &lt;div&gt; containing the content "Yayy..." is displayed
- In case, showBtn was false then the &lt;div&gt; containing the content "Click..." is displayed

&nbsp;
### We use an special syntax in React for an if conditional rendering
Syntax :
```
{
    condition && code to be executed
}
```
If the 'condition' is true, then 'the code to be executed' will be executed

For example,
```
{
    showBtn && <div>Yayy!!! I have been displayed...</div>
}
```
In the above example,
- If the showBtn is true then the &lt;div&gt; containing the content "Yayy..." is displayed
- In case, showBtn was false then nothing happens


&nbsp;
# Rendering Lists

### We use an map() to render a list
- Whenever we use a map() we need to specify an "key" prop which is an unique value for each of the elements in a list

&nbsp;
#### Let the list be :
```
const [todos, setTodos] = useState([
    {
        title: "First", 
        desc: "Netflix UI Clone"
    },
    {
        title: "Second", 
        desc: "Spotify Clone"
    },
    {
        title: "Third", 
        desc: "X UI Clone"
    },
])
```
### In case, if we use an seperate component like this :
```
const Todo = ({todo}) => {
    return (
      <>
        <div className="m-4 border border-1 border-red-500">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.title}</div>
        </div>
      </>
    )
}
```
### Then we must render the list like this : 
```
todos.map(todo => {
    return <Todo key={todo.title} todo={todo}/>
})
```

### Else we can directly render the list like this :
```
todos.map(todo => {
    return (
        <div key={todo.title} className="m-4 border border-1 border-red-500">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
        </div>
    )
})
```