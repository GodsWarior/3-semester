import React, { Component } from 'react';

class FeatureCard extends Component {
  render() {
    // Получаем данные через props от родительского компонента
    const { title, description, icon } = this.props;
    return (
      <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default FeatureCard;