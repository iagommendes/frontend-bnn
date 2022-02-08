import { Notification32 } from "@carbon/icons-react";
import './news-feed.scss'

const NewsFeed = () => {
    return (
        <div className='container-news'>
            <div className='news-title'>
                News
            </div>
            <div>
            <div className='news-feed nf1'>
                <div className='line-bar'>
                    <div className="icon-disc">
                        <Notification32 />
                    </div>
                    <div className="dotted-divisor">
                    </div>
                </div>
                <div className='news'>
                    <p className="news-subtitle">Novo recurso</p>
                    <p className="news-detail">Lista de novidades na Dashboard</p>
                    <div className='chips'>
                    <span>NEWS</span><span>DASHBOARD</span><span>RECURSOS</span>
                    </div>
                </div>
            </div>

            <div className='news-feed'>
                <div className='line-bar'>
                    <div className="icon-disc">
                        <Notification32 />
                    </div>
                    <div className="dotted-divisor">
                    </div>
                </div>
                <div className='news'>
                    <p className="news-subtitle">Novo recurso</p>
                    <p className="news-detail">Lista de novidades na Dashboard</p>
                    <div className='chips'>
                    <span>NEWS</span><span>DASHBOARD</span><span>RECURSOS</span>
                    </div>
                </div>
            </div>
            </div>



        </div>
    );
}

export default NewsFeed;