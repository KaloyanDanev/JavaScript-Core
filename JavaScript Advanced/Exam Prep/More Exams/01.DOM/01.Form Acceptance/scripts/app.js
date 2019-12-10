function acceptance() {
    const company = document.querySelectorAll("input")[0];
	const product = document.querySelectorAll("input")[1];
	const quantity = document.querySelectorAll("input")[2];
	const scrape = document.querySelectorAll("input")[3];
	const addBtn = document.querySelector("button");
    const warehouse = document.getElementById("warehouse");

	addBtn.addEventListener('click',function(e){
		e.preventDefault();
		if (company.value && product.value && +quantity.value && +scrape.value) {
			const pieces = +quantity.value - +scrape.value;
			if (pieces > 0) {
				const div = document.createElement("div");
				const p = document.createElement("p");
				const btn = document.createElement("button");
				btn.type = "button";
				btn.textContent = "Out of stock";
				p.textContent = `[${company.value}] ${product.value} - ${pieces} pieces`;
				div.appendChild(p);
				div.appendChild(btn);
				warehouse.appendChild(div);

				btn.addEventListener('click', function remove() {
					div.remove();
				});
			}
			company.value = '';
			product.value = '';
			quantity.value = '';
			scrape.value = '';
		}
	})
}