import useFetch from '../hooks/useFetch'

function CustomHookUseFetch1() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h1>useFetch - sample</h1>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookUseFetch1
