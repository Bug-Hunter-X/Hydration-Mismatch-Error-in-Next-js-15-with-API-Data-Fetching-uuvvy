```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple example.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent(){
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Data from API</h2>
      <p>{data.message}</p>
    </div>
  );
}

// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API!' });
}
```