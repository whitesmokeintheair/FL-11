let a = +prompt('Enter a:');
let check = /^[-]?\d+$/.test(a);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        a = +prompt('Enter a:');
        check = /^[-]?\d+$/.test(a);
    }
}
let b = +prompt('Enter b:');
check = /^[-]?\d+$/.test(b);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        b = +prompt('Enter b:');
        check = /^[-]?\d+$/.test(b);
    }
}
let c = +prompt('Enter c:');
check = /^[-]?\d+$/.test(c);
if(!check) {
    alert('Should be a numeric value');
    while(check === false) {
        c = +prompt('Enter c:');
        check = /^[-]?\d+$/.test(c);
    }
}
let result;
if(a+b > c && b+c > a && a+c > b) {
    if(a===b && b===c && a===c) {
        result = 'Equivalent triangle';
    } else if(a===b || b===c || a===c) {
        result = 'Isosceles triangle';
    } else {
        result = 'Normal triangle';
    }
} else {
    result = "triangle doesn't exist";
}
console.log(result);
