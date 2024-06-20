// Async - Await 

  

  

// Create 

const p = new Promise((res, rej)=>{ 

    setTimeout(()=>{ 

        res(5); 

    }, 3000) 

    // resolve after 3 second. 

}); 

  

const p1 = new Promise((res, rej)=>{ 

    setTimeout(()=>{ 

        res(50); 

    }, 1000) 

    // resolve after 1 second 

}); 

  

const p2 = new Promise((res, rej)=>{ 

    setTimeout(()=>{ 

        res(500); 

    }, 5000) 

}); 

// Handle 

// p.then((data)=>{ 

//     console.log("Data", data) 

//     p1.then(data=> { 

//         console.log(data); 

//         p2.then(data=> console.log(data)) 

//     }) 

// }).catch(err=> console.log(err)) 

  

// We put async keyword before function 

// We use await keyword only in async function 

  

  

async function getUsers(){ 

    try{ 

         const data = await p;  

         console.log("Promise data", data) 

          

    }catch(err){ 

        console.log("Errr", err) 

    } 

  const data2 = await p1; 

  console.log("P1 data", data2) 

} 

getUsers(); 