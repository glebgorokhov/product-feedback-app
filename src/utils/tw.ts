type TailwindInput = string | boolean | TailwindArray | TailwindObject;
type TailwindArray = TailwindInput[];
interface TailwindObject {
  [key: string]: TailwindInput;
}

export default function tw(input: TailwindInput, prefix = ""): string {
  if (typeof input === "string") {
    return prefix ? `${prefix}:${input}` : input;
  }

  if (Array.isArray(input)) {
    return input.map((item) => tw(item, prefix)).join(" ");
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
