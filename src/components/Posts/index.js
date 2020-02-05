// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Post from 'src/components/Post';

import './posts.scss';

// == Composant
const Posts = ({ posts }) => (
  <main id="posts">
    {posts.map(post => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Posts;
