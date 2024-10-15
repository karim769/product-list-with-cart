import { attachConfirmButton } from "./confirm.js";

export const selectedItems=new Array();
export  let totalPriceOrder=0;
export function addItemToYourList(id){

    const theCart=document.getElementById(`cart${id}`);
    const name=theCart.querySelector("strong").textContent;
    const price=theCart.querySelector(".price").textContent;
    let category=theCart.querySelector('.category').textContent;

    // this approach will create an intermediate array but I use this for the readability 
    // for large string we can use some think like let modifiedString = originalString.replace(/ /g, "-");
    category=category.split(" ").join("-");

    const quantity=document.getElementById(`quantity${id}`).textContent;

    const index= getIndexOfItem(name);

if(index!=-1){
        selectedItems[index].quantity=Number(quantity);
}else {

const myNewItem={

    name:name,
    quantity:1,
    price:price.substring(1),
     srcThumbnail:`./assets/images/image-${category}-thumbnail.jpg`,

};
    // totalPrice:this.price*this.quantity,


selectedItems.push(myNewItem);

}

displayYourNewCart();

}

function getIndexOfItem(name){

for(let i=0;i<selectedItems.length;i++){
     
    
    if(selectedItems[i].name===name){

        return i;
    }
    
    }

    return -1;
}

displayYourNewCart();

export function displayYourNewCart(){

    const selectedItemsContainer=document.createElement("div");
    selectedItemsContainer.classList.add('selectedItemsContainer');
    let quantityOfYourCart=0;

    if(selectedItems.length===0){

            const emptyImage=document.createElement("img");
            emptyImage.setAttribute(`src`,`./assets/images/illustration-empty-cart.svg`);
            emptyImage.setAttribute('alt',`illustration empty cart`);
        
            const p=document.createElement("p");
            const pText=document.createTextNode('Your added items will appear here');
            p.appendChild(pText);

            selectedItemsContainer.appendChild(emptyImage);
            selectedItemsContainer.appendChild(p);

    }else{

selectedItems.forEach( item =>
{

    quantityOfYourCart+=item.quantity;
   totalPriceOrder+=item.quantity*Number(item.price);
    selectedItemsContainer.appendChild(createItemOrder(item));

});

    const orderTotal=document.createElement("div");
        orderTotal.classList.add("orderTotal");
    const orderP=document.createElement("p");

    const orderTotalText=document.createTextNode("Order Total");
    orderP.appendChild(orderTotalText);

    const orderPrice=document.createElement("p");

    const orderTotalPrice=document.createTextNode(`$${totalPriceOrder}`);

    orderPrice.appendChild(orderTotalPrice);

    orderTotal.appendChild(orderP);
    orderTotal.appendChild(orderPrice);


    const carbonContainer=document.createElement("div");
    carbonContainer.classList.add("carbon");

    const carbonIcon=document.createElement("img");
    carbonIcon.setAttribute(`src`,`./assets/images/icon-carbon-neutral.svg`);
    carbonIcon.setAttribute(`alt`,`carbon neutral`);

    const carbonText=document.createTextNode("This is a carbon-neutral delivery")

    carbonContainer.appendChild(carbonIcon);
    carbonContainer.appendChild(carbonText);

        const confirm=document.createElement("button");
        confirm.setAttribute(`id`,`confirmBtn`);

        const confirmText=document.createTextNode("Confirm Order");

        confirm.appendChild(confirmText);

    selectedItemsContainer.appendChild(orderTotal);
    selectedItemsContainer.appendChild(carbonContainer);
    selectedItemsContainer.appendChild( confirm);

   
}

 const yourQuantity=document.querySelector(".your-cart h2");
 yourQuantity.textContent=`Your Cart(${quantityOfYourCart})`;
 document.querySelector(".your-cart").prepend(yourQuantity);


 if(yourQuantity.nextElementSibling)
    yourQuantity.nextElementSibling.remove();
document.querySelector(".your-cart").appendChild(selectedItemsContainer);
attachRemoveItem();

 // this function will attach the confirm button in the confirm file
 attachConfirmButton();
}

function createItemOrder(item){

    const selectedItemContainer=document.createElement("div");
     selectedItemContainer.classList.add("selectedItemContainer");
    const textContainer=document.createElement("div");

    const name=document.createElement("strong");
    name.textContent=item.name;

    const infoText=document.createElement("div");

    const quantity=document.createElement("span");
    quantity.textContent=`${item.quantity}x`;

    const price=document.createElement("span");
    price.textContent=`@ $${item.price}`;


    const totalPrice=document.createElement("span");
    totalPrice.textContent=`$${item.price*item.quantity}`;

    infoText.appendChild(quantity);
    infoText.appendChild(price);
    infoText.appendChild(totalPrice);

    textContainer.appendChild(name);
    textContainer.appendChild(infoText);

    const removeItemIcon=document.createElement("img");
    removeItemIcon.classList.add("remove-icon");
    removeItemIcon.setAttribute(`src`,`./assets/images/icon-remove-item.svg`);
    removeItemIcon.setAttribute(`alt`,`remove item icon`);

    selectedItemContainer.appendChild(textContainer);
    selectedItemContainer.appendChild(removeItemIcon);


    return selectedItemContainer;
}

function attachRemoveItem(){

    const removeIcons=document.querySelectorAll(".remove-icon");
    removeIcons.forEach(icon => {


        icon.addEventListener('click', e => {

            if(e.target){

                const name=icon.parentNode.querySelector("strong").textContent;
              selectedItems.splice(getIndexOfItem(name),1);
            
                    displayYourNewCart();

            }

        })



    })
 
}
