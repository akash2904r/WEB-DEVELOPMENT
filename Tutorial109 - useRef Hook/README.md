# Main use cases of useRef Hook

### 1) It can be used as an variable whose value persists across rendering using the "ref.current" property 
#### Even if we try to change "ref.current" property, React does not re-render the component

For example,
```
const a = useRef(0)

useEffect(() => {
    a.current = a.current + 1
    console.log(`Re-rendering and the value of a is ${a.current}...`)
})
```
In the above example, if we try to change anything in the React page then the useEffect would get invoked and the value of "a" is updated, also, the value persists even across the re-renderings

&nbsp;
### 2) It can be used to reference an element such that we don't need the help of DOM Manipulation to access it 

For example,
```
const btnRef = useRef(0)
```
We can use btnRef directly without any DOM Manipulation to access the button
```
function clicked() {
    btnRef.current.style.backgroundColor = 'red'
}
```
Whenever this button is clicked the "clicked()" function is called and the background of this button changes to "red" color
```
<button ref={btnRef} onClick={clicked}>
    Click Me
</button>
```