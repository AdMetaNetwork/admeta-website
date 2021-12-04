import React from 'react';
//import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  // <Section
  //   title="Your title here"
  //   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  // >
  //<Background color="bg-gray-100">
  <Section title="" description="">
    {/* <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> */}
    <VerticalFeatureRow
      title="Privacy Protected"
      description="User data are fully protected with TEE, and controlled by users themselves"
      image="/assets/images/privacy-and-policy.svg"
      imageAlt="Privacy Protected"
    />
    <VerticalFeatureRow
      title="Precisely Targeted"
      description="Zero-knowledge proof guarantees a precise target group match"
      image="/assets/images/bullseye.svg"
      imageAlt="Precisely Targeted"
      reverse
    />
    <VerticalFeatureRow
      title="User Oriented"
      description="Users can turn off all ads at any time. It's totally free choice"
      image="/assets/images/happy.svg"
      imageAlt="User Oriented"
    />
    <VerticalFeatureRow
      title="Decentralized Governed"
      description="Advertisers are evaluated democratically, to improve the ads quality"
      image="/assets/images/team-meeting-illustration.svg"
      imageAlt="Decentralized Governed"
      reverse
    />
  </Section>
  //</Background>
);

export { VerticalFeatures };
