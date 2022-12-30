import joplin from 'api';
import { ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		await joplin.commands.register({
			name: 'insertCaption',
			label: 'Insert Caption',
			iconName: 'fa fa-message-captions',
			execute: async () => {
				await joplin.commands.execute("insertText", "_**Fig:** _");
				await joplin.commands.execute('editor.focus');
			},
		});

		await joplin.views.toolbarButtons.create('insertCaption', 'insertCaption', ToolbarButtonLocation.EditorToolbar);
	},
});
