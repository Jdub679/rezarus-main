'use client';
import { Button } from "..";

interface DownloadButtonProps {
  filePath?: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ filePath, className }) => {
  const handleDownload = () => {
    if (filePath) {

      const link = document.createElement('a');
      const fileName = filePath.split('/').pop();
      link.href = filePath;
      
      link.setAttribute('download', fileName as string);

      document.appendChild(link);
      link.click()

      document.removeChild(link);
    } else {
      throw new Error('No download link found');
    }
  }
  return (
    <Button onClick={handleDownload} className={className} href=''>
      Download Now
    </Button>
  )
}

export default DownloadButton;