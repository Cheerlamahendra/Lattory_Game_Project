let pickNumberButton = document.getElementById("pickNumberButton");
let randamNumber = document.getElementById("randomNumber");
let lotteryParent = document.getElementById("lotteryParent");
let gameCompletedSound = new Audio("gameCompletedSound.mp3")
let tickSound = new Audio("tickSound.wav");
let giftsArray = ["car","laptop", "house" , "watch", "watter bottele", "phone", "Note Books", "1000 cash", "earbuds","shirt"];
pickNumberButton.addEventListener("click" , function(){
    for(let i=1;i<=10;i++)
    {
        document.getElementById(i).classList.remove("winBox");

    }
    randamNumber.textContent="please wait....";
    let counter = 0;
     let setintervelId = setInterval(function(){
        tickSound.pause();
        tickSound.currentTime = 0
        tickSound.play();
        let intervelNumber = Math.floor((Math.random()*10)+1);
        counter = counter + 1;
        console.log(intervelNumber);
        for(let i=1;i<=10;i++)
        {
            if(i == intervelNumber)
            {
                document.getElementById(i).classList.add("highlatedBox");

            }
            else
            {
                document.getElementById(i).classList.remove("highlatedBox");
            }

        }
        
        if(counter == 5)
        {
            setTimeout(function(){
                let randamnumber = (Math.floor((Math.random()*10)))+1;
                randamNumber.textContent = `congratulation you got ${randamnumber} , you won ${giftsArray[randamnumber-1]} `;
                document.getElementById(intervelNumber).classList.remove("highlatedBox");
                document.getElementById(randamnumber).classList.add("winBox");
                clearInterval(setintervelId);
                gameCompletedSound.pause();
                gameCompletedSound.currentTime = 0
                gameCompletedSound.play();
                



            });
        }

        
    },1000);

   

});
giftsArray.forEach(function(value, index)
{
    let htmlElement = `<div class="gi" id="${index+1}"> ${index+1}: ${value}</div>`;
    //console.log(htmlElement);
    //console.log(htmlElement);
    lotteryParent.insertAdjacentHTML("beforeend", htmlElement);



});

