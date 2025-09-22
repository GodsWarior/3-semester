import React, { Component } from 'react';
import { companyData } from '../data';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <h2>Наша история</h2>
        <p>
          {companyData.name} начал свой путь в 2015 году с маленькой обжарочной машины и большой любви к кофе.
          Сегодня мы — это уютное пространство, где каждый может найти свой идеальный вкус.
        </p>
        <h3>Наша миссия</h3>
        <p>Открывать людям мир спешиалти кофе, предлагая только лучшие сорта и честное отношение к делу.</p>
        <div className="about-gallery">
          <div className="gallery-item">Фото кофейни 1</div>
          <div className="gallery-item">Фото кофейни 2</div>
          <div className="gallery-item">Фото кофейни 3</div>
        </div>
      </div>
    );
  }
}

export default AboutPage;