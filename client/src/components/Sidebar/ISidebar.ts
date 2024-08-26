export interface SidebarProps {
    links: Array<LinkProps>;
    toggleSidebar: () => void;
    path: string;
}

export interface LinkProps {
    id: string;
    label: string;
    link: string;
    icon: React.ReactElement;
    admin?: boolean;
    position?: string;
}
