import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './postActions';
import propTypes from 'prop-types';

class posts extends Component {
	constructor(props) {
		super(props);
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) this.props.posts.unshift(nextProps.newPost);
	}
	render() {
		const postItems = this.props.posts.map((post) => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}

posts.propTypes = {
	fetchPosts: propTypes.func.isRequired,
	posts: propTypes.array.isRequired,
	newPost: propTypes.object
};
const mapStateToProps = (state) => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(posts);
