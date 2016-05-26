class Car{

	constructor(brand, year){
		this.brand = brand;
		this.year = year;
	}

	profile(){
		console.log(this.brand, ', ', this.year);
	}
}

export default Car;

