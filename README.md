# Local File Sharing with Next.js

A simple file sharing application built with Next.js that allows sharing files within a local network. The app provides a user-friendly interface to download files with file type icons and detailed information.

## Features

- Share files within local network
- File information display (size, creation date, modification date)
- File type icons for easy recognition
- HTTPS support for secure file transfer
- Supports various file types with custom icons

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Next.js 14+

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `files` directory in `public` folder:
```bash
mkdir public/files
```

## Usage

### Development Mode

```bash
# Regular development server
npm run dev
# or with Turbopack
npm run dev --turbopack
```

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### HTTPS Support

For HTTPS development:
```bash
npm run https
```

For HTTPS production with SSL proxy:
```bash
npm run start:ssl
```

Note: SSL certificates need to be placed in `certificates/` directory:
- `localhost.pem`
- `localhost-key.pem`

## File Structure

Place files to share in:
```
public/
  └── files/
      └── your-files-here
```

## File Information

The application provides the following information for each file:
- File name
- File size (formatted)
- Creation date
- Last modified date
- File type icon
- Directory/file indicator

## API Reference

### `getFiles()`

Retrieves file information from the public/files directory.

Returns:
```typescript
interface File {
  name: string
  path: string
  size: string
  created: Date
  modified: Date
  isDirectory: boolean
  type: keyof typeof iconMapping
}

Promise<{ files: File[] }>
```

### `getFileIcon(filename: string)`

Returns the appropriate React icon component for the file type.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Security Considerations

- This application is intended for local network use only
- Consider implementing authentication for sensitive files
- Keep your SSL certificates secure and up to date
- Regularly update dependencies for security patches
