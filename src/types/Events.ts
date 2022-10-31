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
	IdeAdd                = 'electron-ide-add',
	IdeExecute            = 'electron-ide-execute',
	IdeGetAll             = 'electron-ide-getAll',
	IdeGetProject         = 'electron-ide-getProject',
	IdeUpdate             = 'electron-ide-update',
	ProgramsGetAll        = 'electron-programs-getAll',
	ProgramCreate         = 'electron-program-create',
	ProgramEdit           = 'electron-program-edit',
	ProgramsExecute       = 'electron-programs-execute',
	NotificationUpdate    = 'electron-notification-update',
	ProgressbarUpdate     = 'electron-progressbar-update',
	ProjectAdd            = 'electron-project-add',
	ProjectChangeLogo     = 'electron-project-change-logo',
	ProjectDelete         = 'electron-project-delete',
	ProjectGetAll         = 'electron-project-getAll',
	ProjectGetProject     = 'electron-project-getProject',
	ProjectOpenFolder     = 'electron-project-open-folder',
	ProjectRemove         = 'electron-project-remove',
	ProjectRemoveLogo     = 'electron-project-remove-logo',
	ProjectScan           = 'electron-project-scan',
	ProjectSet            = 'electron-project-set',
	ProjectUpdate         = 'electron-project-update',
	StoreDel              = 'electron-store-del',
	StoreGet              = 'electron-store-get',
	StoreSet              = 'electron-store-set',
	TerminalExecute       = 'electron-terminal-execute',
	TerminalGetAll        = 'electron-terminal-getAll',
	TerminalGetProject    = 'electron-terminal-getProject',
	TerminalUpdate        = 'electron-terminal-update',
	ProgramUpdate         = 'electron-program-update',
	ProgramGetCommandVars = 'electron-program-get-command-vars',
	TerminalAdd           = 'electron-terminal-add',
	inputFile             = 'electron-input-file',
	appIsHide             = 'electron-app-isHide',
	ProgramDelete         = 'electron-program-delete',
}
