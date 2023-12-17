// import fs from node module
import fs from "fs";

// File content
const content = "Hello Node";

// Write to the file
fs.writeFile("welcome.txt", content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log('File "welcome.txt" created successfully!');
  }
});

// Read from the file
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:");
    console.log(data);
  }
});
