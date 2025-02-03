import {AiFillFile, AiFillFileImage, AiFillFileText, AiFillFileZip} from 'react-icons/ai'

import {
  BsFiletypeCss,
  BsFiletypeDocx,
  BsFiletypeJs,
  BsFiletypeJson,
  BsFiletypeMd,
  BsFiletypePdf,
  BsFiletypeTsx,
  BsFiletypeXls
} from 'react-icons/bs'

import {TbFileTypeSvg} from 'react-icons/tb'

import {FaFileAudio, FaFileCode, FaFileVideo} from 'react-icons/fa'

export const iconMapping = {
  // Archives
  'zip': <AiFillFileZip/>,
  'rar': <AiFillFileZip/>,
  '7z': <AiFillFileZip/>,
  'tar': <AiFillFileZip/>,
  'gz': <AiFillFileZip/>,

  // Images
  'svg': <TbFileTypeSvg/>,
  'png': <AiFillFileImage/>,
  'jpg': <AiFillFileImage/>,
  'jpeg': <AiFillFileImage/>,
  'gif': <AiFillFileImage/>,
  'bmp': <AiFillFileImage/>,
  'webp': <AiFillFileImage/>,

  // Documents
  'pdf': <BsFiletypePdf/>,
  'doc': <BsFiletypeDocx/>,
  'docx': <BsFiletypeDocx/>,
  'xls': <BsFiletypeXls/>,
  'xlsx': <BsFiletypeXls/>,
  'txt': <AiFillFileText/>,
  'md': <BsFiletypeMd/>,

  // Code/Development
  'html': <FaFileCode/>,
  'css': <BsFiletypeCss/>,
  'js': <BsFiletypeJs/>,
  'jsx': <BsFiletypeJs/>,
  'ts': <BsFiletypeTsx/>,
  'tsx': <BsFiletypeTsx/>,
  'json': <BsFiletypeJson/>,
  'php': <FaFileCode/>,
  'py': <FaFileCode/>,
  'java': <FaFileCode/>,

  // Media
  'mp3': <FaFileAudio/>,
  'wav': <FaFileAudio/>,
  'ogg': <FaFileAudio/>,
  'mp4': <FaFileVideo/>,
  'avi': <FaFileVideo/>,
  'mov': <FaFileVideo/>,
  'wmv': <FaFileVideo/>,
  'mkv': <FaFileVideo/>,

  // Default
  'default': <AiFillFile/>
}
