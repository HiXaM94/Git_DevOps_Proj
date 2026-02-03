function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s /= 100;
  l /= 100;
  
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  
  let r = 0, g = 0, b = 0;
  
  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }
  
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

function hslToCss(h, s, l) {
  return `hsl(${((h % 360) + 360) % 360} ${s}% ${l}%)`;
}

function rgbToCss(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

function updatePalette(hex) {
  const rgb = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // Calculate HSL values for all colors
  const hslValues = {
    base: { h, s, l },
    complementary: { h: h + 180, s, l },
    triad1: { h: h + 120, s, l },
    triad2: { h: h - 120, s, l },
    analog1: { h: h - 30, s, l },
    analog2: { h: h + 30, s, l }
  };

  // Generate all color formats
  const colorFormats = {};
  Object.keys(hslValues).forEach(key => {
    const hsl = hslValues[key];
    const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
    colorFormats[key] = {
      hsl: hslToCss(hsl.h, hsl.s, hsl.l),
      rgb: rgbToCss(rgb.r, rgb.g, rgb.b),
      hex: rgbToHex(rgb.r, rgb.g, rgb.b)
    };
  });

  document.getElementById(
    "hslText"
  ).textContent = `HSL: ${h}°, ${s}%, ${l}%`;

  const roleToColorKey = {
    "base-complementary": "base",
    complementary: "complementary",
    "base-triad": "base",
    "triad-1": "triad1",
    "triad-2": "triad2",
    "base-analogous": "base",
    "analogous-1": "analog1",
    "analogous-2": "analog2"
  };

  document
    .querySelectorAll(".swatch")
    .forEach((swatch) => {
      const role = swatch.getAttribute("data-role");
      const key = roleToColorKey[role];
      const color = colorFormats[key] || colorFormats.base;
      swatch.style.setProperty("--swatch-color", color.hsl);
    });

  // Update all code elements with HSL, RGB, and HEX
  document.querySelectorAll(".swatch").forEach((swatch) => {
    const role = swatch.getAttribute("data-role");
    const key = roleToColorKey[role];
    const formats = colorFormats[key] || colorFormats.base;
    
    const hslEl = swatch.querySelector("[data-format='hsl']");
    const rgbEl = swatch.querySelector("[data-format='rgb']");
    const hexEl = swatch.querySelector("[data-format='hex']");
    
    if (hslEl) {
      hslEl.textContent = formats.hsl;
      hslEl.setAttribute("data-color", formats.hsl);
      attachCopyHandler(hslEl);
    }
    if (rgbEl) {
      rgbEl.textContent = formats.rgb;
      rgbEl.setAttribute("data-color", formats.rgb);
      attachCopyHandler(rgbEl);
    }
    if (hexEl) {
      hexEl.textContent = formats.hex;
      hexEl.setAttribute("data-color", formats.hex);
      attachCopyHandler(hexEl);
    }
  });
}

function attachCopyHandler(el) {
  if (el.hasAttribute("data-copy-handler")) return;
  
  el.style.cursor = "pointer";
  el.title = "Click to copy";
  el.setAttribute("data-copy-handler", "true");
  
  el.addEventListener("click", async () => {
    const colorCode = el.getAttribute("data-color") || el.textContent;
    const success = await copyToClipboard(colorCode);
    if (success) {
      const originalText = el.textContent;
      el.textContent = "Copied!";
      el.style.color = "var(--accent)";
      showToast(`Copied: ${colorCode}`);
      setTimeout(() => {
        el.textContent = originalText;
        el.style.color = "";
      }, 1500);
    } else {
      showToast("Failed to copy");
    }
  });
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      document.body.removeChild(textarea);
      return true;
    } catch (e) {
      document.body.removeChild(textarea);
      return false;
    }
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("baseColor");
  input.addEventListener("input", (e) => updatePalette(e.target.value));
  updatePalette(input.value);
});

