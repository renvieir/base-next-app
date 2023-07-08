import { Attachment, Filter } from "@/app/entities/Attachment";

class LocalMachineryRepository {
  getFilters() {
    return {
      types: [
        {
          description: "Excavator",
          key: "excavator",
        },
        {
          description: "Skid Steer",
          key: "skid-steer",
        },
      ],
      categories: [
        {
          description: "Mini",
          key: "mini",
        },
        {
          description: "Medium",
          key: "medium",
        },
        {
          description: "Large",
          key: "large",
        },
      ],
      hidraulicFlows: [
        {
          description: "Standar Flow (17-25 GPM)",
          key: "standard",
        },
        {
          description: "High Flow (30-45 GPM)",
          key: "high",
        },
      ],
      materials: [
        {
          description: "Short (ex: small trunks)",
          key: "short",
        },
        {
          description: "Medium (ex: small trees)",
          key: "medium",
        },
        {
          description: "Long (ex: large trees)",
          key: "long",
        },
      ],
    };
  }

  getAttachments(filter: Filter): Promise<Attachment[]> {
    return Promise.resolve([
      {
        type: "excavator",
        imgUrl:
          "https://assets-global.website-files.com/624ed76e8b299a373058dba2/6276da7e27662612466ae400_GK-100S.png",
        model: "GK100S",
        name: "Hydraulic Breaker",
        price: 12000,
        recommended: false,
      },
      {
        type: "excavator",
        imgUrl:
          "https://assets-global.website-files.com/624ed76e8b299a373058dba2/6276da7e27662612466ae400_GK-100S.png",
        model: "HF150",
        name: "Hydraulic Breaker",
        price: 7500,
        recommended: true,
      },
      {
        type: "excavator",
        imgUrl:
          "https://assets-global.website-files.com/624ed76e8b299a373058dba2/6276da7e27662612466ae400_GK-100S.png",
        model: "HF400",
        name: "Hydraulic Breaker",
        price: 30000,
        recommended: false,
      },
    ]);
  }
}

const repository = new LocalMachineryRepository();
export default repository;
