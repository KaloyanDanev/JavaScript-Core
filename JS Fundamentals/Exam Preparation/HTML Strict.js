function solve([input]) {
 let pattern = /<.*?>/g;
 let x = input.replace(pattern,``);
    console.log(x);
}
solve(['<h1><span>Hello World!</span></h1>',
    '<p>I am Peter.']
);