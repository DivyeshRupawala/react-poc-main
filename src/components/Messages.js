import React from 'react';

import Message from './Message';

import {
  Link,
  Route,
  Routes
} from 'react-router-dom';

const Messages = ({ match }) => (
  <div>
    <ul>
    {
        [...Array(5).keys()].map(n => {
            return <li key={n}>
                    <Link to={`${match.url}/${n+1}`}>
                      Message {n+1}
                    </Link>
                  </li>;
        })
    }
    </ul>
    <Routes>
      <Route path={`${match.url}/:id(\\d+)`} elemnt={<Message/>} />
      <Route
        path={match.url}
        render={() => <h3>Please select a message</h3>}
      />
    </Routes>
  </div>
);

export default Messages;