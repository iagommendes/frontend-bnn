import { PlayFilled32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import NewsFeed from "../NewsFeed";
import './highlights-gallery.scss';

const HighlightsGallery = () => {
    return (
        <div className="gallery">
            <div className='container-itens-vid'>
                <div className='card-item-vid'>
                    <div className='card-itens-v'>
                        <div className='card-item-titles'>
                        <div>
                            <p>
                                CRIAR SERVIDOR
                            </p>
                            <h3>
                            Vídeo Tutorial
                            </h3>
                        </div>

                        <div>
                            <PlayFilled32 />
                        </div>
                        </div>

                        <p>
                        Como conectar meu servidor?
                        </p>
                    </div>
                </div>

                <div className='card-item-vid'>
                    <div className='card-itens-v'>
                        <div className='card-item-titles'>
                        <div>
                            <p>
                                CONECTAR HOST
                            </p>
                            <h3>
                            Vídeo Tutorial
                            </h3>
                        </div>

                        <div>
                            <PlayFilled32 />
                        </div>
                        </div>

                        <p>
                        Como conectar meu cloud?
                        </p>
                    </div>
                </div>

                <div className='card-item-vid'>
                    <div className='card-itens-v'>
                        <div className='card-item-titles'>
                        <div>
                            <p>
                                INSTALAR SITE
                            </p>
                            <h3>
                            Vídeo Tutorial
                            </h3>
                        </div>

                        <div>
                            <PlayFilled32 />
                        </div>
                        </div>

                        <p>
                        Como instalar meu site?
                        </p>
                    </div>
                </div>                        
            </div>
            
            <div className='container-itens-vid'>
                <div className='card-item-service'>
                    <div className='card-item-s-title'>
                        Digital Ocean
                    </div>
                    <div className='card-item-s-values'>
                        <h1>
                        $ 100
                        </h1>
                        <p>Earn $100 Credit</p>
                        <Button className='btn-values'>Utilizar cupom</Button>
                    </div>
                </div>                        

                <div className='card-item-service'>
                    <div className='card-item-s-title'>
                        Digital Ocean
                    </div>
                    <div className='card-item-s-values'>
                        <h1>
                        $ 100
                        </h1>
                        <p>Earn $100 Credit</p>
                        <Button className='btn-values'>Utilizar cupom</Button>
                    </div>
                </div>    

                <div className='card-item-service'>
                    <div className='card-item-s-title'>
                        Digital Ocean
                    </div>
                    <div className='card-item-s-values'>
                        <h1>
                        $ 100
                        </h1>
                        <p>Earn $100 Credit</p>
                        <Button className='btn-values'>Utilizar cupom</Button>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default HighlightsGallery;