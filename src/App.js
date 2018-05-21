import React, { Component } from 'react';
import Content from './data/item-data.json'

import './App.css'
import SVGDefinitions from './components/icons/svg'

import Header from './components/header/Header'
import Carousel from './components/carousel/Carousel'
import Promotions from './components/promotions/Promotions'
import QuantitySelector from './components/quantitySelector/QuantitySelector'
import PurchaseMethod from './components/purchaseMethod/PurchaseMethod'
import Returns from './components/returns/Returns'
import AdditionalActions from './components/additionalActions/AdditionalActions'
import ProductHighlights from './components/productHighlights/ProductHighlights'
import Reviews from './components/reviews/Reviews'





class App extends Component {


    render() {
        return (
            <div className="App">
                <SVGDefinitions />

                <section className="column column--left">
                    <Header text={ Content.CatalogEntryView[0].title} />
                    <Carousel images={ Content.CatalogEntryView[0].Images[0].AlternateImages } />
                    
                </section>
                <section className="column column--right">
                    <p className="onlinePrice">{ Content.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue } <span>online price</span></p>
                    <hr className="hr" />
                    <ul className="promotions">
                        <Promotions promos={Content.CatalogEntryView[0].Promotions} />
                    </ul>
                    <hr className="hr" />
                    <div className="quantitySelector__container">
                        <QuantitySelector />
                        <div />
                    </div>
                    <PurchaseMethod />
                    <Returns />
                    <AdditionalActions />

                    <ProductHighlights highlights={Content.CatalogEntryView[0].ItemDescription[0].features} />


                </section>
                <Reviews
                        overallReview={ Content.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating }
                        totalReviews={ Content.CatalogEntryView[0].CustomerReview[0].totalReviews }
                        proReview={ Content.CatalogEntryView[0].CustomerReview[0].Pro }
                        conReview={ Content.CatalogEntryView[0].CustomerReview[0].Con } />
            </div>
        );
    }
}

export default App;
