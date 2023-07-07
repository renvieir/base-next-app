"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Slider } from "./components/Slider";

function StepOne() {
  return (
    <div className={styles.center}>
      <div>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <p>Mini - Standon (less than x lbs)</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [step, setStep] = useState<React.ReactNode>(<StepOne />);
  const handleStepChanged = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        setStep(<StepOne />);
        break;

      default:
        setStep(<StepOne />);
        break;
    }
  };
  return (
    <Slider onClose={() => null} onStepChange={handleStepChanged}>
      {step}
    </Slider>
  );
}
