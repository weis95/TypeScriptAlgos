type Rule = (n: number)  => string;

function mkRule(div: number, word: string): Rule {
    return n => n % div === 0 ? word : '';
}

function range(start: number, end: number) {
    return [...Array(end - start).keys()]
        .map(x => x + start);
}

function fizzbuzz(rules: Rule[], end = 100): string[] {
    return range(1, end)
        .map(i => {
            const str = rules
                .reduce((word, rule) => word + rule(i), '');
            return str === '' ? `${i}` : str;
        });
}

const answer = fizzbuzz([
    mkRule(3, 'Fizz'),
    mkRule(5, 'Buzz')
]);

console.log(answer.join(', '));