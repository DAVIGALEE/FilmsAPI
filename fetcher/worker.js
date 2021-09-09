self.onmessage = (e) => {


console.log(e)
    ///console.log(e)
let doneOutput = ['d','o','n','e']

    function forLoop(data){
    
        for(let i = 1; i <= data;i++){

console.log(i)





       // Calculate the progress percentage.
      let progress = Math.round(i/e.data*100);
       // Only send a progress update if the progress has changed
       // at least 1%.
       let previousProgress;
     
       if (progress != previousProgress) {
         postMessage(
          {messageType: "Progress", data: progress}
         );
         previousProgress = progress;
       } }
    
    console.log(progress)
        }
  
    
    console.log(e.type)
let evaluatedData = forLoop(e.data)
   

    postMessage({
        messageType:'PrimeList',
        data: evaluatedData
    })
    

}

