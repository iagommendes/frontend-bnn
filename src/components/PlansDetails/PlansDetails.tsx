import { Add32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import './plans-details.scss'

const PlansDetails = () => {
    return(
        <div className="container-itens">
          <div className='card'>
            <div className='card-titles'>
              <p>1</p>
              <p>Provedor</p>
            </div>
            <Button renderIcon={Add32}>Novo Provedor</Button>
          </div>

          <div className='card'>
            <div className='card-titles'>
              <p>3</p>
              <p>Servidores</p>
            </div>
            <Button renderIcon={Add32}>Novo Servidor</Button>
          </div>

          <div className='card'>
            <div className='card-titles'>
              <p>5</p>
              <p>Aplicações</p>
            </div>
            <Button renderIcon={Add32}>Nova aplicação</Button>
          </div>

          <div className='card-status'>
            <h3>Meu Plano</h3>

            <div className='card-status-content'>
              <div className='days-left'>
                <p>Dias restantes</p>
                <p>365</p>
              </div>
              <div className='payment-info'>
                <p>Tipo <div className='square-icon'>PRO</div></p>
                <p>Recorrência <div className='circle-icon'>PRO</div></p>
                <p>Moeda <div className='square-icon'>PRO</div></p>
              </div>
            </div>
            
          </div>
        </div>
    ); 
}

export default PlansDetails;