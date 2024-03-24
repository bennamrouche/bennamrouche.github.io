
//============== classes utils 
class SimpleAI 
{
    constructor (dt)
    {
        data = dt; 
    }

    setChar(ply, itm)
    {
        itm.innerText = ply.char;
        data.canPaly = true;
        setTimeout(checkWin, 1000)
         confirm(":: switch ::")
        Player1_p.classList.remove("select-player");
        Player2_p.classList.add("select-player")
    }

    play () 
    {
        let isGameOver = true;

        for (let i = 0; i <  data.array.length; i++)
        {
            if (data.array[i].innerText.trim() == "")
            {
                isGameOver = false;
                data.canPaly = false;
                setTimeout(this.setChar,750, data.Player2, data.array[i]);
               
                break;
            }
        }
     
    }
}



class Player 
{
    constructor(char )
    {
        this.char = char;
        this.score = 0;
    }
}

//---------------- var init

let ceil          = document.getElementsByClassName("ceil");
let resButton     = document.querySelector("#reset");
let ScorePlayer1  = document.querySelector("#ScorePlayer1");
let ScorePlayer2  = document.querySelector("#ScorePlayer2");

let Player1_p   = document.querySelector("#Player1-p");
let Player2_p  = document.querySelector("#Player2-p");

resButton.addEventListener("click", res)

let data = {"canPlay": true
            , "array": []
            , "Player1":new Player("Q")
            , "Player2":new Player("#")}

let AI = new SimpleAI(data)


 function res()
{
    for (let itm of data.array)
        itm.innerText = "";
}

for(let i = 0; i <ceil.length; i++)
{ 
   let  itm =  ceil.item(   i);
    data.array.push(itm); 
     itm.addEventListener("click", 
     e=>{
        if(data.canPlay == false ||   checkWin() == true)
                return;
        if (e.target.innerText.trim() == "")
        {
            e.target.innerText = data.Player1.char;
            Player2_p.classList.add("select-player");
            Player1_p.classList.remove("select-player");
        }
           
        checkWin();

        AI.play();
    });// end AddEvnetListner 

}// end for 



//  AI.play();
console.clear();



function isWin(char)
{
    let ar = []
    for(let itm of data.array)
        ar.push(itm.innerText)
    for(let i = 0 ; i < 3; i++)
    {
        
        let row =  ar[i] == char && ar[i +1 ] == char && ar[i + 2] == char;
        let col =  ar[i] == char && ar[i +3 ] == char && ar[i + 6] == char;

        if (row == true)
            return true;
        if (col == true)
            return true;
       
    }
    let dig1 =  ar[0] == char && ar[4] == char && ar[8] == char;
    let dig2 =  ar[2] == char && ar[4] == char && ar[6] == char;

    return dig1 || dig2;

}


function checkWin()
{
    if (isWin(data.Player1.char))
    {
        ScorePlayer1.innerText = `${data.Player1.score++}`
        res();
        return true;
    }

    if (isWin(data.Player2.char))
    {
        ScorePlayer2.innerText = `${data.Player2.score++}`
        res();
        return true;
    }
    return false;
}

Player2_p.classList.remove("select-player");
Player1_p.classList.add("select-player");