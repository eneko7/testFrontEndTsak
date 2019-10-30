import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorBoundary from '../../components/commonComponent/ErrorBoundary/ErrorBoundary';
import HomeContent from '../../components/HomeContent';

const HomePage = () => (
  <ErrorBoundary>
    <Header />
    <HomeContent />
    <Footer />
  </ErrorBoundary>
);

export default HomePage;
