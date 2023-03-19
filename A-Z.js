const fs = require("fs");
const path = require("path");

// Define the directory path to sort files in
const directoryPath = "/home/hazel_e1/Downloads/files";

// Read the directory contents
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Sort the file names alphabetically
  files.sort((a, b) => {
    return a.localeCompare(b, undefined, { sensitivity: "base" });
  });

  // Loop through each file and rename it based on its sorted order
  for (let i = 0; i < files.length; i++) {
    const oldFilePath = path.join(directoryPath, files[i]);
    const fileExtension = path.extname(oldFilePath);
    const newFileName = `${i + 1}_${path.basename( 
      files[i],
      fileExtension
    )}${fileExtension}`;
    const newFilePath = path.join(directoryPath, newFileName);

    fs.renameSync(oldFilePath, newFilePath);
    console.log(`Renamed ${files[i]} to ${newFileName}`);
  }
});
