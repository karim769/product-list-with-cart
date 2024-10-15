
//  import fetchData from "./fetch-data";
import { getLastChar } from "./helper-mothed.js";
import { addItemToYourList } from "./yourCart.js";
 const addToCart=document.querySelectorAll(".addToCart");

 addToCart.forEach(element => {


    element.addEventListener('click',e => {
        if(e.target){

            const curId=getLastChar(element.getAttribute("id"));

                addItemToYourList(curId);

          const curAddToCart=  document.querySelector(`#addToCart${curId}`);
            const curIncrementDecrementButtons=document.getElementById(`incrementDecrementButtons${curId}`);
            
            // here is the bug of you add to cart button
          if(curAddToCart.classList.contains("addToCart")){
            curAddToCart.classList.remove("addToCart");
             curAddToCart.classList.add("addToCartHidden");

                curIncrementDecrementButtons.classList.remove("incrementDecrementButtonsHidden");
                curIncrementDecrementButtons.classList.add("incrementDecrementButtons");

          }

        }

    })

})



  document.querySelectorAll(".increment").forEach(button => {

    button.addEventListener("click", e => {
    
        if(e.target){

    const curId=getLastChar(button.getAttribute("id"));

            const curQuantity=document.getElementById(`quantity${curId}`);

         curQuantity.textContent= Number(curQuantity.textContent)+1;

         addItemToYourList(curId);
            
        }
        
        
        
        });


});
 

// // the Decrement 

    document.querySelectorAll(".decrement").forEach(button => {
    
        button.addEventListener("click", e => {
        
            if(e.target){
    
        const curId=getLastChar(button.getAttribute("id"));
    
                const curQuantity=document.getElementById(`quantity${curId}`);
                
                if(Number(curQuantity.textContent)>0){
               curQuantity.textContent= Number(curQuantity.textContent)-1;
                      addItemToYourList(curId);
                        if(Number(curQuantity.textContent)===0){
                                
                        displayAddToCart(curId);
                            
                        }


                }

            }

           

            
            });
    });
     

      
   function displayAddToCart(curId){

    const curAddToCart = document.getElementById(`addToCart${curId}`);
    const curIncrementDecrementButtons = document.getElementById(`incrementDecrementButtons${curId}`);
   
    
 // Hide the increment/decrement buttons
 if(curIncrementDecrementButtons)
    curIncrementDecrementButtons.classList.replace("incrementDecrementButtons", "incrementDecrementButtonsHidden");

    // Toggle the visibility of the "Add to Cart" button

    if(curAddToCart){
        // curAddToCart.classList.replace("addToCartHidden", "addToCart");
        curAddToCart.classList.remove("addToCartHidden")
        curAddToCart.classList.add("addToCart")
    
    }
    
   
}





