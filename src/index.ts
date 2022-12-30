import joplin from 'api';
import { ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		await joplin.commands.register({
			name: 'insertCaption',
			label: 'Insert Caption',
			iconName: 'far fa-edit',
			execute: async () => {
				await joplin.commands.execute("insertText", "_**Fig:** _");
				await joplin.commands.execute('editor.focus');
			},
		});

		await joplin.views.toolbarButtons.create('insertCaptionButton', 'insertCaption', ToolbarButtonLocation.EditorToolbar);

	    await joplin.views.menuItems.create('myMenuItem1', 'insertCaption', MenuItemLocation.Tools, { accelerator: 'CmdOrCtrl+l' });

	},
});
