function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "no way"
    }
    const array = [];
    const total = str.length - 1;


    for (let i = total; i >= 0; i--) {
        array.push(str[i]);
    }

    return array.join("")
}

console.log(reverse("Hi My Name is Hamid Teimouri"));