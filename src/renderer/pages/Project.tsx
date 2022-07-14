import '../styles/project.scss';
import Menu                    from '../components/project/menu';
import ProjectList             from '../components/ProjectList';
import { useEffect, useState } from 'react';

const Project = () => {
	const [projects, setProjects] = useState(window.electron.projects.getAll());
	useEffect(() => {
		return window.electron.projects.onUpdate(() => {
			setProjects(window.electron.projects.getAll());
		});
	}, []);
	return (
		<div className='project'>
			<div className='grid'>
				<div className='tools'>
					<Menu />
				</div>
				<div className='projects'>
					<ProjectList projects={projects} />
				</div>
				<div className='technologies'>
					test2
				</div>
				<div className='view'>
					test3
				</div>
			</div>
		</div>
	);
};

export default Project;
