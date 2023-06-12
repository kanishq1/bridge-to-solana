console.info("test");
console.info(document);

const disableClick = setInterval(() => {
    if (document.getElementsByClassName("css-v7tesq-network")) {
        document.getElementsByClassName("css-v7tesq-network")[1].removeEventListener("click");
    }
}, 300);
