let nameMaybe = Math.random() > 0.5 ? "Tony Horse" : undefined;
console.log(`nameMaybe: ${nameMaybe}`);
nameMaybe?.toLocaleLowerCase();

function unused_param(s: string) : string {
    if (s != undefined) return s;
    return 'undefined';
};

unused_param('a string');