
export interface ServiceOffering {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Service {
  id: string;
  title: string;
  heroTitle: string;
  introduction: string;
  offerings: ServiceOffering[];
  approach: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  benefits: {
    title: string;
    description: string;
    points: string[];
  };
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface ServiceNavLink extends NavLinkItem {
  sublinks?: NavLinkItem[];
}
