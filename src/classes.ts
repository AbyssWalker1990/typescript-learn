abstract class Department {
  static fiscalYear = 2020
  // private id: string
  // private name: string
  protected employees: string[] = []
 
  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n 
  }

  static createEmployee(name: string) {
    return {name: name}
  }

  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeesInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
  }

  describe() {
    console.log('IT Department ID: ' + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found')
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', [])
    return this.instance
  }

  describe() {
    console.log('Thid Separtment ID: ' + this.id)
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Generic')
console.log(employee1, Department.fiscalYear)

// const accounting = new AccountingDepartment('d2', [])
const accounting = AccountingDepartment.getInstance()
accounting.mostRecentReport = 'New Report'
accounting.addReport('lol')
console.log(accounting.mostRecentReport)
// accounting.printReports()
// accounting.addEmployee('Max')
// accounting.addEmployee('Panda')
// accounting.printEmployeesInfo()

accounting.describe()


const it = new ITDepartment('d1', ['Vova', 'Max'])
it.addEmployee('Vova')
it.addEmployee('Tania')
it.describe()
it.printEmployeesInfo()

console.log(it)

// const accountCopy = { name: 'Vova', describe: accounting.describe }
// accountCopy.describe()
