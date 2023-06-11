import * as vscode from 'vscode';
import { ViewPanel } from './viewPanel';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('latex-viewer.start', async () => {
		const answer = await vscode.window.showInformationMessage('LaTeX Viewer extension is loaded\nWould you like to start the extension now?','Yes','No');
		if(answer === 'Yes'){
			ViewPanel.createOrShow(context.extensionUri);
		}
	}));
}

export function deactivate() { }