export interface PartnerProps {
  title: string;
  slug: string;
  image: string;
  description: string;
  primary: string;
  secondary: string;
  igcse: string;
  alevel: string;
}


export const partners: PartnerProps[] = [
  {
    title: "CS Online School",
    slug: "cs-canary",
    image: "/CS-logo.webp",
    description: "Description",
    primary: "3000",
    secondary: "4000",
    igcse: "5000",
    alevel: "6000"
  },
  
]