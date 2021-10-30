let gameaudio = new Audio('../assets/songs/boxclicked.mp3')
let victory = new Audio('../assets/gifs/music.mp3')
let blocks = document.getElementsByClassName('box')
let turn = 'X'
let isgameover = false
function changeturn() {
    return turn === 'X' ? '0' : 'X'
}
function checkwin() {
    let textspan = document.getElementsByClassName('box-div')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach((winningcombination) => {
        if ((textspan[winningcombination[0]].innerText === textspan[winningcombination[1]].innerText) && (textspan[winningcombination[2]].innerText === textspan[winningcombination[1]].innerText) && (textspan[winningcombination[0]].innerText != '')) {
            document.getElementById('winning-text').innerText = textspan[winningcombination[0]].innerText + ' Won'
            isgameover = true
            document.getElementById('victoryimg').style.width='200px'
            victory.play()
            setTimeout(()=>{
                victory.pause()
            },5000)
        }
    })
}
Array.from(blocks).forEach((block) => {
    let boxcard = block.querySelector('.box-div')
    block.addEventListener('click', () => {
        boxcard.innerText = turn
        gameaudio.play()
        turn = changeturn()
        checkwin()
        document.getElementById('currentturn').innerText = `turn of ${turn}`
        if (!isgameover) {
            document.getElementById("currentturn").innerText = "Turn for " + turn;
        }
    })
})
document.getElementById('resetbtn').addEventListener('click', () => {
    document.getElementById('victoryimg').style.width='0px'
    let texts = document.getElementsByClassName('box-div')
    Array.from(texts).forEach((element) => {
        element.innerText = ''
    })
    isgameover = false
    turn = 'X'
    document.getElementById('currentturn').innerText = `turn of ${turn}`
})