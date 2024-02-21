# useCallback Hook

- useCallback Hook can be used when we require React to not render an particular function
- It is ideally used when an function remains constant (i.e., the function's return value could be constant)
- It basically is used to freeze an function (i.e., just like how useMemo hook freezes the value of a variable)


&nbsp;
# memo()

Whenever we use memo(), it makes sures that, that particular component mentioned in memo() is re-rendered only upon receiving new props or else it remains un-rendered 