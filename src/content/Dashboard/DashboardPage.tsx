import React from "react";
import PlansDetails from "../../components/PlansDetails";
import HighlightsGallery from "../../components/HighlightsGallery";
import './dashboard-page.scss'
import NewsFeed from "../../components/NewsFeed";

const DashboardPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width">

            <div className="bx--row">
                <div className="bx--col-lg-16">
                    <h1 className="main-title">Dashboard</h1>
                    <PlansDetails />
                </div>
            </div>

            <div className="bx--row">
                <div className="bx--col-lg-11">
                   <HighlightsGallery />
                </div>  
                <div className="bx--col-lg-5">
                   <NewsFeed />
                </div>  
            </div>

        </div>
    );
    }

    export default DashboardPage;