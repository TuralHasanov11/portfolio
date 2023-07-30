const classes = [
  "blue-text-gradient",
  "red-text-gradient",
  "green-text-gradient",
  "yellow-text-gradient",
  "pink-text-gradient",
  "orange-text-gradient",
  "violet-text-gradient",
];

export default function getColorClassByNumber(index: number) {
  return classes[classes.length - index - 1];
}
