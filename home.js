// Задание 1

const college = {
    distance: "3 kilometers", 
    likeEducation: "YES", 
    likeFoodInTheCanteen: "YES",
}

console.log(college["distance"]);
console.log(college["likeEducation"]);
console.log(college["likeFoodInTheCanteen"]);

console.log("=================================================");
//Задание 2

const collegeClone = Object.assign({}, college);

delete collegeClone.likeFoodInTheCanteen;

collegeClone.favotiteSub = {
    subject: "Math", 
    nameOfTeacher: "Evgeniy Bodrov",
}

console.log(collegeClone);

console.log("=================================================");
//Задание 3

function existOrNotIfNotAddField(obj, field, value ) {
    if (obj[field] === undefined) {
        obj[field] = value;
        return {
            first: false,
            second: obj,
        };
    }  else {
        return false;
    } 
}

const obj = {
    age: "17",
}

let res = existOrNotIfNotAddField(obj, "name", "Sonya");

console.log(res);

console.log("=================================================");
//Задание 4

function checkFieldsLength(obj) {
    let sumFieldsLength = 0;
    let shortField = true;

    for (let key in obj) {
        shortField &= key.length < 5;
        sumFieldsLength += key.length;
        if (key.length * String(obj[key]).length > 200) {
            console.log(`Оно слишком длинное - название поля: ${key} значение: ${obj[key]}`);
            return;
        }  
    } 

    if (shortField) {
        console.log("Названия полей слишком короткие");
        return;
    } 
    
    if (sumFieldsLength < 50) {
        console.log("Названия полей все еще недостаточно длинные");
        return;
    }
}

const student = {
    name: "Anna",
    age: 22, 
    phoneNum: "43432423423",
    surname: "Smirnova",
};

checkFieldsLength(student);

console.log("=================================================");

// Задание 4 доп.

function fieldLessThan(obj) {
    let shortField = true;
    for (const key in obj) {
        shortField &= key.length < 5;
    }

    return shortField;
}

function fieldSumLessThan(obj) {
    let sumFieldsLength = 0;
    for (const key in obj) {
        sumFieldsLength += key.length;
    }

    return sumFieldsLength < 50;
}

function fieldProductGreaterThan(obj) {
    for (let key in obj) {
        if (key.length * String(obj[key]).length > 200) {
            return {
                field: key,
                field2: obj[key],
            };    
        }  
    } 
}

function checkAllFieldsLength(obj) {
    let res = fieldProductGreaterThan(obj);

    if (res != undefined) {
        console.log(`Оно слишком длинное - название поля: ${res.field} значение: ${res.field2}`);
    }

    if (fieldLessThan(obj)) {
        console.log("Названия полей слишком короткие");
    }

    if (fieldSumLessThan(obj)) {
        console.log("Названия полей все еще недостаточно длинные");
    }
}

checkAllFieldsLength(student);  