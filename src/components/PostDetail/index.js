// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './postDetail.scss';

// == Composant
const PostDetail = ({
  title,
  content,
  category,
}) => (
  <div className="post-detail">
    <h1 className="post-detail-title">{title}</h1>
    <div className="post-category">{category}</div>
    <p className="post-detail-content">{content}</p>
  </div>
);


PostDetail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,

};

// == Export
export default PostDetail;
