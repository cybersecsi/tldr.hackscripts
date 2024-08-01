import type { Entry } from "@zip.js/zip.js";

export async function getText(entry: Entry): Promise<string> {
  const { TextWriter } = await import("./zip-js-lib");
  let text = '';
  if (entry && typeof entry.getData === 'function') {
    const text = await entry.getData(new TextWriter());
    return text;
  } 
  else {
    throw new Error('Text cannot be empty');

  }
}
