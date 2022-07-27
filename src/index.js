let curIndex = -1;
const spanArr = document.getElementsByTagName("span");

const init = () => {
    for (let i= 0; i < spanArr.length; i++) {
        let spanItem = spanArr[i];
        let svgEmpty = spanItem.children[0];
        let svgFill = spanItem.children[1];
        svgEmpty.style.display = 'inline';
        svgFill.style.display = 'none';
        spanItem.addEventListener("mouseenter", () => {
           curIndex = i;
           refill();
        });

        spanItem.addEventListener("mouseleave", () => {
            curIndex = -1;
            refill();
         });


    }
}

const refill = () => {
    for (let i= 0; i < spanArr.length; i++) {
        let spanItem = spanArr[i];
        let svgEmpty = spanItem.children[0];
        let svgFill = spanItem.children[1];
        if (i <= curIndex) {
            svgEmpty.style.display = 'none';
            svgFill.style.display = 'inline';
        }
        else {
            svgEmpty.style.display = 'inline';
            svgFill.style.display = 'none';
        }
    }

}

init();