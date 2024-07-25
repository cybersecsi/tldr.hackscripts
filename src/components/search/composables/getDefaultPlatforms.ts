type Platform =
  | "network"
  | "web"
  | "bruteforce"
  | "dns";

export function getDefaultPlatforms(): Platform[] {
  const platforms: Platform[] = ["network", "web", "bruteforce", "dns"];
  const navigatorPlatform = navigator?.platform?.toLowerCase();

  if (navigatorPlatform.includes("network")) {
    platforms.push("network");
  }

  if (navigatorPlatform.includes("web")) {
    platforms.push("web");
  }

  if (navigatorPlatform.includes("bruteforce")) {
    platforms.push("bruteforce");
  }

  if (navigatorPlatform.includes("dns")) {
    platforms.push("dns");
  }


  const uaPlatform: string = (
    navigator as any
  )?.userAgentData?.platform?.toLowerCase();

  if (uaPlatform) {
    if (uaPlatform.includes("network")) {
      platforms.push("network");
    }

    if (uaPlatform.includes("web")) {
      platforms.push("web");
    }

    if (uaPlatform.includes("bruteforce")) {
      platforms.push("bruteforce");
    }

    if (uaPlatform.includes("dns")) {
      platforms.push("dns");
    }
  }

  return [...new Set(platforms)];
}
