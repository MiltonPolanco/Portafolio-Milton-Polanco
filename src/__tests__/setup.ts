interface Project {
    id: number;
    name: string;
    tech: string[];
}

interface Props {
    index: number;
    tech: string;
    project: Project;
    onClose: () => void;
}

export { Project, Props };