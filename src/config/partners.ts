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

export type Partner = typeof PARTNERS[number];// "HP" | "Dell" | "Lenovo" | ... | "Peav