import { FileUp, Loader2 } from "lucide-react";
import React from "react";

import FileLoader from "../ui/file-loader";
import clsx from "clsx";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const DocUploader = ({ onChange, isLoading }: Props) => {
  return (
    <>
      <input
        type="file"
        className="hidden"
        id="file-uploader"
        onChange={onChange}
      />
      <label
        htmlFor="file-uploader"
        className={clsx(isLoading ? "cursor-wait" : "cursor-pointer")}
        onClick={isLoading ? (e) => e.preventDefault() : undefined}
      >
        <div className="flex h-[50vh] flex-col items-center gap-4 rounded-xl border-dashed border-ring bg-white p-4 shadow-xl">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed border-input p-4">
            {!isLoading ? (
              <>
                <div className="flex items-center gap-1 text-blue-500 hover:text-blue-600 hover:underline">
                  <FileUp size={18} />
                  <p> Click to Upload</p>
                </div>
                <p className="text-xl text-gray-500">or</p>
                <h3 className="text-gray-600">Drag and Drop Here</h3>
                <p className="text-xs text-gray-500">
                  Files Supported - PDF, XLS, XLSX, CSV | Max File Size: 2MB
                </p>
              </>
            ) : (
              <FileLoader
                messages={[
                  "Uploading file",
                  "Generating context (this might take a few minutes)",
                  "Just a little longer",
                  "Almost there",
                ]}
              />
            )}
          </div>
        </div>
      </label>
    </>
  );
};

export default DocUploader;
