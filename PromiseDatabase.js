

function fetchDataFromDatabase(){
    return new Promise ((resolve,reject)=>
    setTimeout(()=>{
        const data =true;
        if(data){
            resolve("Data fetched successfully!")
        }
        else{
            reject("Data not found!")
            }
    
    },3000)

)}
   function fetchdata(){
    console.log(`Fetching data from database...`)

   fetchDataFromDatabase()
   .then( (message) => {
    console.log(`If Data is found --- ${message}`);
})
.catch( (error) => {
    console.log(`If data is not found --- ${error}`);
})
   }
   fetchdata();