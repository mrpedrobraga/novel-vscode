import path from 'path';
import * as vscode from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
    const serverCommand = "/home/mrpedrobraga/Development/novel-lang/target/debug/novel";

    let serverOptions: ServerOptions = {
        run: { command: serverCommand, args: ['serve'] },
        debug: { command: serverCommand, args: ['serve'] },
    };

    let clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'novel' }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/.nov')
        }
    };

    client = new LanguageClient('novelLanguageServer', 'Novel Language Server', serverOptions, clientOptions);

    client.start();
}

export function deactivate() { }
