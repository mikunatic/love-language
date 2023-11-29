
	document.addEventListener("selectionchange", () => {
		// .toString() only returns the text, if u want the full object (with methods and DOM info) remove it
		const selection = document.getSelection().toString();
		
		if(selection.length >= 1) {
			console.debug(selection)
		}

		// @INFO: Can be usefull for validate selection
		// else if (document.selection && document.selection.type != "Control") {
		// 	text = document.selection.createRange().text;
		// }		

	});
