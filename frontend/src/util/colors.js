export function generateGradientFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = Math.abs(hash % 360);  // hue
  const s = 40;  // very low saturation (dull)
  const l = 35;  // very low lightness (dark)

  return `linear-gradient(135deg, hsl(${h}, ${s}%, ${l}%), #000000)`;
}

