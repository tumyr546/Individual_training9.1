function greetUser() {
    let name = prompt("Будь ласка, введіть ваше ім'я:");
    
    if (name) {
        console.log(`Привіт, ${name}!`);
    } else {
        console.log("Ім'я не було введено.");
    }
}

greetUser();