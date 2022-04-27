import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '远程通知 方便快捷',
    Svg: require('@site/static/img/undraw_real_time_sync.svg').default,
    description:
      '专用于校园多媒体设备的通知平台。教师注册账户并绑定教室设备。弹窗通知醒目快捷。',
  },
  {
    title: '独立应用 易于管理',
    Svg: require('@site/static/img/undraw_teaching.svg').default,
    description:
      '每个学校拥有单独的平台，可部署在内网。同时提供完善的管理员后台，便于获取数据并操作修改。',
  },
  {
    title: '开源免费 安全可靠',
    Svg: require('@site/static/img/undraw_security.svg').default,
    description:
      '源代码在GitHub上完全开放，持续维护更新。下载使用完全免费。欢迎Star和Fork！',
  },
];

const Feature: React.FC<FeatureItem> = ({ title, Svg, description }) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
