import { useEffect } from "react"

//SPA
//SSR
//SSG

export default function Home(props) {

    // useEffect(() =>{

    //   fetch('http://localhost:3333/episodes')
    //   .then(response => response.json())
    //   .then(data => console.log(data))

    // }, [])

    

  return (
   
    <h1>Index</h1>
   
   
  )
}

// export async function getServerSideProps(){
//   const response = await fetch('http://localhost:3333/episodes')
// const data = await response.json()
//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }


export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
const data = await response.json()
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8
  }
}


