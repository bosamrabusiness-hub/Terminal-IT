// src/config/navItems.ts

export interface NavItem {
  id: number;
  label: string;
  href: string;
  type: 'anchor' | 'route';
  offset?: number;
}

export const navItems: NavItem[] = [
  {
    id: 1,
    label: 'Home',
    href: '/#hero',
    type: 'anchor',
    offset: 9000,
  },
  {
    id: 2,
    label: 'Projects',
    href: '/#projects',
    type: 'anchor',
    offset: -180,
  },
  {
    id: 3,
    label: 'Contact',
    href: '/#contact',
    type: 'anchor',
    offset: -1200,
  },
];
