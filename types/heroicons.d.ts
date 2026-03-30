declare module "@heroicons/react/24/outline" {
  import * as React from "react";
  const icons: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  // Named exports used in the project. Add more as needed.
  export const AtSymbolIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const KeyIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const ExclamationCircleIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export const PowerIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const ArrowRightIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export const ArrowLeftIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export const ArrowPathIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export const CalendarIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const CheckIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const ClockIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const FaceFrownIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export const MagnifyingGlassIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export const PencilIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const PlusIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const TrashIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const GlobeAltIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export const CurrencyDollarIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export const UserCircleIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export default function Icon(props: React.ComponentProps<"svg">): JSX.Element;
}

declare module "@heroicons/react/20/solid" {
  import * as React from "react";
  export const ArrowRightIcon: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export default function Icon(props: React.ComponentProps<"svg">): JSX.Element;
}

// Fallback for other heroicons import variants
declare module "@heroicons/react/*" {
  import * as React from "react";
  const icons: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  export = icons;
}
