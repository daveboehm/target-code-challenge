import React, { Component } from 'react'
import './Reviews.css'

class reviews extends Component {
    constructor (props) {
        super(props)
    }
    overallStars = () => {
            
        // let redStars = [], grayStars = []
        // for (let i = 0; i < this.props.overallReview; i++) {
        //     redStars.push(<svg class="icon icon-star red-star"><use href="#icon-star"></use></svg>)
        // }
        // for (let i = 0; i < (5-this.props.overallReview); i++) {
        //     grayStars.push(<svg class="icon icon-star gray-star"><use href="#icon-star"></use></svg>)
        // }
        // return ( redStars + grayStars )
        let theStars = ''
        for (let i = 0; i < 5; i++) {
            theStars += i < this.props.overallReview
                    ? <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                    : <svg className="icon icon-star gray-star"><use href="#icon-star"></use></svg>
        }
        console.dir(theStars)
        return theStars
        
    }
    render() {


        return (
            <div className="column column--left">
            <div className="reviewsContainer">
                <div className="reviews__overall">
                    {/* { this.overallStars }     */}
                    <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                    <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                    <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                    <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                    <svg className="icon icon-star gray-star"><use href="#icon-star"></use></svg>
                    <p>overall</p>
                </div>
                <div className="reviews__seeAll">
                    <a href="#" className="reviews__seeAllLink">view all { this.props.totalReviews } reviews</a>
                </div>
            </div>
            <div className="reviews__mostHelpfulContainer">
                <header className="reviews__titles">
                    <h3 className="review__h3">PRO <br /><span className="review__h3Subtext">most helpful 4-5 star review</span></h3>
                    <h3 className="review__h3">CON <br /><span className="review__h3Subtext">most helpful 1-2 star review</span></h3>
                </header>
                <div className="reviews">
                    <div className="reviews__review">
                        <div className="starsRating">
                            <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                            <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                            <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                            <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                            <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                        </div>
                        <h4 className="review__h4">{ this.props.proReview[0].title }</h4>
                        <p className="review__text">{ this.props.proReview[0].review } </p>
                        {/* @TODO: Format date with moment */}
                        <p className="reviewerDetails"><a href="#">{ this.props.proReview[0].screenName }</a> <span className="reviewDate">{ this.props.proReview[0].datePosted }</span></p>
                    </div>
                    <div className="reviews__review">
                        <div className="starsRating">
                            <svg className="icon icon-star red-star"><use href="#icon-star"></use></svg>
                            <svg className="icon icon-star gray-star"><use href="#icon-star"></use></svg>
                            <svg className="icon icon-star gray-star"><use href="#icon-star"></use></svg>
                            <svg className="icon icon-star gray-star"><use href="#icon-star"></use></svg>
                            <svg className="icon icon-star gray-star"><use href="#icon-star"></use></svg>
                        </div>
                        <h4 className="review__h4">{ this.props.conReview[0].title }</h4>
                        <p className="review__text">{ this.props.conReview[0].review } </p>
                        {/* @TODO: Format date with moment */}
                        <p className="reviewerDetails"><a href="#">{ this.props.conReview[0].screenName }</a> <span className="reviewDate">{ this.props.conReview[0].datePosted }</span></p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    
}

export default reviews