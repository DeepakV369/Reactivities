import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component {
state = {
   values:[]
}

componentDidMount() {
  axios.get('http://localhost:5000/api/values')
    .then((response) => {
      console.log(response);
      this.setState({
        values: response.data
     })
    })
   
}

  render() {
    return (
      <div>
         <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
        {this.state.values.map((value: any) => (
          <List.Item key={value.id}>{value.name}</List.Item>
        ))}
          
        </List>       
      </div>
    );
  }
  
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { cars } from './demo';
// import CarItem from './CarItem';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <ul>
//          {cars.map((car) => (
//            <CarItem car={car}/>
//          ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

