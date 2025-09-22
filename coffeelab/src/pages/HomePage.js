import React, { Component } from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ProductList from '../components/ProductList';
import { featuresData } from '../data';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <section className="features">
          <h2>Почему выбирают нас?</h2>
          <div className="features-container">
            {featuresData.map(feature => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </section>
        <ProductList />
      </div>
    );
  }
}

export default HomePage;