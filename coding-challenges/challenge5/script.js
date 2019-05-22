function stars() {
    var star = [];
    for (i = 0; i <= 8; i++) {
        if (i <= 4) {
            star.push('*');
            console.log(star.join(''));
        }
        else {
            star.pop('*');
            console.log(star.join(''));
        }
    }
}

stars();