import '../../styles/projectList.scss';
import { useContext, useRef, useState }                 from 'react';
import { ContextMenu }                                  from 'primereact/contextmenu';
import { faBan, faCode, faFolder, faTerminal, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }                              from '@fortawesome/react-fontawesome';
import { useTranslation }                               from 'react-i18next';
import ProjectItem                                      from './ProjectItem';
import { ProjectType }                                  from '../../../types/project';
import { ProjectContext }                               from '../context/ProjectContext';
import { AppContext }                                   from '../context/AppContext';

const ProjectList = (props: { minimal: boolean }) => {
		  let { minimal } = props;
		  if (!minimal) minimal = false;
		  const { projects, selectedProject }       = useContext(ProjectContext);
		  const { toast }                           = useContext(AppContext);
		  const { t }                               = useTranslation();
		  const cm                                  = useRef(null);
		  const [contextProject, setContextProject] = useState<ProjectType>();
		  let forSort                               = [];
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
				  label  : t('open terminal').ucfirst(),
				  icon   : (<FontAwesomeIcon className='p-menuitem-icon' icon={faTerminal} />),
				  command: () => {
					  if (!contextProject) {
						  return;
					  }
					  window.electron.projects.openInTerminal(contextProject.id);
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
					  toast?.current?.show({ severity: 'success', summary: t('success').ucfirst(), detail: t('project removed'), life: 1500 });
				  }
			  },
			  {
				  label  : t('delete').ucfirst(),
				  icon   : (<FontAwesomeIcon className='p-menuitem-icon' icon={faTrash} />),
				  command: () => {
					  if (!contextProject) {
						  return;
					  }
					  // @ts-ignore
					  toast?.current?.show({ severity: 'success', summary: t('success').ucfirst(), detail: t('project deleted'), life: 1500 });
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
			  return a?.name?.localeCompare(b?.name);
		  });
		  if (forSort.length > 0) {
			  return (
				  <div className='ProjectList'>
					  <ContextMenu model={items} ref={cm} />
					  <ul className='list'>
						  {forSort.map((project) => <ProjectItem
							  active={selectedProject?.id === project.id} key={project.id} project={project} contextProject={setContextProject} cm={cm}
							  defaultAction={defaultAction} minimal={minimal}
						  />)}
					  </ul>
				  </div>
			  );
		  }
		  return (
			  <div className='ProjectList'>
				  <ul className='list'>
					  {t('projects not founded')}
				  </ul>
			  </div>
		  );
	  }
;

export default ProjectList;
