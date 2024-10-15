export function getLastChar(str){

    return str[str.length-1];

}

export function createImg(src,alt){

    const image=document.createElement("img");
    image.setAttribute('src',src);
    image.setAttribute('alt',alt);

    return image;



}