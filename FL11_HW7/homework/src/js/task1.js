let user = 'user@gmail.com';
let admin = 'admin@gmail.com';
let password;
let userpass= 'UserPass';
let adminpass = 'AdminPass';
let email;
let passchange;

email = prompt('Enter your email:');
if (email !== null && email !== '') {
    if (email.length >= 6) {
        if (email === user || email === admin) {
            password = prompt('Enter your password: ');
            if (password !== null && password !== '') {
                if (email === user && password === userpass) {
                    passchange = confirm('Would you like to change your password?');
                } else if (email === admin && password === adminpass) {
                    passchange = confirm('Would you like to change your password?');
                } else {
                    alert('Wrong password');
                }
            } else {
                alert('Canceled');
            }
        } else {
            alert("I don't know you");
        }
    } else {
        alert("I don't know any emails having name length less than 6 symbols");
    }
} else {
    alert('Canceled');
}
if (passchange) {
    let newpass;
    let confirmpass;
    password = prompt('Enter old password: ');
    if (password !== null && password !== '') {
        if (email === user && password === userpass) {
            newpass = prompt('Enter new password: ');
        } else if (email === admin && password === adminpass) {
            newpass = prompt('Enter new password: ');
        } else {
            alert('Wrong password');
        }
    } else {
        alert('Canceled');
    }
    if (newpass.length >= 5) {
        confirmpass = prompt('Confirm new password: ');
        if (confirmpass === newpass && email === user) {
            userpass = newpass;
            alert("You've succesfully changed your password");
        } else if (confirmpass === newpass && email === admin) {
            adminpass = newpass;
            alert("You've succesfully changed your password");
        } else {
            alert('You wrote the wrong password');
        }
    } else {
        alert('It’s too short password. Sorry');
    }
} else {
    alert("You've failed the change");
}
