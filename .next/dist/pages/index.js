'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


// import Header from '../components/Header'
var PostLink = function PostLink(_ref) {
		var show = _ref.show;
		return _react2.default.createElement('li', { key: show.id }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id }, _react2.default.createElement('a', null, show.name)));
};
// This is the Link API


var Index = function Index(props) {
		return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', {
				className: 'jsx-2477714983'
		}, 'Batman TV Shows'), _react2.default.createElement('ul', {
				className: 'jsx-2477714983'
		}, props.shows.map(function (_ref2) {
				var show = _ref2.show;
				return (
						// <li key={show.id}>
						//   <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
						//     <a>{show.name}</a>
						//   </Link>
						// </li>
						_react2.default.createElement(PostLink, { key: show.id, show: show })
				);
		})), _react2.default.createElement(_style2.default, {
				styleId: '2477714983',
				css: ['h1,a{font-family:"Arial";}', 'ul{padding:0;}', 'li{list-style:none;margin:5px 0;}', 'a{text-decoration:none;color:blue;}', 'a:hover{opacity:0.6;}']
		}));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		var res, data;
		return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
						switch (_context.prev = _context.next) {
								case 0:
										_context.next = 2;
										return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

								case 2:
										res = _context.sent;
										_context.next = 5;
										return res.json();

								case 5:
										data = _context.sent;

										console.log('Show data fetched. Count: ' + data.length);

										return _context.abrupt('return', {
												shows: data
										});

								case 8:
								case 'end':
										return _context.stop();
						}
				}
		}, _callee, this);
}));

exports.default = Index;