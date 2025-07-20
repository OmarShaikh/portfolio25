type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
};

type SoftwareDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const softwareData: SoftwareDataItem[] = [
  {
    title: "Cursor",
    imgSrc: "/cursor_logo.png",
    link: "https://www.cursor.so/",
  },
  {
    title: "n8n",
    imgSrc: "/n8n_logo.png",
    link: "https://n8n.io/",
  },
  {
    title: "Final Cut Pro",
    imgSrc: "/fcp_logo.png",
    link: "https://www.apple.com/final-cut-pro/",
  },
  {
    title: "Bambu Studio",
    imgSrc: "/bambu_studio_logo.png",
    link: "https://bambulab.com/en/download",
  },
  {
    title: "VSCode",
    imgSrc: "/vscode_logo.png",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Notion",
    imgSrc: "/notion_logo.png",
    link: "https://www.notion.so/",
  },
  {
    title: "Spotify",
    imgSrc: "/spotify_logo.png",
    link: "https://www.spotify.com/",
  },
  {
    title: "Figma",
    imgSrc: "/figma_logo.png",
    link: "https://www.figma.com/",
  },
  {
    title: "Unraid",
    imgSrc: "/unraid_logo.png",
    link: "https://unraid.net/",
  },
  {
    title: "Docker",
    imgSrc: "/docker_logo.png",
    link: "https://www.docker.com/",
  },
  {
    title: "Immich",
    imgSrc: "/immich_logo.png",
    link: "https://immich.app/",
  },
  {
    title: "Nextcloud",
    imgSrc: "/nextcloud_logo.png",
    link: "https://nextcloud.com/",
  },
  {
    title: "Home Assistant",
    imgSrc: "/homeassistant_logo.png",
    link: "https://www.home-assistant.io/",
  },
];

const hardwareData: HardwareDataItem[] = [
  {
    title: "MacBook Air M2",
    description:
      "My ultra-slim sidekick with Apple’s M2 magic—blazing fast, featherlight, and ready to tackle anything from editing to endless tabs.",
    link: "https://www.apple.com/shop/buy-mac/macbook-air",
  },
  {
    title: "Aula F75 Pro Keyboard",
    description:
      "A tactile dream in 75% form—gasket-mounted for that perfect thock, RGB for late-night vibes, and hot-swappable switches to match my mood.",
    link: "https://www.aulacn.com/",
  },
  {
    title: "Logitech MX Master 3 Mouse",
    description:
      "The productivity beast—sculpts to my hand, flies across screens, and scrolls through spreadsheets like it’s on a mission.",
    link: "https://www.logitech.com/en-us/products/mice/mx-master-3.html",
  },
  {
    title: "Osmo Action 5 Pro Camera",
    description:
      "My pocket-sized adventure buddy—shoots silky 4K60 footage with rock-steady stabilization, rain or shine.",
    link: "https://www.dji.com/osmo-action-5-pro",
  },
  {
    title: "iPhone 15 Pro",
    description:
      "A titanium marvel with a camera that turns every moment into a cinematic masterpiece—and yes, it’s as smooth as it looks.",
    link: "https://www.apple.com/shop/buy-iphone/iphone-15-pro",
  },
  {
    title: "BenQ 32 Inch 4K Monitor",
    description:
      "Massive 4K canvas with jaw-dropping clarity—my digital playground for design, editing, and immersive work sessions.",
    link: "https://www.benq.com/en-us/monitor/designer/pd3200u.html",
  },
  {
    title: "Lenovo 27 Inch 2K Vertical Monitor",
    description:
      "Vertical mode hero—perfect for towering code, crisp reading, and multitasking like a boss in 1440p glory.",
    link: "https://www.lenovo.com/us/en/p/accessories-and-software/monitors/office-monitors/t27q-20",
  },
  {
    title: "Osmo Action 6 Gimbal",
    description:
      "My secret weapon for buttery-smooth shots—this 3-axis gimbal makes every step look like a cinematic glide.",
    link: "https://www.dji.com/osmo-mobile-6",
  },
  {
    title: "Custom Built Home Lab",
    description:
      "My digital fortress—packed with servers, VMs, and a playground of self-hosted tools where I break and build at will.",
    link: "#",
  },
  {
    title: "BambuLab A1 with AMS Lite 3D Printer",
    description:
      "A speed demon of a printer—multi-color, lightning-fast, and whisper-quiet; it turns imagination into reality overnight.",
    link: "https://bambulab.com/en/a1",
  },
  {
    title: "DJI Mic Mini",
    description:
      "The wireless mic that makes me sound studio-crisp anywhere—tiny, powerful, and always ready for spontaneous shoots.",
    link: "https://www.dji.com/dji-mic",
  },
  {
    title: "Neewer 660 PRO RGB LED",
    description:
      "My go-to light source—dial in any color, set the perfect mood, and shoot like a pro whether it’s day or night.",
    link: "https://neewer.com/products/neewer-660-rgb-led-video-light",
  },
  {
    title: "Herman Miller Aeron",
    description:
      "The throne of ergonomic legends—keeps me comfy through marathon work sessions with breathable mesh and sublime support.",
    link: "https://www.hermanmiller.com/products/seating/office-chairs/aeron-chair/",
  },
  {
    title: "Sit Stand Desk from Workspace.ae 180x60 cm",
    description:
      "The stage for my daily grind—smooth electric lift, minimalist design, and a spacious surface to spread out ideas.",
    link: "https://workspace.ae/sit-stand-desk",
  },
  {
    title: "Samsung T5 SSD",
    description:
      "My pocket-sized speed vault—zips through backups, edits, and file transfers at warp speed with a sleek metal shell.",
    link: "https://www.samsung.com/portable-ssd/t5/",
  },
  {
    title: "Ray-Ban Meta 054",
    description:
      "Classic Ray-Bans reimagined—snap photos, take calls, and share moments hands-free in style that never goes out of fashion.",
    link: "https://www.ray-ban.com/usa/ray-ban-meta",
  },
];

export { hardwareData, softwareData };
