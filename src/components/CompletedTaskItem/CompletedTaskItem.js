import React from 'react';

const CompletedTaskItem = (props) => {
  return (
      <div key={props.index}>
        <strong>{props.task}</strong> completed by <em>{props.email}</em>
      </div>
  )
};

export default CompletedTaskItem;