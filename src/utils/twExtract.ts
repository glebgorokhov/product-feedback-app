import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { type TailwindInput, tw } from "./tw";

function extractTailwindClasses(folderPath: string): string[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  const filePaths = globSync(path.join(folderPath, "**/*.tsx"));
  const extendedClasses: string[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  filePaths.forEach((filePath) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const classMatches = fileContent.match(/tw\(([\s\S]*?)\)/g);

    if (classMatches) {
      classMatches.forEach((match) => {
        // Remove function brackets etc.
        const jsonInput = match.slice(3, -1).trim();

        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const input: TailwindInput = eval(jsonInput);
          const extendedClass = tw(input);
          extendedClasses.push(...extendedClass.split(" "));
        } catch (error) {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          console.error(`Error parsing JSON input for ${filePath}: ${error}`);
        }
      });
    }
  });

  console.log("Generated classes from tws functions", extendedClasses);

  return extendedClasses;
}

export { extractTailwindClasses };
