

  const selObj = window.getSelection();
  alert(selObj);
  // const selRange = selObj.getRangeAt(0);
  // do stuff with the range

	document.addEventListener("selectionchange", () => {
		// console.log(document.getSelection());
		const selection = document.getSelection().toString();
		
		if(selection.length >= 1) {
			console.debug(selection)
		}

	});
