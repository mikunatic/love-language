```javascript

obj = {}

escopo = windown || document

const func = () => {}

func() {
	var nome = 'Chloe'
	const nome2 = 'Felipe'
	let nome3 = 'Mila'

	return;
}
func()

func2() {
	console.debug(nome);
}

```