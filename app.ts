/*
// @ts-ignore

/!*function sum(num1:number, num2:number){
    return num1+num2;
}

let n1 = '10';
let n2 = 20;

let value1 = sum(+n1,+n2);
console.log(value1);

let value2 = sum(+n1,+n2);
console.log(value2);*!/
/!*
function sendSum(num1:number, num2:number, name:string, isWithName:boolean){
    let result = isWithName ? 'Hi $(name),Sum is $(num1 + num2)' : 'Sum is ${(num1 + num2)}';
    return result;
}

let num1 :number = 10;
let num2 : number = 10;
let myName : string = 'Tharuu';
let withName : boolean = true;

let result1 = sendSum(10,20,'Tharuu' , true);
console.log(result1);

let result2 = sendSum(10,20,'Tharuu' , false);
console.log(result2);*!/

/!*

function findSum(num1 : number,num2:number) : number{
    return num1+ num2;
}

function findSumInString(num1 : number,num2:number) : string{
    //return num1+ num2;
    return 'Sum is ${num1 + num2}';
}

function findSumInString2  (num1 : number,num2:number) : string  {
    //return num1+ num2;
    return 'Sum is ${num1 + num2}';
};

function findTheSum(num1 : number | string, num2:number | string) : number {

    if (typeof num1 === 'string' || typeof num2 === 'string'){  ///type guard
        return +num1 + +num2;
    }else {
        return num1 + num2;
    }
}

function findTheSum2(num1 : number | string , num2 : number |string) : number | string{
    if (typeof num1 === 'string' || typeof num2 === 'string'){  ///type guard
        return +num1 + +num2;
    }else {
        return num1 + num2;
    }
}

let result1 = findSum(10,20);
console.log("result1 : ",result1);

let result2 = findSumInString(10,20);
console.log("result2 : ",result2);

let result3 = findSumInString2(10,20);
console.log("result3 : ",result3);

let result4 = findTheSum(100,200);
console.log("result4 : ",result4);

let result5 = findTheSum(100,200);
console.log("result5 : ",result5);*!/


//////////////        OBJECTS          /////////

let student : {
    id : number;
    name : string;
    age : number;
    collage : string;
};


student = {id : 1 , name :'Tharuu' , age:23 , collage : 'UoBolton'};
//student = {id : 1 , name :'Tharuu' , age:23 , collage : 'UoBolton' , subject : "SE"};
//student = 10 ;


//-------------------------------Distance Calculator --------------------------

function calcDistance(location1 : {lon : number ; lat : number} , location2 : {lon : number ; lat : number}){

    let lon1 = location1.lon;
    let lat1 = location1.lat;

    let lon2 = location2.lon;
    let lat2  = location2.lat;

    return distance;
}

let location_1 = {lon: 80.7718 , lat: 7.8731}; //sri lanka
let location_2 = {lon: 133.7751 , lat: 25.2744}; // ausi
let location_3 =  " ";

let distance = calcDistance(location_1 , location_2);
//console.log('Distance:' , distance.toFixed(F));*/

//------------------------------- Distance Calculator ------------------------------------
// objects

/*let btn_element = document.getElementById('btn');

let location1_lat_input_element = document.getElementById('lat1') as HTMLInputElement;
let location1_lon_input_element = document.getElementById('lon1') as HTMLInputElement;

let location2_lat_input_element = document.getElementById('lat2') as HTMLInputElement;
let location2_lon_input_element = document.getElementById('lon2') as HTMLInputElement;

let result_element = document.getElementById('result');

let student: {
    id: number;
    name: string;
    age: number;
    college: string;
};

student = {id: 1, name: 'Kavindu', age: 28, college: 'UoBolton'};
// student = {id: 1, name: 'Kavindu', age: 28, college: 'UoBolton', subject: "SE"};
// student = 10;

//------------------------------- Distance Calculator ------------------------------------

function calcDistance(location1: {lon: number; lat: number}, location2: {lon: number; lat: number}) {

    let lon1 = location1.lon;
    let lat1 = location1.lat;

    let lon2 = location2.lon;
    let lat2 = location2.lat;


    // ---- calc distance  ----
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Radius of the Earth in kilometers (mean value)
    const R = 6371;

    // Calculate the distance
    let distance = R * c;
// ---- calc distance  ----

    return distance;

}

let location_1 = { lon: 80.7718, lat: 7.8731 }; // sri lanka
let location_2 = { lon: 133.7751, lat: 25.2744 }; // ausi

let distance = calcDistance(location_1, location_2);
console.log(`Distance: ${distance.toFixed(2)} KM`);


btn_element.addEventListener('click', () => {
    let location1_lat = location1_lat_input_element.value;
    let location1_lon = location1_lon_input_element.value;
    let location2_lat = location2_lat_input_element.value;
    let location2_lon = location2_lon_input_element.value;

    let location1 = { lon: +location1_lon, lat: +location1_lat };
    let location2 = { lon: +location2_lon, lat: +location2_lat };

    let distance = calcDistance(location1, location2);

    result_element.innerText = `${distance.toFixed(2)} KM`;
});*/

//----------------------------Arrays -------------------------------------

// arrays

let num_array: number[] = [1, 2, 3, 4];
let str_array: string[] = ['ranil', 'mahinda', 'gota'];
let str_num_array: (number | string)[] = [1, 2, 'ranil', 3, 'mahinda', 'gota'];

let student1 = { id: 1, name: 'Kavindu', age: 28, faculty: 'CSE' };
let student2 = { id: 2, name: 'Janith', age: 25, faculty: 'TONIC' };

let student3 = { id: 3, name: 'Kalum', age: 20, faculty: 'TONIC', uni: 'UoC' };

let students: {id: number; name: string; age: number; faculty: string, uni?: string}[] = [];

students.push(student1);
students.push(student2);
students.push(student3);