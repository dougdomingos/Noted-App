/**
 * This function limits a string to a determined number of
 * characters and concatenates a ellipsis sufix to it.
 *
 * If the given string does not exceed the limit, the function
 * will simply return it without any mutations.
 */

export function trimText(text: string, maxLength: number = 80) {
  // returns the string if within length limits
  if (text.length <= maxLength) {
    return text;
  }

  // creates a sliced copy and adds an ellipsis sufix to it
  const trimmedText = text.slice(0, maxLength).concat("...");

  return trimmedText;
}
