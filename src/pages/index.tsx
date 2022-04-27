import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

const HomepageHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/guide-docs/intro"
          >
            使用指南
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/deploy-docs/intro"
          >
            部署教程
          </Link>
        </div>
      </div>
    </header>
  );
};

const Home: React.FC = () => {
  return (
    <Layout title={`主页`} description="校园远程通知平台">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
