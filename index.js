var CardLeonardo = window.document.getElementById("leonardo")
var CardSamantha = window.document.getElementById("samantha")
var CardBruna = window.document.getElementById("bruna")
var RightArrow = window.document.getElementById("right-arrow")
var LeftArrow = window.document.getElementById("left-arrow")

function RightScroll() {
    CardLeonardo.style = "display: none"
    CardSamantha.style = "display: flex"
    LeftArrow.style = "display: flex"
    RightArrow.style = "display: none"
}