
 //exc_1

function getDestinationName(destination) {
    return destination.name;
   }

//----------------------------------------   

   const getDestinationName = destination => destination.name;




 //exc_2
 function getTravelStatus(status) {
    if (status === "Visited") {
    return "You have visited this place";
    } else if (status === "Upcoming") {
    return "You are planning to visit this place";
    } else {
    return "This place is in your wishlist";
    }
   }
 //----------------------------------------   
 const getDestinationName = status => {

    if (status === "Visited") {
        return "You have visited this place";
        } else if (status === "Upcoming") {
        return "You are planning to visit this place";
        } else {
        return "This place is in your wishlist";
        }

 }             

 
 //exc_3

 function getTotalBudget(destinations) {
    let totalBudget = 0;
    for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
    }
    return 'Total travel budget is ' + totalBudget;
   }
   
   //----------------------------------------  
   const getTotalBudget = destination => {
    let totalBudget = 0;
    for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
    }
    return 'Total travel budget is ' + totalBudget;
   }

//exc_4

   let sortedDestinations = destinations.sort(function(a, b) {
    return b.budget - a.budget;
   });


   //----------------------------------------

   let sortedDestinations = destinations.sort((a, b) => b.budget - a.budget);


//exc_5
   function getDestinationNames(destinations) {
    return destinations.map(function(destination) {
    return destination.name;
    });
   }
   //----------------------------------------



   const getDestinationNames = destinations => destinations.map(destination => destination.name);



   
   
