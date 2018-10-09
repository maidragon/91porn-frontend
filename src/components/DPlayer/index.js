import React, { Component } from 'react'
import 'DPlayer/dist/DPlayer.min.css';
import PropTypes from 'prop-types';
import DPlayer from 'DPlayer';


export default class Player extends Component {

  componentDidMount() {
    const { video } = this.props;
    const dp = new DPlayer({
      element: this.ele,
      video,
      ...this.props,
    });
  }

  render() {
    const { className } = this.props;
    return <div ref={ref => this.ele = ref} id="dplayer" className={className}></div>
  }
}

Player.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string,
    pic: PropTypes.string,
    type: PropTypes.string,
    quality: PropTypes.array,
    defaultQuality: PropTypes.number,
  }).isRequired
};