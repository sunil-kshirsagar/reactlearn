// Import React and ReactDOm Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="sunil"
          timeAgo="Today at 4:45AM"
          text="Good explaination"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="shekhar"
          timeAgo="Today at 3:12PM"
          text="Nice"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="ranjeet"
          timeAgo="Yesterday at 6:25PM"
          text="Informative"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Take a react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);