export interface NavlinkProps {
    id: string;
    label: string;
    link: string;
    icon: React.ReactElement;
    onClick: () => void;
    className?: string;
}
