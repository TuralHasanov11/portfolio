const classes = [
  "blue-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
  "red-text-gradient",
  "yellow-text-gradient",
];

export default function getColorClassByNumber(index: number) {
  return classes[index % classes.length - 1];
}
