
let number = 0;
const scrolling = { behavior: "smooth", inline: "end" };
const sections = document.querySelectorAll('section');

function toNext() {
    let now = window.pageYOffset;
    let min = Infinity;
    let index = undefined;
    const eps = 10;
    sections.forEach((section, i, arr) => {
        if (min != 0) {
            let offset = section.offsetTop - now;
            if (offset > eps && offset < min) {
                min = offset;
                index = i;
            } else if (offset > 0 && offset < eps) {
                if (arr.length == i + 1) index == undefined;
                else {
                    min = 0;
                    index = i + 1;
                }
            }
        }
    })
    if(index != undefined) sections[index].scrollIntoView(scrolling);
}


function toBlock(block) {
    const go = document.getElementsByClassName(block)[0];
    go.scrollIntoView(scrolling);
}
