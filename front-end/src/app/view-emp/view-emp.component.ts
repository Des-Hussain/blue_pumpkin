import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
	selector: 'app-view-emp',
	templateUrl: './view-emp.component.html',
	styleUrls: ['./view-emp.component.css']
	})
export class ViewEmpComponent implements OnInit {

	constructor() { }

	displayedColumns: string[] = ['firstName', 'lastName', 'phoneNo', 'workDept', 'email', 'gender', 'edLevel','birthdate','action'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
	mainContentSize:Boolean = false;

	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
	updateHeaderToggle(){
		this.mainContentSize = !this.mainContentSize;
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	deleteEmployee(id){
		console.log(id);
	}
}
	export interface PeriodicElement {
		id: number;
		lastName: string;
		firstName: string;
		phoneNo: number;
		workDept: string;
		email: string;
		gender: string;
		edLevel: string;
		birthdate: string;
	};

	const ELEMENT_DATA: PeriodicElement[] = [
	{id: 1, firstName: 'Test', lastName: 'Hydrogen', phoneNo: 1.0079, workDept: 'H', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 2, firstName: 'Test', lastName: 'Helium', phoneNo: 4.0026, workDept: 'He', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 3, firstName: 'Test', lastName: 'Lithium', phoneNo: 6.941, workDept: 'Li', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 4, firstName: 'Test', lastName: 'Beryllium', phoneNo: 9.0122, workDept: 'Be', email: 'test123@gmail.com', gender: 'Female', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 5, firstName: 'Test', lastName: 'Boron', phoneNo: 10.811, workDept: 'B', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 6, firstName: 'Test', lastName: 'Carbon', phoneNo: 12.0107, workDept: 'C', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 7, firstName: 'Test', lastName: 'Nitrogen', phoneNo: 14.0067, workDept: 'N', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 8, firstName: 'Test', lastName: 'Oxygen', phoneNo: 15.9994, workDept: 'O', email: 'test123@gmail.com', gender: 'Female', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 9, firstName: 'Test', lastName: 'Fluorine', phoneNo: 18.9984, workDept: 'F', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 10, firstName: 'Test', lastName: 'Neon', phoneNo: 20.1797, workDept: 'Ne', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 11, firstName: 'Test', lastName: 'Sodium', phoneNo: 22.9897, workDept: 'Na', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 12, firstName: 'Test', lastName: 'Magnesium', phoneNo: 24.305, workDept: 'Mg', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 13, firstName: 'Test', lastName: 'Aluminum', phoneNo: 26.9815, workDept: 'Al', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 14, firstName: 'Test', lastName: 'Silicon', phoneNo: 28.0855, workDept: 'Si', email: 'test123@gmail.com', gender: 'Female', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 15, firstName: 'Test', lastName: 'Phosphorus', phoneNo: 30.9738, workDept: 'P', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 16, firstName: 'Test', lastName: 'Sulfur', phoneNo: 32.065, workDept: 'S', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 17, firstName: 'Test', lastName: 'Chlorine', phoneNo: 35.453, workDept: 'Cl', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 18, firstName: 'Test', lastName: 'Argon', phoneNo: 39.948, workDept: 'Ar', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 19, firstName: 'Test', lastName: 'Potassium', phoneNo: 39.0983, workDept: 'K', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	{id: 20, firstName: 'Test', lastName: 'Calcium', phoneNo: 40.078, workDept: 'Ca', email: 'test123@gmail.com', gender: 'Male', edLevel: 'Graduation', birthdate: '21/4/2019'},
	];