
import './App.css';
import Card from './Card';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
      
//       <header className="App-header">
//         <Card title="Artice1" body="article1.text"/>
//         <Card title="Artice2" body="article2.text"/>
//         <Card title="Artice3" body="article3.text"/>
        
//       </header>
      
//     </div>
//   );
// }
class App extends Component {
  state = {
    articles : [
      { id : 1 , title : 'article 1' , body : 'article1 text'},
      { id : 2 , title : 'article 2' , body : 'article2 text'},
      { id : 3 , title : 'article 3' , body : 'article3 text'},
    ]
  }
  constructor() {
    super()
    setTimeout(()=> {
      this.setState({
        articles : [
          { id : 4 , title : 'article 4' , body : 'article4 text'},
          { id : 5 , title : 'article 5' , body : 'article5 text'},
          { id : 6 , title : 'article 6' , body : 'article6 text'},
        ]
      })
    },3000)
    

  }

  render() {
    return (
      <div className="App">    
        <header className="App-header">
          <Card title={ this.state.articles[0].title } body={ this.state.articles[0].body } />
          <Card title={ this.state.articles[1].title } body={ this.state.articles[1].body } />
          <Card title={ this.state.articles[2].title } body={ this.state.articles[2].body } />
        </header>
      </div>
    );
  }
}
export default App;
