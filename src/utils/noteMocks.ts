import { TNote } from "../components/Note";

/**
 * This function generates fake Note objects for development
 * environment. It solves the issue of generating unique IDs used
 * by React's 'key' prop.
 *
 * This implementation may be discarted in the future,
 * if it is not suitable for test modules or
 * a more efficient method is found.
 */

export function generateNoteMocks(numberOfNotes: number) {
  const noteMocks: TNote[] = [];

  for (let i = 0; i < numberOfNotes; i++) {
    noteMocks.push({
      id: i,
      title: `Sample note ${i}`,
      content: `Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Illum minus id ullam ut nisi? 
      Labore beatae veniam ratione repellat amet.`,
    });
  }

  return noteMocks;
}
