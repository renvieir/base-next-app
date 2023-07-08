import { useState } from "react";
import styles from "./attachment-configuration.module.css";
import { Slider } from "../Slider";
import { Filter } from "@/app/entities/Attachment";
import MachineryRepository from "@/app/repository/MachineryRepository";

type ConfigProps = {
  onChange: (type: string) => void;
  items: { description: React.ReactNode; key: string }[];
  selectedKey?: string;
};
function Config({ onChange, items, selectedKey }: ConfigProps) {
  return (
    <div className={styles.center}>
      {items.map((item) => (
        <div
          key={item.key}
          className={styles.type}
          onClick={() => {
            onChange(item.key);
            console.log(item.key);
            console.log(selectedKey);
          }}
        >
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

type AttachmentConfigurationProps = {
  onComplete: (filter: Filter) => void;
};
export function AttachmentConfiguration({
  onComplete,
}: AttachmentConfigurationProps) {
  const { types, categories, hidraulicFlows, materials } =
    MachineryRepository.getFilters();
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [flow, setFlow] = useState("");
  const [material, setMaterial] = useState("");
  const typeConfig = <Config onChange={setType} items={types} />;
  const [step, setStep] = useState<React.ReactNode>(typeConfig);

  const handleStepChanged = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        setStep(typeConfig);
        break;
      case 2:
        setStep(
          <Config
            onChange={setCategory}
            items={categories}
            selectedKey={category}
          />
        );
        break;

      case 3:
        setStep(<Config onChange={setFlow} items={hidraulicFlows} />);
        break;
      case 4:
        setStep(<Config onChange={setMaterial} items={materials} />);
        break;

      default:
        setStep(typeConfig);
        break;
    }
  };
  return (
    <Slider
      onClose={() => null}
      onStepChange={handleStepChanged}
      max={4}
      onFinish={() => {
        onComplete({
          type,
          category,
          hidraulicFlow: flow,
          material,
        });
      }}
    >
      <div>{step}</div>
    </Slider>
  );
}
