
function add(a,b){
    const promise = new Promise ((resolve,reject)=>{
        if(a<0){
            reject("invalid value");
        }else{
           setTimeout(() => {resolve(a+b)} , 2000);
        }
    });
    return promise;
}

function print(res){
    console.log(res);
}

const result = add(2,3);
result.then((res)=>{print(res);});
