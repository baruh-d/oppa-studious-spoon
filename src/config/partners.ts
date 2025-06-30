export const PARTNERS = [
  "HP", 
  "Dell", 
  "Lenovo", 
  "Microsoft", 
  "Zoom", 
  "Motorola", 
  "Kenwood", 
  "JBL", 
  "Yamaha", 
  "Peavey"
] as const;

export type Partner = typeof PARTNERS[number]; // "HP" | "Dell" | "Lenovo" | ... | "Peavey"

// Logo URLs for each partner
export const PARTNER_LOGOS: Record<Partner, string> = {
  HP: "https://logos-world.net/wp-content/uploads/2020/09/HP-Logo.png",
  Dell: "https://logos-world.net/wp-content/uploads/2020/09/Dell-Logo.png",
  Lenovo: "https://logos-world.net/wp-content/uploads/2020/07/Lenovo-Logo.png",
  Microsoft: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
  Zoom: "https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png",
  Motorola: "https://logos-world.net/wp-content/uploads/2020/09/Motorola-Logo.png",
  Kenwood: "https://logos-world.net/wp-content/uploads/2020/09/Kenwood-Logo.png",
  JBL: "https://logos-world.net/wp-content/uploads/2020/09/JBL-Logo.png",
  Yamaha: "https://logos-world.net/wp-content/uploads/2020/09/Yamaha-Logo.png",
  Peavey: "https://logos-world.net/wp-content/uploads/2020/09/Peavey-Logo.png"
};

export const getDuplicatedPartners = (times: number = 3): Partner[] => {
  return Array(times).fill(PARTNERS).flat();
};

// Optional: Keep these if they might be useful later
export const getPartnerLogo = (partner: Partner): string => PARTNER_LOGOS[partner];

export const isValidPartner = (partner: string): partner is Partner => {
  return PARTNERS.includes(partner as Partner);
};