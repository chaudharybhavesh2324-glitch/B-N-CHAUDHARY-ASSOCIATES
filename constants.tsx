
import React from 'react';
import type { ServiceNavLink } from './types';

// Heroicons SVGs as React components
const ScaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.153.34c-1.119 0-2.21-.297-3.185-.816-1.724-.92-2.351-2.946-1.591-4.577l2.62-10.726m-2.62 10.726l-2.62-10.726" />
  </svg>
);

const DocumentChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.087-3.162 3.421-3.162-3.421-1-1.087m13.5 0v2.25A2.25 2.25 0 0018 21h-2.25m-7.5 0h7.5m-7.5 0v-2.25A2.25 2.25 0 016 16.5h2.25" />
  </svg>
);

const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.508 19.64 3 17.418 3 15V8.25a9 9 0 0118 0v6.75c0 2.418-1.508 4.64-4.25 5.589z" />
  </svg>
);

const BuildingOffice2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.545M3 12l4.5 1.636M18.75 17.25l-1.5-.545M12 12.75l-4.5-1.636M12 12.75l4.5-1.636M12 12.75V21m0-8.25v-6m0 6l-4.5 1.636m4.5-1.636l4.5 1.636" />
    </svg>
);

const ClipboardDocumentListIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const SquaresPlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v2.25A2.25 2.25 0 006 20.25z" />
    </svg>
);


export const NAV_LINKS: ServiceNavLink[] = [
  { name: 'navHome', path: '/' },
  { name: 'navAbout', path: '/about' },
  { name: 'navTeam', path: '/team' },
  {
    name: 'navServices',
    path: '#',
    sublinks: [
      { name: 'serviceAuditTitle', path: '/services/audit-assurance' },
      { name: 'serviceTaxationTitle', path: '/services/taxation' },
      { name: 'serviceAdvisoryTitle', path: '/services/advisory' },
      { name: 'serviceCorporateTitle', path: '/services/corporate-compliances' },
      { name: 'serviceCertificationTitle', path: '/services/certification' },
      { name: 'serviceOtherTitle', path: '/services/other-services' },
    ],
  },
  {
    name: 'navResources',
    path: '#',
    sublinks: [
      { name: 'navNews', path: '/news' },
      { name: 'navBlog', path: '/blog' },
    ],
  },
  { name: 'navContact', path: '/contact' },
];

export const SERVICES_DATA = [
  {
    id: 'audit-assurance',
    icon: ScaleIcon,
  },
  {
    id: 'taxation',
    icon: DocumentChartBarIcon,
  },
   {
    id: 'advisory',
    icon: LightBulbIcon,
  },
  {
    id: 'corporate-compliances',
    icon: BuildingOffice2Icon,
  },
  {
    id: 'certification',
    icon: ClipboardDocumentListIcon,
  },
  {
    id: 'other-services',
    icon: SquaresPlusIcon,
  },
];

export const SERVICE_OFFERING_ICONS: { [key: string]: React.ElementType } = {
  'statutory-audit': ScaleIcon,
  'internal-audit': DocumentChartBarIcon,
  'tax-audit': ScaleIcon,
  'gst-audit': DocumentChartBarIcon,
  'corporate-tax': DocumentChartBarIcon,
  'gst-compliance': ScaleIcon,
  'international-tax': DocumentChartBarIcon,
  'personal-tax': ScaleIcon,
  'business-valuation': LightBulbIcon,
  'due-diligence': DocumentChartBarIcon,
  'project-financing': ScaleIcon,
  'startup-advisory': LightBulbIcon,
  'roc-filing': DocumentChartBarIcon,
  'company-registration': BuildingOffice2Icon,
  'company-liquidation': ScaleIcon,
  'share-buyback': DocumentChartBarIcon,
  'share-demat': LightBulbIcon,
  'other-advisory': LightBulbIcon,
  'cert-tax-audit': ScaleIcon,
  'cert-form-15cb': DocumentChartBarIcon,
  'cert-tds': ScaleIcon,
  'cert-gst-refund': DocumentChartBarIcon,
  'cert-gst-turnover': ScaleIcon,
  'cert-anti-profiteering': DocumentChartBarIcon,
  'cert-net-worth': LightBulbIcon,
  'cert-projections': DocumentChartBarIcon,
  'cert-fund-utilization': ScaleIcon,
  'cert-stock-audit': DocumentChartBarIcon,
  'cert-true-fair': LightBulbIcon,
  'cert-govt-subsidy': ScaleIcon,
  'cert-statutory-dues': DocumentChartBarIcon,
  'cert-turnover': LightBulbIcon,
  'cert-csr': ScaleIcon,
  'trust-registration': BuildingOffice2Icon,
  'trust-audit': ScaleIcon,
  'mystery-audit': DocumentChartBarIcon,
  'project-report': ClipboardDocumentListIcon,
  'financial-planning': LightBulbIcon,
  'startup-cfo': LightBulbIcon,
  'budgeting-forecasting': DocumentChartBarIcon,
};
