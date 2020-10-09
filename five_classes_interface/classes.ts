abstract class Department {
  static fiscalYear = 2020;
  protected employee: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(name: string) {
    this.employee.push(name);
  }

  printEmployeeInformation() {
    console.log(this.employee);
  }
}

console.log('=====IT=====');

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(){
    console.log('IT Department - ID:' + this.id);
  }
}

const employee1 = Department.createEmployee('Kus');
console.log(employee1, Department.fiscalYear);

const IT = new ITDepartment("d1", ["Kus"]);
IT.addEmployee("Sir");
IT.addEmployee("Kus");

IT.describe();
IT.printEmployeeInformation();

console.log('=====ACCOUNTING=====');

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; // singleton pattern and private constructor

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found.");
  }

  set mostRecentReport(report: string) {
    if (!report) throw new Error("Please pass in a valid value!");
    this.addReports(report);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance(){
    if(AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe(){
    console.log('Accounting Department - ID:' + this.id);
  }

  addReports(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") return;
    this.employee.push(name);
  }
}
// const Accounting = new AccountingDepartment("a1", []);
const Accounting = AccountingDepartment.getInstance();
Accounting.addEmployee('Kus');
const Accounting1 = AccountingDepartment.getInstance();

Accounting.mostRecentReport = "report to Lidya";
Accounting.addReports("Something went wrong...");
console.log(Accounting.mostRecentReport);
Accounting.printReports();

Accounting.addEmployee("Max");
Accounting.addEmployee("Manu");
Accounting.printEmployeeInformation();


console.log('====OTHERS====');
console.log(Department.fiscalYear);
