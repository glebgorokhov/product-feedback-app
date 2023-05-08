export type TailwindInput = string | boolean | TailwindArray | TailwindObject;
export type TailwindArray = TailwindInput[];

interface TailwindObject {
  [key: string]: TailwindInput;
}

export function tw(input: TailwindInput, prefix = ""): string {
  if (typeof input === "string") {
    return prefix
      ? input
          .split(" ")
          .map((c) => `${prefix}:${c}`)
          .join(" ")
      : input;
  }

  if (Array.isArray(input)) {
    return input
      .map((item) => tw(item, prefix))
      .join(" ")
      .trim();
  }

  if (typeof input === "object") {
    return Object.entries(input)
      .flatMap(([key, value]) => {
        if (typeof value === "boolean") {
          return value ? tw(key, prefix) : "";
        }
        const newPrefix = prefix ? `${prefix}:${key}` : key;
        return tw(value as TailwindInput, newPrefix);
      })
      .filter(Boolean)
      .join(" ");
  }

  return "";
}

export function twExtract(content: string) {
  const regex = /tw\((.*?)\)/g;
  const matches = content.match(regex);
  console.log(matches);
  return content.match(/[^<>"'`\s]*/);
}
