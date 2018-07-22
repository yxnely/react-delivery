const Rqst = {
	get(type, items) {
		JSON.parse(localStorage.getItem(type));
	},
	set(type, items) {
		localStorage.setItem(type, JSON.stringify(items));
	}
}

export default Rqst;