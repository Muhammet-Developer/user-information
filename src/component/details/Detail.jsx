import {  useLocation } from 'react-router-dom'
import "./detail.css"

import Table from './Table';
const Detail = ({search}) => {
  const { state:card} = useLocation()

  return (
    <div>
      <div className='conta'>

      <div className="card" style={{ width: 120 }}>
        <img src={`https://avatars.dicebear.com/v2/avataaars/${card.id}.svg`} alt="user" />
        <div className="container">
          <h4>
            <b>{card.name}</b>
          </h4>
        </div>
      </div>
      </div>
        
    <Table search={search} />
    </div >
  );
}

export default Detail