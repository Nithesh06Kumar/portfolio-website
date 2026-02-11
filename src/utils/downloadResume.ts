/**
 * Downloads a resume file from a given URL or local path
 * @param resumeUrl - URL or path to the resume file
 * @param fileName - Optional custom filename for the downloaded file
 */
export const downloadResume = (
  resumeUrl: string,
  fileName: string = "resume.pdf",
) => {
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = fileName;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Downloads a resume from the public folder
 * @param fileName - Name of the resume file in the public folder
 */
export const downloadResumeFromPublic = (
  fileUrl: string,
  fileName: string = "resume.pdf",
) => {
  downloadResume(fileUrl, fileName);
};
