const classes = [
  "blue-text-gradient",
  "green-text-gradient",
  "yellow-text-gradient",
  "pink-text-gradient",
  "red-text-gradient",
  "orange-text-gradient",
  "violet-text-gradient"
];

export default function getColorClassByNumber(index: number) {
  return classes[index % classes.length - 1];
}
