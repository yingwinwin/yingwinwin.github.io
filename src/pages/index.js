import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "HTML",
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: <>清晰的布局，在开始分析设计组件的时候，布局就应该想好了，不仅关乎到CSS的编写，也同样会影响到Js的逻辑编写，相对CSS和Js来说，简单一些。</>,
  },
  {
    title: "CSS",
    // imageUrl: "img/undraw_docusaurus_tree.svg",
    description: <>优雅的CSS，最近写项目，觉得CSS编程好重要，如果CSS做的不够好，逻辑改动甚至会影响到样式的变动，所以这边也至关重要。</>,
  },
  {
    title: "JavaScript",
    // imageUrl: "img/undraw_docusaurus_react.svg",
    description: <>扎实的Js基础，关乎到自己的工作开发效率，凡事想明白，在下手，总比自己写好了重写的好。多总结，多看，多用脑子记。这样开发效率才能上升，要多学习。</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/js_base")}
            >
              点击开始
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
