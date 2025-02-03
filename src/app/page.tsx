import Link from "next/link";
import {getFileIcon, getFiles} from "@/services/file";


export default async function Home() {
  const {files} = await getFiles()
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-gray-300">Files</h1>
      <div className={'container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12'}>
        {
          files.map((file, index) => (
            <div key={index} className={'bg-gray-800 p-4 rounded-xl relative flex flex-col gap-4 justify-between'}>
              <p className="font-bold text-blue-500">{file.name} - {file.size}</p>
              <div className={'flex items-stretch gap-2'}>
                <Link href={file.path} download
                      className={'px-6 rounded-md flex items-center flex-1 justify-center bg-gray-600 '}>
                  <span className="font-bold text-gray-300">Download</span>
                </Link>
                <div className={' rounded-md bg-gray-600 flex justify-center items-center p-3'}>
                  {getFileIcon(file.name)}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
