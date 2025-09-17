import fs from "fs";
import path from "path";

export default function Home() {
    // Load HTML file from public or local folder
    const filePath = path.join(process.cwd(), "public", "index.html");
    const html = fs.readFileSync(filePath, "utf8");
  
    return (
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
}
