import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    fetch('http://portal-noticias-ifms.herokuapp.com/apinoticias')
      .then(response => response.json())
      .then(posts => this.setState({ posts }))
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(post => (
          <div className='Noticia' key={post.id_noticia} >
            <h1> {post.titulo} </h1>
            <h2> {post.resumo} </h2>      
            <h3> {post.autor} </h3>
            <p> {post.data_criacao} </p>
            <p> {post.noticia} </p>
            <hr></hr>                                                             
          </div>
        ))}
      </div>
    );
  }
}

export default App; 