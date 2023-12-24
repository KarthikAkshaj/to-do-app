"use client";

import React from "react";

interface Props {
  task: any;
}

function TaskItem({ task }: Props) {
  const { title, description, date, completed, important } = task;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">(date)</p>
    </div>
  );
}

export default TaskItem;
