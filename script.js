let promise = new Promise(function(res,rej){
    grade=59;
    if(grade>=60){
        res("pass");
    }else{
        rej("fail");
    }
    });
    
    promise.then(function(message){
    document.write(`you ${message} the subject`);
    }).catch(function(message){
    document.write(`you ${message} the subject`)
    });