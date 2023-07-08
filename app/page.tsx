"use client";
import { useState } from "react";
import MachineryRepository from "@/app/repository/MachineryRepository";
import { Attachment, Filter } from "./entities/Attachment";
import { AttachmentConfiguration, Result, Loading } from "./components";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Attachment[]>([]);
  const handleComplete = async (filters: Filter) => {
    setLoading(true);
    const results: Attachment[] = await MachineryRepository.getAttachments(
      filters
    );
    setResults(results);
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && results.length === 0 && (
        <AttachmentConfiguration onComplete={handleComplete} />
      )}
      {!loading && results.length > 0 && <Result results={results} />}
    </>
  );
}
