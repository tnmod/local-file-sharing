import path from "path";
import fs from "fs";
import {formatFileSize} from "@/utils/format";
import {iconMapping} from "@/lib/icon";

export interface File {
  name: string
  path: string
  size: string
  created: Date
  modified: Date
  isDirectory: boolean
  type: keyof typeof iconMapping
}


export function getFileIcon(filename: string) {
  const extension = filename.split('.').pop()?.toLowerCase() as keyof typeof iconMapping || '';
  return iconMapping[extension] || iconMapping['default'];
}

export async function getFiles(): Promise<{ files: File[] }> {
  try {
    const publicDir = path.join(process.cwd(), 'public', 'files')
    const files = fs.readdirSync(publicDir)

    const fileDetails: File[] = files.map(filename => {
      const filePath = path.join(publicDir, filename)
      const stats = fs.statSync(filePath)

      return {
        name: filename,
        path: `/files/${filename}`,
        size: formatFileSize(stats.size),
        created: stats.birthtime,
        modified: stats.mtime,
        isDirectory: stats.isDirectory(),
        type: filename.split('.').pop() as keyof typeof iconMapping || 'default'
      }
    })

    return {
      files: fileDetails
    }
  } catch (e) {
    console.error(e)
    return {
      files: []
    }
  }
}
