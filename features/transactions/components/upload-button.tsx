import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";

type Props = {
  onUpload: (results: any) => void;
};

export function UploadButton({ onUpload }: Props) {
  const { CSVReader } = useCSVReader();

  //TODO: Add a paywall here

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button size="sm" className="w-full lg:w-auto" {...getRootProps()}>
          <Upload className="mr-2" />
          Import
        </Button>
      )}
    </CSVReader>
  );
}
