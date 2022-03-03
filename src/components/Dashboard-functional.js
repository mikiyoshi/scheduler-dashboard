import React, { Component } from 'react';

import classnames from 'classnames';

function Dashboard(props) {
  const dashboardClasses = classnames('dashboard');
  return <main className={dashboardClasses} />;
}

export default Dashboard;
