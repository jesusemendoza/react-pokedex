import React from 'react';
import Routes from './routes'
import igdb from 'igdb-api-node';
import './_app.scss'


const client = igdb(process.env.IGDB_API_KEY);

console.log(client, ':   client')


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}
