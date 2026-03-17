type ProjectType = {
  id?: string | number;
  title?: string;
  desc?: string;
  image?: string;
  parts?: string[];
  skills?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[];
  [key: string]: unknown;
};

type LabelDesc = {
  label: string;
  desc: ReactNode;
};

type AwardItem = {
  icon: ReactNode;
  title: string;
  result: string;
};

type FeatureDetailSection =
  {
    type: "descs";
    label: string;
    descs: ReactNode[];
  }
  | {
    type: "img";
    label: string;
    img: string;
  };

type Feature = {
  desc: ReactNode;
  details: FeatureDetailSection[];
};

type ContributionItem = {
  label: string;
  desc: string[];
};

type TroubleSolution = {
  trouble: string;
  solution: string;
};

type TroubleShootingItem = {
  label: string;
  desc: TroubleSolution[];
};

type Link = {
  icon: ReactNode,
  link: string;
}

type ProjectDetail = {
  title: string;
  background: string;
  logo: ReactNode;
  desc: string;
  skills: ReactNode[];
  links: Link[];
  period: string;
  team: string;
  parts: string[];

  overview: ReactNode[];

  award?: AwardItem[];

  feature: Feature;

  contribution: ContributionItem[];

  troubleShooting: TroubleShootingItem[];

  imageLabel?: string;
  images?: string[];
};