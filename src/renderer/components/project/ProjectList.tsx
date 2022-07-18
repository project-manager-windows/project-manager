import '../../styles/projectList.scss';
import ProjectItem                 from './ProjectItem';
import React, { useRef, useState } from 'react';
import { ProjectType }             from '../../../types/project';
import { ContextMenu }                      from 'primereact/contextmenu';
import { faBan, faCode, faFolder, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }                  from '@fortawesome/react-fontawesome';
import { useTranslation }          from 'react-i18next';

const ProjectList = (props: {selectedProject: ProjectType, projects: { [key: string]: any }, onSelect: (e: React.MouseEvent<HTMLElement>, ide: ProjectType) => void }) => {
		  const { t } = useTranslation();
		  const cm                                  = useRef(null);
		  const [contextProject, setContextProject] = useState<ProjectType>();
		  const { projects, onSelect,selectedProject }              = props;
		  let forSort                               = [];
		  const list                                = [];
		  const items                               = [
			  {
				  label  : t('open in ide').ucfirst(),
				  icon   : (<FontAwesomeIcon className='p-menuitem-icon' icon={faCode} />),
				  command: () => {
					  if (!contextProject) {
						  return;
					  }
					  window.electron.projects.open(contextProject.id);
				  }
			  },
			  {
				  label  : t('open folder').ucfirst(),
				  icon   : (<FontAwesomeIcon className='p-menuitem-icon' icon={faFolder} />),
				  command: () => {
					  if (!contextProject) {
						  return;
					  }
					  window.electron.projects.openFolder(contextProject.id);
				  }
			  },
			  {
				  label  : t('remove').ucfirst(),
				  icon   : (<FontAwesomeIcon className='p-menuitem-icon' icon={faBan} />),
				  command: () => {
					  if (!contextProject) {
						  return;
					  }
					  window.electron.projects.remove(contextProject.id);
				  }
			  },
			  {
				  label  : t('delete').ucfirst(),
				  icon   : (<FontAwesomeIcon className='p-menuitem-icon' icon={faTrash} />),
				  command: () => {
					  if (!contextProject) {
						  return;
					  }
					  window.electron.projects.delete(contextProject.id);
				  }
			  }
		  ];

		  const defaultAction = (id: number) => {
			  window.electron.projects.open(id);
		  };
		  // eslint-disable-next-line guard-for-in
		  for (const projectsKey in projects) {
			  const project = projects[projectsKey];
			  forSort.push(project);
		  }
		  forSort = forSort.sort((a, b) => {
			  return a.name.localeCompare(b.name);
		  });
		  for (const project of forSort) {
			  list.push(<ProjectItem active={selectedProject?.id === project.id} onSelect={(e, project) => onSelect(e, project)} key={project.id} project={project} contextProject={setContextProject} cm={cm} defaultAction={defaultAction} />);
		  }
		  return (
			  <div className='ProjectList'>
				  <ContextMenu model={items} ref={cm}></ContextMenu>
				  <ul className='list'>
					  {list}
				  </ul>
			  </div>
		  );
	  }
;

export default ProjectList;
