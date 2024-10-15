export default fetch('./data.json').then((res) =>{
    return res.json();

}).then(data => {

 for(let i=1;i<=data.length;i++) {
        
        const cart=document.createElement("div");
        cart.classList.add("cart");
        cart.setAttribute(`id`,`cart${i}`);

        const pictureIllustration=document.createElement("picture");
        pictureIllustration.classList.add("picture-illustration")

        const source=document.createElement("source");
        source.setAttribute("srcset",`${data[i-1].image.desktop}`)
        source.setAttribute("alt",`${data[i-1].name}`);

         source.setAttribute("media","(min-width:781px)");

        const img=document.createElement("img");
        img.classList.add("illustration-image");
            img.setAttribute("src",`${data[i-1].image.mobile}`);
            img.setAttribute("alt",`${data[i-1].name}`);

            pictureIllustration.appendChild(source);
            pictureIllustration.appendChild(img);

            const addToCartContainer=document.createElement("div");
                addToCartContainer.classList.add("addToCartContainer");
                addToCartContainer.setAttribute("id",`addToCartContainer${i}`);


                const incrementDecrementButtons=document.createElement("div");
                incrementDecrementButtons.classList.add("incrementDecrementButtonsHidden");
                incrementDecrementButtons.setAttribute("id",`incrementDecrementButtons${i}`);
                
                const incrementImage=document.createElement("img");
                incrementImage.setAttribute("src","./assets/images/icon-increment-quantity.svg");
                incrementImage.setAttribute("alt",`icon increment quantity`);
                incrementImage.setAttribute("id",`increment${i}`);
                incrementImage.classList.add("increment");

                
                const quantity=document.createElement("span");
                quantity.setAttribute("id",`quantity${i}`);
                quantity.textContent=1;
                
                const decrementImage=document.createElement("img");
                decrementImage.setAttribute("src","./assets/images/icon-decrement-quantity.svg");
                decrementImage.setAttribute("alt",`icon decrement quantity`);
                decrementImage.setAttribute("id",`decrement${i}`);
                decrementImage.classList.add("decrement");
                
                incrementDecrementButtons.appendChild(decrementImage);
                incrementDecrementButtons.appendChild(quantity);
                incrementDecrementButtons.appendChild(incrementImage);
                




        const addToCart=document.createElement("div");
        addToCart.classList.add("addToCart");
        addToCart.setAttribute("id",`addToCart${i}`);

       
        const imgAddToCart=document.createElement("img");
        imgAddToCart.setAttribute("src",`./assets/images/icon-add-to-cart.svg`);
        addToCart.appendChild(imgAddToCart);
        const textAddToCart=document.createTextNode("Add to Cart");
        addToCart.appendChild(textAddToCart);
            addToCartContainer.appendChild(addToCart);
                addToCartContainer.appendChild(incrementDecrementButtons);

        const category=document.createElement("p");
        category.classList.add("category");
        const categoryText=document.createTextNode(`${data[i-1].category}`);    
        category.appendChild(categoryText);

            const nameStrong=document.createElement("strong");
            const nameText=document.createTextNode(`${data[i-1].name}`);
            nameStrong.appendChild(nameText);



            const price=document.createElement("p");
            price.classList.add("price");
            const priceText=document.createTextNode(`$${Number(data[i-1].price).toFixed(2)}`);
             price.appendChild(priceText);

             pictureIllustration.appendChild(addToCartContainer);
            cart.appendChild(pictureIllustration);
            // cart.appendChild(addToCart);
            cart.appendChild(category);
            cart.appendChild(nameStrong);
            cart.appendChild(price);

            document.querySelector(".carts-container").appendChild(cart);
            //  main.appendChild(cart);

 
    }



});