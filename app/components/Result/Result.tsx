import { Attachment } from "@/app/entities/Attachment";

type ResultProps = {
  results: Attachment[];
};
export function Result({ results }: ResultProps) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.name}>
          <div>{result.model}</div>
          <div>{result.name}</div>
          <div>{result.price}</div>
        </div>
      ))}
    </div>
  );
}
