/* eslint-disable @typescript-eslint/naming-convention */

import * as vscode from 'vscode';
const charactersObject: { [key: string]: string; } = {
	'º': '&deg;',
	'½': '&frac12;',
	'„': '&bdquo;',
	'“': '&ldquo;',
	'”': '&rdquo;',
	'«': '&laquo;',
	'»': '&raquo;',
	'‹': '&lsaquo;',
	'›': '&rsaquo;',
	'‘': '&lsquo;',
	'’': '&rsquo;',
	'á': '&aacute;',
	'é': '&eacute;',
	'í': '&iacute;',
	'ó': '&oacute;',
	'ñ': '&ntilde;',
	'ú': '&uacute;',
	'ü': '&uuml;',
	'Á': '&Aacute;',
	'É': '&Eacute;',
	'Í': '&Iacute;',
	'Ó': '&Oacute;',
	'Ñ': '&Ntilde;',
	'Ú': '&Uacute;',
	'Ü': '&Uuml;',
	'¡': '&iexcl;',
	'¿': '&iquest;',
	'Ä': '&Auml;',
	'Ö': '&Ouml;',
	'ä': '&auml;',
	'ö': '&ouml;',
	'ß': '&szlig;',
	'č': '&#269;',
	'ď': '&#271;',
	'ě': '&#283;',
	'ň': '&#328;',
	'ř': '&#345;',
	'š': '&#353;',
	'ť': '&#357;',
	'ů': '&#367;',
	'ý': '&yacute;',
	'ń': '&nacute;',
	'ž': '&#382;',
	'Č': '&#268;',
	'Ď': '&#270;',
	'Ě': '&#282;',
	'Ň': '&#327;',
	'Ř': '&#344;',
	'Š': '&#352;',
	'Ť': '&#356;',
	'Ů': '&#366;',
	'Ý': '&Yacute;',
	'Ž': '&#381;',
	'à': '&agrave;',
	'è': '&egrave;',
	'ì': '&igrave;',
	'ò': '&ograve;',
	'ù': '&ugrave;',
	'À': '&Agrave;',
	'È': '&Egrave;',
	'Ì': '&Igrave;',
	'Ò': '&Ograve;',
	'Ù': '&Ugrave;',
	'ç': '&ccedil;',
	'Ç': '&Ccedil;',
	'â': '&acirc;',
	'ê': '&ecirc;',
	'Â': '&Acirc;',
	'Ê': '&Ecirc;',
	'ã': '&atilde;',
	'õ': '&otilde;',
	'Ã': '&Atilde;',
	'Õ': '&Otilde;',
	'ï': '&iuml;',
	'Ï': '&Iuml;',
	'ª': '&ordf;',
	'î': '&icirc;',
	'ô': '&ocirc;',
	'û': '&ucirc;',
	'Î': '&Icirc;',
	'Ô': '&Ocirc;',
	'Û': '&Ucirc;',
	'ë': '&euml;',
	'ÿ': '&yuml;',
	'Ë': '&Euml;',
	'Ÿ': '&#376;',
	'œ': '&oelig;',
	'Œ': '&OElig;',
	'ł': '&lstrok;',
	'ż': '&zdot;',
	'ć': '&cacute;',
	'ę': '&eogon;',
	'ą': '&aogon;',
	'ś': '&sacute;',
	'ź': '&zacute;'
};
const commandName = 'htmlcharacterconverter.convertCharacters';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand(commandName, () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage("Editor Does Not Exist");
			return;
		}
		const doc = editor.document;
		let replacementCount: number = 0;
		let j=0;
		let replacementsToMake: { [key: number]: [vscode.Range, string]; } = {};
		
		for (const [unencodedCharacter, encodedCharacter] of Object.entries(charactersObject)) {
			for (let i=0; i<doc.lineCount; i++) {
				const line = doc.lineAt(i);
				for (j=0; j<line.range.end.character; j++) {
					const startposition = new vscode.Position(i,j);
					const endingposition = new vscode.Position(i,j+1);
					const range = new vscode.Range(startposition,endingposition);
					const charac = editor.document.getText(range);
					if(charac === unencodedCharacter) {
						replacementsToMake[replacementCount] = [range,encodedCharacter];
						replacementCount++;
					}
				}
			}
		}
		editor.edit( editBuilder => {
			for (const key in replacementsToMake) {
				editBuilder.replace(replacementsToMake[key][0], replacementsToMake[key][1]);
			}
		});
		vscode.window.showInformationMessage(`Made ${replacementCount} character replacements in this file`);
	});
	context.subscriptions.push(disposable);

	const statusBarItem:vscode.StatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 0);
	let myCommand: vscode.Command = { 
		title: 'ñ', 
		command: commandName,
	};
	statusBarItem.text = 'ñ';
	statusBarItem.command = myCommand;
	context.subscriptions.push(statusBarItem);
	statusBarItem.tooltip = 'Convert un-encoded HTML symbols';
	statusBarItem.show();
}

// This method is called when your extension is deactivated
export function deactivate() {}
