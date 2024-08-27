export interface TableProps {
    columnData: Array<ColumnDataProps>;
    rowData: Array<any>;
}

export interface ColumnDataProps {
    name: string;
    title: string;
    id: string;
    style?: string;
    renderer?: (row: any, column: any) => React.ReactNode;
}

export interface HeaderProps {
    headers: Array<ColumnDataProps>;
}

export interface RowProps {
    row: any;
}

export interface RowDataProps {
    id: string;
    title: string;
    date: string;
    priority: Priority;
    stage: Stage;
    assets: Array<string>;
    team: Array<TeamProps>;
    isTrashed: boolean;
    activities: Array<ActivityProps>;
    subTasks: Array<SubTaskProps>;
    createdAt: string;
    updatedAt: string;
}

export interface TeamProps {
    id: string;
    name: string;
    title: string;
    email: string;
}

export interface ActivityProps {
    type: string;
    activity: string;
    date: string;
    by: string;
    id: string;
}

export interface SubTaskProps {
    title: string;
    date: string;
    tag: string;
    id: string;
}

export type Stage = "todo" | "in progress" | "completed";
export type Priority = "high" | "medium" | "low";
