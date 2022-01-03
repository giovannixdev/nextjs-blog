import React from 'react'
// import { db } from '../lib/db'
// import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then((res) => res.json())

export default function person() {
  // const { data, error } = useSWR('http://localhost:3000/api/person', fetcher)
  // console.log('error -> ', error)
  // console.log('data -> ', data)

  const [error, setError] = React.useState('');
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    fetch('/api/person')
      .then((res) => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError('failed to load')
      })
  }, [])


  if (error) return <div>{error}</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <h1>This is the Person Component</h1>
      <p>{data.name}</p>
    </>
  )
}

// export async function getServerSideProps(context) {
//   // console.log("context", context);
//   const data = await db()
//   const { name, age } = data[0]

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { name, age }, // will be passed to the page component as props
//   }
// }