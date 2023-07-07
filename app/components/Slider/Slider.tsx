import { useState } from "react";
import styles from "./slider.module.css";

type SliderProps = {
  children: React.ReactNode;
  onStepChange: (step: number) => void;
  max: number;
  onClose: () => void;
};

export function Slider(props: SliderProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = (offSet: number) => {
    if (currentStep + offSet < 1) return;
    if (currentStep + offSet > props.max) return;
    setCurrentStep(currentStep + offSet);
    props.onStepChange(currentStep + offSet);
  };

  return (
    <section className={styles.slider}>
      <header className={styles.header}>
        <p>Attachment Finder - Step {currentStep}</p>
        <button className={styles.secondarybtn} onClick={props.onClose}>
          Close
        </button>
      </header>

      <main className={styles.main}>{props.children}</main>

      <footer className={styles.footer}>
        <p className={styles.help}>
          <a
            href="https://www.machinerypartner.com/service-and-support"
            rel="noreferrer"
          >
            Not sure? Talk to an expert!
          </a>
        </p>
        <div className={styles.nav}>
          <button
            className={styles.secondarybtn}
            onClick={() => handleNextStep(-1)}
          >
            Back
          </button>
          <button
            className={styles.primarybtn}
            onClick={() => handleNextStep(1)}
          >
            Next
          </button>
        </div>
      </footer>
    </section>
  );
}
