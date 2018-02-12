// This is the Link API
import Link from 'next/link'
// import Header from '../components/Header'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'



// const Index = () => (
// 	<div>
// 		<Header />
// 		<Link href="/about">
// 			{ <a style={{ fontSize: 20 }}>About Page</a> }
// 			<button>Go to About Page</button>
// 		</Link>
// 		<p>Hello Next.js</p>
// 	</div>
// )


// const PostLink = (props) => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <PostLink id="hello-nextjs" title="Hello Next.js"/>
//       <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
//       <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
//     </ul>
//   </Layout>
// )


// export default Index


//other way to display with layout
// 1
// import withLayout from '../lib/layout'

// const Page = () => (
//   <p>This is the about page</p>
// )

// export default withLayout(Page)

// 2
// const Page = () => (
//   <p>This is the about page</p>
// )

// export default () => (<Layout page={Page}/>)

// 3
// const content = (<p>This is the about page</p>)

// export default () => (<Layout content={content}/>)


const PostLink = ({ show }) => (
  	<li key={show.id}>
	  <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
	    <a>{show.name}</a>
	  </Link>
	</li>
)

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        // <li key={show.id}>
        //   <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
        //     <a>{show.name}</a>
        //   </Link>
        // </li>
        <PostLink key={show.id} show={show}/>
      ))}
    </ul>
    <style jsx global>{`
			h1, a {
				font-family: "Arial";
			}

			ul {
				padding: 0;
			}

			li {
				list-style: none;
				margin: 5px 0;
			}

			a {
				text-decoration: none;
				color: blue;
			}

			a:hover {
				opacity: 0.6;
			}
		`}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index