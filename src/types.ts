export type BulletPoint = {
  key: string;
  value: string[];
}

export type Experience = {
  title: string;
  company: string;
  company_url: string;
  logo_path: string;
  duration: string;
  location: string;
  bulletList: BulletPoint[];
  description: string;
  color: string;
};

export type Theme = {
  body: string;
  text: string;
  highlight: string;
  dark: string;
  secondaryText: string;
  imageHighlight: string;
  compImgHighlight: string;
  jacketColor: string;
  headerColor: string;
}
