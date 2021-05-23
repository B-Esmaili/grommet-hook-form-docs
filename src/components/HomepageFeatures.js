import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fully Extensible',
    Svg: require('../../static/img/features/extensible.svg').default,
    description: (
      <>
         It is not limited to predefined set of ready-made editors , with <code>grommet-hook-form</code> limit is the sky. Rapidly prototype you'r form using the out of the box
         editors, while having full control over rendering and functionality of each of them and craft your own editor on-demand. 
      </>
    ),
  },
  {
    title: 'i18 ready',
    Svg: require('../../static/img/features/i18.svg').default,
    description: (
      <>
        All of editor labels , validation messages , feed-backs , status texts etc are localizable.Its more than easy to integrate it with your localization library.Next js sample is abailable here.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: require('../../static/img/features/developer.svg').default,
    description: (
      <>
          Without any extra abstraction layer it is ridiculously easy to adapt with for those who are already familiar with <code>grommet</code> and <code>react-hook-form</code>.
          Being developed in typescript all of APIs, editors and components are intutive to work with and understand by you and you'r IDE.  
      </>
    ),
  },
  {
    title: 'Opensource And Free',
    Svg: require('../../static/img/features/opensource.svg').default,
    description: (
      <>
         Its fully open-source and free of charge. It's source is hosted on github and is available as an NPM module.
      </>
    ),
  },
  {
    title: 'Performant',
    Svg: require('../../static/img/features/fast.svg').default,
    description: (
      <>
         Taking advantage of <code>react-hook-form</code>'s smart rendering, editors get updated only when necessary which results in smooth and interactive forms.
      </>
    ),
  },
  {
    title: 'Extended Validation Support',
    Svg: require('../../static/img/features/validate.svg').default,
    description: (
      <>
        Almost all type of form validations are possible , lenght , range , pattern and even asynchronous validation. 
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
}
