import React from 'react';

const defaultProps = {
  strokeWidth: 2,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

const iconWithDefaults = (path: React.ReactNode) => (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...defaultProps} {...props}>
        {path}
    </svg>
);

export const ShieldIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
);

export const AlertTriangleIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
);

export const SmartphoneIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
);

export const BrainCircuitIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H5.25a2.25 2.25 0 00-2.25 2.25v3.75a2.25 2.25 0 002.25 2.25h3.75m0-6H15m0 0v1.5m0-1.5H18.75a2.25 2.25 0 012.25 2.25v3.75a2.25 2.25 0 01-2.25 2.25h-3.75m0-6H9.75m0 0v1.5m0-1.5H12m6.75 6.75v1.5m0-1.5h-1.5m1.5 0h1.5m-1.5 0v-1.5m-1.5 0h-1.5m1.5-1.5H18m-3.75 3.75h1.5m-1.5 0v-1.5m1.5 0h-1.5M12 9.75v1.5m0-1.5H9.75m2.25 0h1.5m-1.5 0V8.25m1.5 1.5v1.5m0-1.5h-1.5m-1.5 3.75h1.5m-1.5 0v-1.5m1.5 0h-1.5m3.75 3.75v-1.5m0 1.5h1.5m-1.5 0h-1.5m0 0v-1.5m3.75 3.75h1.5m-1.5 0v-1.5" />
);

export const WifiIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.136 11.886c3.18-3.18 8.352-3.18 11.532 0M1.984 8.734c5.13-5.13 13.512-5.13 18.642 0M21 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
);

export const ServerIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0V17.25a3 3 0 003 3h7.5a3 3 0 003-3V14.25" />
);

export const CubeIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
);

export const UsersIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598M12 14.25a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z" />
);

export const DollarSignIcon = iconWithDefaults(
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.75 11 12 11c-.75 0-1.536.21-2.218.639L9 12.25M12 6v12m0 0c-1.252 0-2.46-.388-3.447-1.077a4.848 4.848 0 010-7.046C9.54 5.388 10.748 5 12 5c1.252 0 2.46.388 3.447 1.077a4.848 4.848 0 010 7.046C14.46 16.612 13.252 17 12 17z" />
);

export const SparklesIcon = iconWithDefaults(
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.188-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.188a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.188.398a2.25 2.25 0 00-1.423 1.423z" />
);

export const RocketLaunchIcon = iconWithDefaults(
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25c-5.52 0-10.34 3.22-12.72 7.86a14.98 14.98 0 005.45 12.33A14.98 14.98 0 0015.59 14.37z" />
);

export const MailIcon = iconWithDefaults(
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
);

export const ChevronDownIcon = iconWithDefaults(
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
);

export const MenuIcon = iconWithDefaults(
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
);

export const XIcon = iconWithDefaults(
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
);

export const ArrowUpIcon = iconWithDefaults(
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
);