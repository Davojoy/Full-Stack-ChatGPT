// export default async function PostsPage() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
// }

// export default function PostsPage() {
//   async function getData() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = res.json();
//     return data;
//   }
//   return <main>{getData()}</main>;
// }

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Data fetching failed");

  const data = res.json();
  const result = JSON.stringify(data, null, 2);

  return result;
}

export default async function PostsPage() {
  const data = await getData();
  return (
    <main>
      <h1>This is working in postsPage and running</h1>
      <pre>{data}</pre>
    </main>
  );
}
