import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SideBar from './SideBar';

export default class Blog extends Component {
  render() {
    return (
      <>
        <SideBar />
        <PostContainer />
      </>
    );
  }
}
