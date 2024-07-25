import { ref } from "vue";
// import { useIntervalFn } from "@vueuse/core";

const placeholders = [
  "dirb",
  "arjun",
  "dirhunt",
  "gowitness",
  "ffuf",
  "eyewitness",
  "dalfox",
  "nmap",
  "crunch",
  "amass",
  "fierce"
];

export function useRandomPlaceholder() {
  const placeholder = ref(
    placeholders[Math.floor(Math.random() * placeholders.length)]
  );

  // const updatePlaceholder = () => {
  //   const index = Math.floor(Math.random() * placeholders.length);
  //   placeholder.value = placeholders[index];
  // };

  // useIntervalFn(updatePlaceholder, 1500);

  return { placeholder };
}
