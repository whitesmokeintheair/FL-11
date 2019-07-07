let a1 = +prompt('Enter x1 for point A:');
let check = /^[-]?\d+$/.test(a1);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        a1 = +prompt('Enter x1 for point A:');
        check = /^[-]?\d+$/.test(a1);
    }
}
let a2 = +prompt('Enter x2 for point A:');
check = /^[-]?\d+$/.test(a2);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        a2 = +prompt('Enter x2 for point A:');
        check = /^[-]?\d+$/.test(a2);
    }
}
let b1 = +prompt('Enter x1 for point B:');
check = /^[-]?\d+$/.test(b1);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        b1 = +prompt('Enter x1 for point B:');
        check = /^[-]?\d+$/.test(b1);
    }
}
let b2 = +prompt('Enter x2 for point B:');
check = /^[-]?\d+$/.test(b2);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        b2 = +prompt('Enter x2 for point B:');
        check = /^[-]?\d+$/.test(b2);
    }
}
let c1 = +prompt('Enter x1 for point C:');
check = /^[-]?\d+$/.test(c1);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        c1 = +prompt('Enter x1 for point C:');
        check = /^[-]?\d+$/.test(c1);
    }
}
let c2 = +prompt('Enter x2 for point C:');
check = /^[-]?\d+$/.test(c2);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        c2 = +prompt('Enter x2 for point c:');
        check = /^[-]?\d+$/.test(c2);
    }
}

let middlex = (a1 + c1)/2;
let middley = (a2 + c2)/2;
let result;

if(middlex === b1 && middley === b2) {
    result = true
} else {
    result = false;
}
console.log(result);