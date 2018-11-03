import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = {
      headers: ['Serial No', 'Emp#', 'First Name', 'Last Name', 'Project Name', 'Actions'],
      rowData: [
        { id: 1, empId: '1001', fName: 'A', lName: 'B', project: 'Test' },
        { id: 2, empId: '1002', fName: 'A', lName: 'B', project: 'Test' },
        { id: 3, empId: '1003', fName: 'A', lName: 'B', project: 'Test' },
        { id: 4, empId: '1004', fName: 'A', lName: 'B', project: 'Test' },
        { id: 5, empId: '1005', fName: 'A', lName: 'B', project: 'Test' },
        { id: 6, empId: '1006', fName: 'A', lName: 'B', project: 'Test' },
        { id: 7, empId: '1007', fName: 'A', lName: 'B', project: 'Test' },
        { id: 8, empId: '1008', fName: 'A', lName: 'B', project: 'Test' },
        { id: 9, empId: '1009', fName: 'A', lName: 'B', project: 'Test' },
        { id: 10, empId: '1010', fName: 'A', lName: 'B', project: 'Test' }
      ]
    };
    return { employees };
  }
}