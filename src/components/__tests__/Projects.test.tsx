interface Project {
    id: number;
    name: string;
    tech: string[];
}

interface ProjectsProps {
    index: number;
    project: Project;
    onClose: () => void;
}

test('Projects component receives correct props', () => {
    const mockProject: Project = { id: 1, name: 'Test Project', tech: ['React', 'TypeScript'] };
    const mockOnClose = jest.fn();
    
    const { getByText } = render(<Projects index={0} project={mockProject} onClose={mockOnClose} />);
    
    expect(getByText('Test Project')).toBeInTheDocument();
});