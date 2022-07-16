import { shell }   from 'electron';
import { exec }    from 'child_process';
import os          from 'os';
import { IDE }     from '../../core/IDEs/IDE';
import { Project } from '../../core/Projects/Project';

export class PhpStorm extends IDE {

	afterInit() {
		this.setVal('logo', '');
		this.setVal('name', 'PhpStorm');
	}

	async isInstalled() {
		const command = 'phpstorm';
		return (new Promise((resolve) => {
			if (os.type().toLowerCase().includes('windows')) {
				exec(`where ${command}`, (error) => {
					if (error) {
						resolve(false);
						return;
					}
					resolve(true);
				});
			}
			if (os.type().toLowerCase().includes('linux')) {
				exec(`which  ${command}`, (error) => {
					if (error) {
						resolve(false);
						return;
					}
					resolve(true);
				});
			}
			if (os.type().toLowerCase().includes('darwin')) {
				exec(`which  ${command}`, (error) => {
					if (error) {
						resolve(false);
						return;
					}
					resolve(true);
				});
			}
		})) as Promise<boolean>;
	}

	async execute(project: Project) {
		return shell.openPath(`phpstorm://file/${project.getVal('path')}`);
	}
}
