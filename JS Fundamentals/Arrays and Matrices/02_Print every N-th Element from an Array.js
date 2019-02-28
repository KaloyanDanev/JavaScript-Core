function solve(input) {
   let step = Number(input.pop());
   let result = input.reduce((acc,el,idx) => {
       if (idx % step === 0){
           acc.push(el);
       }
       return acc;
   },[]);
   console.log(result.join(`\n`));
}