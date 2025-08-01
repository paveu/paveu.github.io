# Getting Started with React Hooks

React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components. In this comprehensive guide, we'll explore the most commonly used hooks and best practices.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have become the preferred way to write React components.

### Key Benefits

- **Simpler code**: No need for class components
- **Better reusability**: Custom hooks allow logic sharing
- **Easier testing**: Functional components are easier to test
- **Performance**: Better optimization opportunities

## The useState Hook

The most basic hook for managing state in functional components:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Multiple State Variables

You can use multiple `useState` calls:

```javascript
function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  return (
    <form>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value))} 
        placeholder="Age" 
      />
    </form>
  );
}
```

## The useEffect Hook

`useEffect` handles side effects in functional components:

```javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This runs after every render
    fetch('/api/data')
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  }, []); // Empty dependency array = run once

  if (loading) return <div>Loading...</div>;
  
  return <div>Data: {JSON.stringify(data)}</div>;
}
```

### Cleanup with useEffect

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []);
```

## Custom Hooks

Create reusable logic with custom hooks:

```javascript
// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useApi('/api/users');

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Best Practices

### 1. Use Multiple State Variables
Instead of one large state object, split related state:

```javascript
// ❌ Avoid
const [state, setState] = useState({
  name: '',
  email: '',
  posts: []
});

// ✅ Better
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [posts, setPosts] = useState([]);
```

### 2. Optimize useEffect Dependencies

```javascript
// ❌ Missing dependencies
useEffect(() => {
  fetchUser(userId);
}, []); // userId should be in dependencies

// ✅ Correct dependencies
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

### 3. Use useCallback for Performance

```javascript
import { useCallback } from 'react';

function TodoList({ todos, onToggle }) {
  const handleToggle = useCallback((id) => {
    onToggle(id);
  }, [onToggle]);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={handleToggle} 
        />
      ))}
    </ul>
  );
}
```

## Advanced Hooks

### useReducer for Complex State

```javascript
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

## Conclusion

React Hooks have transformed how we write React applications. They provide a more functional approach to component development while maintaining all the power of class components. 

Key takeaways:
- Start with `useState` and `useEffect`
- Create custom hooks for reusable logic
- Pay attention to dependency arrays
- Use multiple state variables instead of large objects
- Consider `useReducer` for complex state logic

Happy coding with Hooks! 🎣