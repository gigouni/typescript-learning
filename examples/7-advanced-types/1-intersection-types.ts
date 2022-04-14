// ==========================================================================/
// Two solutions
//  - Same effects
//  - More code in the interface use-case here
// ==========================================================================

// ---------> Custom type solution
type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

// Merge both types into a new one
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

// ---------> Interfaces solution

interface Admin2 {
    name: string
    privileges: string[]
}

interface Employee2 {
    name: string
    startDate: Date
}

// Merge both interfaces into a new one
interface ElevatedEmployee2 extends Admin2, Employee2 {}

// ---------> Additional union/intersection types example
type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable & Numeric
