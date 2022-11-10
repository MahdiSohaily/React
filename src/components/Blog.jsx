import React, { Component } from 'react';
import getPosts from '../Services/getData';
import PostContainer from './PostContainer';
import SideBar from './SideBar';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      currentPost: null,
    };
  }

  handleNavigation = (id) => {
    this.setState({
      currentPost: id,
    });
  };

  componentDidMount() {
    getPosts().then((posts) =>
      this.setState({
        posts,
        currentPost: 0,
      })
    );
  }
  render() {
    return (
      <>
        <SideBar
          posts={this.state.posts}
          handleNavigation={this.handleNavigation}
        />
        {this.state.posts && (
          <PostContainer data={this.state.posts[this.state.currentPost]} />
        )}
      </>
    );
  }
}
