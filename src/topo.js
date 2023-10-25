import './topo.css';
import { Component } from 'react';

class Topo extends Component {

    render() {
        return (
            <div className='Topo'>
                <div className='Logo'>
                    <iframe src="https://giphy.com/embed/dug3gZFuN43sLT3kRD" width="480" height="316" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div className='NomePagina'>
                    <h1>B&G NOTÍCIAS</h1>
                </div>
            </div> 
        );
    }
}

export default Topo; 