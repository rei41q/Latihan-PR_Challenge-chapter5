//DATA GLOBAL DIPANGGIL
let player1 = document.querySelectorAll(".player1");
let player2 = document.querySelectorAll(".bot");
let reset = document.getElementById("refresh");
let ScorePlayer1 = document.getElementsByClassName("pemain11");
let ScoreCom = document.getElementsByClassName("com");
class dataAwal{ //CLASS DATA AWAL YG SIAP DIPAKE
    static keteranganDraw = "DRAW";
}
class dataPemain{ //CLASS CONSTRUCTOR DATA PLAYER 1 DAN BOT
    constructor(indexPlayer,keteranganMenang,Score,status){
        this.indexPlayer = indexPlayer;
        this.keteranganMenang = keteranganMenang;
        this.Score = Score;
        this.status = status;
    }
    gantiBackgroundInClass(indexPilihanPemain){ //GANTI BACKGROUND SAAT KLIK PILIHAN PLAYER1/BOT IN CLASS
        if(this.status == "Player 1")
        gantiBackground(player1,indexPilihanPemain);
        else{
        gantiBackground(player2,indexPilihanPemain);
        }
    }
}
let pemain1 = new dataPemain(0,"PLAYER 1 WIN",0,"Player 1"); //OBJEK PEMAIN 1
let bot1 = new dataPemain(0,"COM WIN",0,"Bot/Com") //OBJEK BOT

function startgame(){
    for(let i = 1 ; i<player1.length ; i++){ //CEK CLIK MENGGUNAKAN ARRAY
        player1[i].addEventListener("click", handleClick.bind( null, i) );
    }
}
function gantiBackground(playerPilihan,i){
    playerPilihan[i].setAttribute("style","background-color : #c4c4c4;border-radius: 15px;");

}
function komputerMemilih(i){ //KOMPUTER MEMILIH MENGGUNAKAN RANDOM MATH FLOOR
   let randomMemilih = Math.floor(Math.random() * 3) + 1;
    bot1.indexPlayer = randomMemilih;
    bot1.gantiBackgroundInClass(randomMemilih);
    cekPemenang(i, randomMemilih);
}
reset.onclick = function(){ //ONLCIK MEMANGGIL FUNCTION resetBackground
    resetBackground();
    pemain1.Score =0;
    bot1.Score=0;
    dataScore(0,0);
}
function handleClick(i) { //SAAT DIKLIK MEMANGGIL RESET BACKGROUND, GANTI BACKGROUND 
    //DAN MENYIMPAN indexPlayer AGAR DILAKUKAN LOGIKA PENGECEKAN
        resetBackground(); 
        pemain1.gantiBackgroundInClass(i);
        pemain1.indexPlayer = i;
        komputerMemilih(i);
        //SELANJUTNindexkomputergantYA KOMPUTER MEMILIH 
}
function resetBackground(){ //RESET BACKGROUND DENGAN ARRAY DAN PANJANG DARI JUMLAH CLASS PLAYER1
    for(let i = 1 ; i<player1.length ; i++){
          player1[i].setAttribute("style","background-color : none");
          player2[i].setAttribute("style","background-color : none");
    }
    pemenang.innerHTML = "V S";
    pemenang.setAttribute("style","background-color : none;color: #bd0102;");
}
function consoleLogTerminal(indexPlayer,indexKomputer){ //MENAMPILKAN DATA CONSOLE 
    console.log(player1[indexPlayer].id," X ", player2[indexKomputer].id," ",pemenang.innerHTML );
}
function setAttributeMenang(){ //DATA PEMENANG DITAMPILAN
    pemenang.setAttribute
    ("style",
    "background-color : green;color: white;transform: rotate(-15deg);margin-left: 21%;width: 14vw;font-size: 3vw;border-radius: 5px");
    dataScore(pemain1.Score,bot1.Score);
}

function dataScore(pemain1Score,bot1Score){
    ScorePlayer1[0].innerHTML ="PLAYER 1-Score: "+ pemain1Score;
    ScoreCom[0].innerHTML ="COM-Score: "+ bot1Score;
}
function cekPemenang(indexPlayer1, indexPlayer2){ //LOGIKA PENGECEKAN PEMENANGAN MENGGUNAKAN 2 INDEX DARI PLAYER 1 DAN BOT
    if(indexPlayer1 == 1 && indexPlayer2 ==1){
        pemenang.innerHTML = dataAwal.keteranganDraw;
        setAttributeMenang();      
    }
    else if(indexPlayer1 == 1 && indexPlayer2 ==2){
        pemenang.innerHTML = bot1.keteranganMenang;
        bot1.Score++;
        setAttributeMenang();
    }
    else if(indexPlayer1 == 1 && indexPlayer2 ==3){
        pemenang.innerHTML =   pemain1.keteranganMenang;
        pemain1.Score++;
        setAttributeMenang();
    }
    else if(indexPlayer1 == 2 && indexPlayer2 ==1){
        pemenang.innerHTML =   pemain1.keteranganMenang;
        pemain1.Score++;
        setAttributeMenang();
    }
    else if(indexPlayer1 == 2 && indexPlayer2 ==2){
        pemenang.innerHTML =  dataAwal.keteranganDraw;
        setAttributeMenang();
    }
    else if(indexPlayer1 == 2 && indexPlayer2 ==3){
        pemenang.innerHTML =   bot1.keteranganMenang;
        bot1.Score++;
        setAttributeMenang();
    }
    else if(indexPlayer1 == 3 && indexPlayer2 ==1){
        pemenang.innerHTML =   bot1.keteranganMenang;
        bot1.Score++;
        setAttributeMenang();
    }
    else if(indexPlayer1 == 3 && indexPlayer2 ==2){
        pemenang.innerHTML =   pemain1.keteranganMenang;
        pemain1.Score++;
        setAttributeMenang();
    }
    else if(indexPlayer1 == 3 && indexPlayer2 ==3){
        pemenang.innerHTML =  dataAwal.keteranganDraw;
        setAttributeMenang();
    }
    consoleLogTerminal(indexPlayer1, indexPlayer2);
    }
startgame();