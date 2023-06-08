const i = ['I am ', 'I have ', 'I can '];
const affirmations = ['brave.', 'kind.', 'intelligent.', 'beautiful.', 'hard working.'];
const haveAffirmations = ['loyal friends.', 'endless opportunities.', 'a good heart.', 'more than enough.', 'everything I need.'];
const canAffirmations = ['be whoever I want to be.', 'have as many new beginnings as I would like.', 'achieve anything I set my mind and heart to.', 'be brave today.', 'do this.'];

let randomNumber = Math.floor(Math.random() * 5);
if (randomNumber === 0) {
    console.log(i[0] + affirmations[0]);
} else if (randomNumber === 1) {
    console.log(i[0] + affirmations[1]);
} else if (randomNumber === 2) {
    console.log(i[0] + affirmations[2]);
} else if (randomNumber === 3) {
    console.log(i[0] + affirmations[3]);
} else if (randomNumber === 4) {
    console.log(i[0] + affirmations[4]);
}

let randomHave = Math.floor(Math.random() * 5);
if (randomHave === 0) {
    console.log(i[1] + haveAffirmations[0]);
} else if (randomHave === 1) {
    console.log(i[1] + haveAffirmations[1]);
} else if (randomHave === 2) {
    console.log(i[1] + haveAffirmations[2]);
} else if (randomHave === 3) {
    console.log(i[1] + haveAffirmations[3]);
} else if (randomHave === 4) {
    console.log(i[1] + haveAffirmations[5]);
}

let randomCan = Math.floor(Math.random() * 5);
if (randomCan === 0) {
    console.log(i[2] + canAffirmations[0]);
} else if (randomCan === 1) {
    console.log(i[2] + canAffirmations[1]);
} else if (randomCan === 2) {
    console.log(i[2] + canAffirmations[2]);
} else if (randomCan === 3) {
    console.log(i[2] + canAffirmations[3]);
} else if (randomCan === 4) {
    console.log(i[2] + canAffirmations[5]);
}