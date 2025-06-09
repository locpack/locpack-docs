import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Project Information",
    description: (
      <>
        In today's world, where technology plays a key role in everyday life, finding and sharing
        information about places that users want to visit or have already visited is becoming an
        increasingly important task. The project aims to solve this problem by offering a convenient
        tool for creating and sharing collections of restaurants, hotels, attractions, and other
        places.
      </>
    ),
  },
  {
    title: "Main Goals for MVP",
    description: (
      <ul>
        <li>Interface design</li>
        <li>Database architecture with users, packs, and places</li>
        <li>API for working with the database</li>
        <li>Interaction between the user and server parts</li>
        <li>Docker images of the product parts</li>
        <li>Deployment to the server</li>
        <li>Creation of packs</li>
        <li>Ability to share and edit packs</li>
        <li>Ability to add places and share them</li>
        <li>Authorization and change of account data</li>
      </ul>
    ),
  },
  {
    title: "Links",
    description: (
      <ul>
        <li>
          <a href="https://github.com/locpack">Github project</a>
        </li>
        <li>
          <a href="https://github.com/locpack/locpack-backend">Backend repository</a>
        </li>
        <li>
          <a href="https://github.com/locpack/locpack-frontend">Frontend repository</a>
        </li>
        <li>
          <a href="https://www.figma.com/design/Ea5F84bR3B9uU4NZpn3ol0/Main?node-id=0-1&t=Od5K8B5y4375MWle-1">
            Figma
          </a>
        </li>
        <li>
          <a href="https://github.com/orgs/locpack/projects/1">Tasks</a>
        </li>
      </ul>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
