import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = {
      headers: ['Serial No', 'Emp#', 'First Name', 'Last Name', 'Project Name', 'Actions'],
      rows: [
        { id: 1, empId: '1001', fName: 'Mcneil', lName: 'Scott', project: 'Unia' },
        { id: 2, empId: '1002', fName: 'Rosemarie', lName: 'Avila', project: 'Circum' },
        { id: 3, empId: '1003', fName: 'Beverly', lName: 'Britt', project: 'Quility' },
        { id: 4, empId: '1004', fName: 'Potts', lName: 'Small', project: 'Gadtron' },
        { id: 5, empId: '1005', fName: 'Calhoun', lName: 'Pugh', project: 'Gynk' },
        { id: 6, empId: '1006', fName: 'Glenda', lName: 'Robinson', project: 'Netbook' },
        { id: 7, empId: '1007', fName: 'Wong', lName: 'Daniel', project: 'Myopium' },
        { id: 8, empId: '1008', fName: 'Ryan', lName: 'Dillon', project: 'Suremax' },
        { id: 9, empId: '1009', fName: 'Frankie', lName: 'Fry', project: 'Xumonk' },
        { id: 10, empId: '1010', fName: 'Riggs', lName: 'Briggs', project: 'Xleen' }
      ]
    };
    return { employees };
  }
}