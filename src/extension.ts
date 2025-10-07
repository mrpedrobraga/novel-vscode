import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "sol-novel" is now active!');

    const disposable = vscode.commands.registerCommand('sol-novel.sayHi', () => {
        vscode.window.showInformationMessage('Hello World from sol-novel!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
