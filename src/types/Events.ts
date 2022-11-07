export enum BackgroundEvents {
	AppClose              = 'electron-app-close',
	AppHide               = 'electron-app-hide',
	AppIsMaximized        = 'electron-app-isMaximized',
	AppIsMinimized        = 'electron-app-isMinimized',
	AppShow               = 'electron-app-show',
	AppToggleMaximize     = 'electron-app-toggleMaximize',
	AppToggleMinimize     = 'electron-app-toggleMinimize',
	AppToggleShow         = 'electron-app-toggleShow',
	CloseTray             = 'electron-close-tray',
	IdeExecute            = 'electron-ide-execute',
	ProgramsGetAll        = 'electron-programs-getAll',
	ProgramCreate         = 'electron-program-create',
	ProgramEdit           = 'electron-program-edit',
	NotificationUpdate    = 'main-notification-update',
	ProgressbarUpdate     = 'main-progressbar-update',
	ProjectAdd            = 'electron-project-add',
	ProjectChangeLogo     = 'electron-project-change-logo',
	ProjectDelete         = 'electron-project-delete',
	ProjectGetAll         = 'electron-project-getAll',
	ProjectGetProject     = 'electron-project-getProject',
	ProjectOpenFolder     = 'electron-project-open-folder',
	ProjectRemove         = 'electron-project-remove',
	ProjectRemoveLogo     = 'electron-project-remove-logo',
	ProjectScan           = 'electron-project-scan',
	ProjectScanFolders    = 'electron-project-scan-folders',
	ProjectSet            = 'electron-project-set',
	ProjectUpdate         = 'main-project-update',
	StoreDel              = 'electron-store-del',
	StoreGet              = 'electron-store-get',
	StoreSet              = 'electron-store-set',
	TerminalExecute       = 'electron-terminal-execute',
	Execute               = 'electron-project-execute',
	ProgramUpdate         = 'main-program-update',
	ProgramGetCommandVars = 'electron-program-get-command-vars',
	ProgramRunWithProject = 'electron-program-run-with-project',
	inputFile             = 'electron-input-file',
	appIsHide             = 'electron-app-isHide',
	ProgramDelete         = 'electron-program-delete',
	test                  = 'electron-test',
	ProgramScan           = 'electron-program-scan',
	ProgramCommandDebug   = 'electron-program-command-debug',
	FoldersGetAll         = 'electron-folders-get-all',
	FolderAdd             = 'electron-folder-add',
	FoldersDelete         = 'electron-folders-delete',
	FolderToggle          = 'electron-folder-toggle',
	FolderUpdate          = 'main-folder-update',
	NpmSearch             = 'Npm-search',
	checkProject          = 'plugin-checkProject',
	checkAvailable        = 'plugin-checkAvailable',
}
