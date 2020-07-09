/* Your Code Here */
let createEmployeeRecord = function (employeeInfo) {
  return {
    firstName: employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

let createEmployeeRecords = function (employeesInfo) {
  return employeesInfo.map(function(employee) {
    return createEmployeeRecord(employee)
  })
}

let createTimeInEvent = function (dateWorked) {
  let [date, hour] = dateWorked.split(' ')
  let timeIn = {
    type: 'TimeIn',
    hour: parseInt(hour),
    date: date
  }
  this.timeInEvents.push(timeIn)
  return this
}

let createTimeOutEvent = function (dateWorked) {
  let [date, hour] = dateWorked.split(' ')
  let timeOut = {
    type: 'TimeOut',
    hour: parseInt(hour),
    date: date
  }
  this.timeOutEvents.push(timeOut)
  return this
}

// Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
let hoursWorkedOnDate = function (dateWorked) {
  let timeIn = this.timeInEvents.find(function(e) {
    return e.date === dateWorked
  })

  let timeOut = this.timeOutEvents.find(function(e) {
    return e.date === dateWorked
  })

  return (timeOut.hour - timeIn.hour) / 100
}

// Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. 
// Amount should be returned as a number.
let wagesEarnedOnDate = function (dateWorked) {
  return hoursWorkedOnDate.call(this, dateWorked) * this.payPerHour
}

// Test the firstName field for a match with the firstName argument
let findEmployeeByFirstName =  function (srcArray, firstName) {
  return srcArray.find(function(e) {
    return e.firstName === firstName
  })
}

// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. 
// Amount should be returned as a number.
// Returns: Pay owed for all dates
let calculatePayroll = function (employeeRecords) {
  return employeeRecords.reduce(function(memo, i) {
    return memo + allWagesFor.call(i)
  }, 0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(employeeInfo){
    let record = {}
    record.firstName = employeeInfo[0]
    record.familyName = employeeInfo[1]
    record.title = employeeInfo[2]
    record.payPerHour = employeeInfo[3]
    record.timeInEvents = []
    record.timeOutEvents = []

    return record
}

function createEmployeeRecords(worker_arrays){
    return worker_arrays.map(worker => createEmployeeRecord(worker))
}

function createTimeInEvent(dateStamp){ //no employee Record anymore bc of "this"
    let timeInObj = {}
    timeInObj.type = "TimeIn"
    timeInObj.hour = parseInt(dateStamp.split(" ")[1])
    timeInObj.date = dateStamp.split(" ")[0]

    this.timeInEvents.push(timeInObj)
    return this
}

function createTimeOutEvent(dateStamp){
    let timeOutObj = {}
    timeOutObj.type = "TimeOut"
    timeOutObj.hour = parseInt(dateStamp.split(" ")[1])
    timeOutObj.date = dateStamp.split(" ")[0]

    this.timeOutEvents.push(timeOutObj)
    return this

}

function hoursWorkedOnDate(dateStamp){
    //find the time in (hour) for date
    const timeInForDate = this.timeInEvents.find(event => event.date === dateStamp)
    const timeOutForDate = this.timeOutEvents.find(event => event.date === dateStamp)

    return ((timeOutForDate.hour - timeInForDate.hour)/100)

}

function wagesEarnedOnDate(dateStamp){
    //return this.hoursWorkedOnDate(dateStamp) * this.payPerHour  //above method didnt return employee("this")

    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour

}



let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


<<<<<<< HEAD
function findEmployeeByFirstName(allEmployees, firstName){
   return allEmployees.find(employee => employee.firstName === firstName)
}


function calculatePayroll(allEmployees){
    // get allWagesFor each employee
    return allEmployees.reduce((total, employee) => total + allWagesFor.call(employee), 0) //why .call?

} 
=======
function createEmployeeRecord(empInfo) {
  return {
    firstName: empInfo[0],
    familyName: empInfo[1],
    title: empInfo[2],
    payPerHour: empInfo[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}
let createEmployeeRecords  = array =>
   array.map(createEmployeeRecord);

function createTimeInEvent(dateStamp){
    let date = dateStamp.split(' ')
    let newDateStamp = Object.create({
        type: "TimeIn",
        hour: parseInt(date[1]),
        date: date[0]
    })

    this.timeInEvents.push(newDateStamp)
    return this
}

function createTimeOutEvent(dateStamp){
    let date = dateStamp.split(' ')
    let newDateStamp = Object.create({
        type: "TimeOut",
        hour: parseInt(date[1]),
        date: date[0]
    })

    this.timeOutEvents.push(newDateStamp)
    return this
}


function hoursWorkedOnDate(dateForm){
   let timeIn = this.timeInEvents.find(x => x.date === dateForm)
    let timeOut = this.timeOutEvents.find(x => x.date === dateForm)
    let hours = (timeOut.hour - timeIn.hour) / 100
    return hours
}


function wagesEarnedOnDate (empObj, dateForm){
    let hours = hoursWorkedOnDate (empObj, dateForm)
    return hours * empObj.payPerHour
}


function findEmployeeByFirstName(srcArray, name){
    return srcArray.find(employee => employee.firstName === name)
}


function calculatePayroll(arrayOfEmployeeRecords){

    let total = 0
    for (let i = 0; i < arrayOfEmployeeRecords.length; i++){
        total += allWagesFor.call(arrayOfEmployeeRecords[i])
    }
    return total

}
>>>>>>> 7d613c422d3d01f61479f758c1bb2115b253d5ba
