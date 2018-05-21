import React, { Component } from 'react'
import './Carousel.css'

class Carousel extends Component {
    state = {
        activeImageIndex: 0,
        maxImageIndex: this.props.images.length
    }

    handlePrev() {
        return this.state.activeImageIndex === 0
            ? this.setState({ activeImageIndex: this.state.maxImageIndex })
            : this.setState({ activeImageIndex: this.state.activeImageIndex - 1 })
    }
    handleNext() {
        return this.state.activeImageIndex === this.state.maxImageIndex
            ? this.setState({ activeImageIndex: 0 })
            : this.setState({ activeImageIndex: this.state.activeImageIndex + 1 })   
    }

    render() {
        let activeImageSrc = this.props.images[this.state.activeImageIndex].image
            // prevIndex = activeImageSrc === 0 ? this.state.maxImageIndex : this.state.activeImageIndex - 1,
            // nextIndex = activeImageSrc === this.state.maxImageIndex ? 0 : this.state.activeImageIndex + 1,
            // prevImageSrc = this.props.images[prevIndex].image,
            // nextImageSrc = this.props.images[nextIndex].image
        return (
            <div>
                <div className="carousel__activeImage">
                    <img src={ activeImageSrc } />
                </div>
                <div className="carousel__controls">
                    <a className="carousel__prev" onClick={ this.handlePrev.bind(this) }>
                        <svg className="icon icon-chevron-thin-left">
                            <use href="#icon-chevron-thin-left"></use>
                        </svg>
                    </a>
                    <div className="thumbnailContainer">
                        {/* <img src={ prevImageSrc } /> */}
                        <img src={ activeImageSrc } />
                        {/* <img src={ nextImageSrc } /> */}
                    </div>
                    <a className="carousel__next" onClick={ this.handleNext.bind(this) }>
                        <svg className="icon icon-chevron-thin-right">
                            <use href="#icon-chevron-thin-right"></use>
                        </svg>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel