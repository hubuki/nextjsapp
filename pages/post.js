import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

// const Content = (props) => (
//   <div>
//     <h1>{props.url.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </div>
// )

// export default (props) => (
//     <Layout>
//        <Content url={props.url} />
//     </Layout>
// )


const Post =  (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium.replace(/^http:\/\//i, 'https://')}/>

		<div className="markdown">
			<Markdown source={`
This is our blog post.\n
Yes. We can have a [link](/link).\n
And we can have a title as well.

### This is a title

And here's the content.
			`}/>
		</div>
		<style jsx global>{`
			.markdown {
				font-family: 'Arial';
			}

			.markdown a {
				text-decoration: none;
				color: blue;
			}

			.markdown a:hover {
				opacity: 0.6;
			}

			.markdown h3 {
				margin: 0;
				padding: 0;
				text-transform: uppercase;
			}
		`}</style>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)
  console.log(show)

  return { show }
}

export default Post