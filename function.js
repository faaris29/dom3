
/**
 * Age calculation for user
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */
function ageCal(name, year){

    let date = new Date();
    age = date.getFullYear() - year;
    let ageStatus = checkAgeStatus(age);
    return ` <p class="alert alert-success"> Hi! ${ageStatus.status}, You are ${age} years old & You are ${ageStatus.name}</p> `;

}


/**
 * Age status
 * @param {*} age 
 * @returns 
 */
function checkAgeStatus(age) {

    if(age > 0 && age < 10) {
        return {
            name : 'babu',
            status : 'success'
        };
    }else if(age >= 10 && age < 18) {
        return {
            name : 'Kisor',
            status : 'info'
        };
    }else if(age >= 18 && age < 35) {
        return {
            name : 'Jobok',
            status : 'warning'
        };
    }else if(age >= 35 && age < 55) {
        return {
            name : 'tobboke jobok',
            status : 'warning'
        };
    }else if(age >= 55 && age < 150) {
        return {
            name : 'boyasko',
            status : 'primary'
        };
    }else {
        return {
            name : 'Jin',
            status : 'dark'
        };
    }

}