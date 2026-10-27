import type { CSSProperties } from "react";
import { PROJECT } from "@/data/portfolioData";
import Eyebrow from "@/components/ui/Eyebrow";
import TechIcon from "@/components/ui/TechIcon";
import TechTags from "@/components/ui/TechTags";
import { ICONS } from "@/components/ui/iconRegistry";
import styles from "./Work.module.css";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <header className="section-header" data-reveal>
          <Eyebrow icon="folder">Selected work</Eyebrow>
          <h2 className="section-title">A production healthcare platform, end to end.</h2>
          <p className="section-lead">
            A closer look at the backend I build and maintain: the modules, the integrations, and how the critical flows
            fit together.
          </p>
        </header>

        <article className={styles.overview} data-reveal data-spotlight>
          <div className={styles.overviewMain}>
            <p className={styles.kicker}>Case study · {PROJECT.period}</p>
            <h3 className={styles.name}>
              {PROJECT.name}
              <span className={styles.subtitle}>{PROJECT.subtitle}</span>
            </h3>
            <p className={styles.description}>{PROJECT.description}</p>
            <TechTags items={PROJECT.stack} />
          </div>

          <dl className={styles.facts}>
            {PROJECT.facts.map((fact) => {
              const Icon = ICONS[fact.icon];
              return (
                <div key={fact.label} className={styles.fact}>
                  <span className={styles.factIcon}>
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </article>

        <div className={styles.block}>
          <h3 className={styles.blockTitle} data-reveal>
            Modules I built
          </h3>
          <ol className={styles.modules}>
            {PROJECT.modules.map((mod, i) => {
              const Icon = ICONS[mod.icon];
              return (
                <li key={mod.name} className={styles.module} data-reveal style={delay((i % 2) * 100)}>
                  <span className={styles.moduleIcon}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className={styles.moduleName}>
                      <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                      {mod.name}
                    </h4>
                    <p className={styles.moduleText}>{mod.description}</p>
                    <ul className={styles.moduleStack}>
                      {mod.stack.map((tech) => (
                        <li key={tech}>
                          <TechIcon name={tech} size={12} />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle} data-reveal>
            How the key flows work
          </h3>
          <div className={styles.flows}>
            {PROJECT.workflows.map((flow, i) => {
              const Icon = ICONS[flow.icon];
              return (
                <div
                  key={flow.name}
                  className={`${styles.flow} lift`}
                  data-reveal
                  data-spotlight
                  style={delay(i * 120)}
                >
                  <div className={styles.flowHead}>
                    <span className={styles.flowIcon}>
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h4 className={styles.flowName}>{flow.name}</h4>
                  </div>
                  <p className={styles.flowText}>{flow.description}</p>
                  <ol className={styles.steps}>
                    {flow.steps.map((step, j) => (
                      <li key={step.title} className={styles.step}>
                        <span className={styles.stepNumber}>{j + 1}</span>
                        <div>
                          <p className={styles.stepTitle}>{step.title}</p>
                          <p className={styles.stepText}>{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
