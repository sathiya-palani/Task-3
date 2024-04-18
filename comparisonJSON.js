let obj1 = { name: "Person 1" , age:5 };
let obj2 = { age: 5 , name: "Person 1"};

function check (obj1, obj2) {
    for (key in obj2) {
        if(obj1[key] !== obj2[key]) {
            return false ;
        }
    }
    return true ;
}

