import { selectedItems,totalPriceOrder } from "./yourCart.js";
import { createImg } from "./helper-mothed.js";


export function attachConfirmButton(){
    const confirmBtn=document.getElementById('confirmBtn');
    if(confirmBtn){

        confirmBtn.addEventListener('click',() => {
        
            confirmOrder();
        
        
        });
        
        }


}



function confirmOrder(){

document.querySelector('.active').classList.replace("active","inactive");

    selectedItems.forEach(item => {


        const itemContainer=document.createElement("div");
            itemContainer.classList.add("itemContainer");

            const info=document.createElement("div");

           const img=createImg(item.srcThumbnail,item.name);

           const infoTextCon=document.createElement("div");

           const name=document.createElement("p");
           const nameText=document.createTextNode(item.name);
           name.appendChild(nameText);

           const quantity=document.createElement("span");
           const quantityValue=document.createTextNode(`${item.quantity}x`);
           quantity.appendChild(quantityValue);

           const price=document.createElement("span");
           const priceValue=document.createTextNode(`@ $${item.price}`);
           price.appendChild(priceValue);

           infoTextCon.appendChild(name);
           infoTextCon.appendChild(quantity);
           infoTextCon.appendChild(price);


           info.appendChild(img);
           info.appendChild(infoTextCon);

            const totalPrice=document.createElement("p");
            const totalPriceValue=document.createTextNode(`$${item.price*item.quantity}`);
            totalPrice.appendChild(totalPriceValue);

            itemContainer.appendChild(info);
            itemContainer.appendChild(totalPrice);

            
            document.querySelector(".orderList").appendChild(itemContainer);
            
    })


    const orderTotalContainer=document.createElement("div");
     orderTotalContainer.classList.add("itemContainer","orderTotalContainer");

     const orderTotal=document.createElement("p");
     const orderTotalText=document.createTextNode("Order Total");
     orderTotal.appendChild(orderTotalText);

     const totalPrice=document.createElement("p");
            const totalPriceValue=document.createTextNode(`$${totalPriceOrder}`);
            totalPrice.appendChild(totalPriceValue);

        orderTotalContainer.appendChild(orderTotal);
        orderTotalContainer.appendChild(totalPrice);

    document.querySelector(".orderList").appendChild(orderTotalContainer);

}

document.querySelector(".confirmContainer button").addEventListener("click",() =>{

    window.location.reload();

});    
