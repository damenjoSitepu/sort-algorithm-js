let data = [
	{
		id: 1,
		score: 50,
		name: 'Damenjo'
	},
	{
		id: 3,
		score: 10,
		name: 'Sitepu'
	},
	{
		id: 2,
		score: 25,
		name: 'Tari'
	}
];

function bubbleSortData(data) {
	for (let i = 0; i < data.length - 1; i++) {
		let isSwapped = false;
		for (let j = 0; j < data.length - i - 1; j++) {
			if (data[j].score > data[j + 1].score) {
				const temp = data[j];
				data[j] = data[j + 1];
				data[j + 1] = temp;
				isSwapped = true;
				continue;
			}
		}
		if (!isSwapped) break;
	}
}

bubbleSortData(data);

console.log(data);