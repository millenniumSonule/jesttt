(function fetchData() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('resolve');
        },2000);
    })
})()  //IIFE

