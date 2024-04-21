let globalComputerMove=''; // this is how we create global variable
        let score= JSON.parse(localStorage.getItem('score')) ||
            {
                wins: 0,
                losses: 0,
                ties: 0
            };
        document.querySelector('.js-score').
            innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;  
        function pickComputerMove(){
            let ComputerMove='';
            const RandomNumber= Math.random();
            if (RandomNumber>=0 && RandomNumber<=1/3)
                ComputerMove='rock';
            else if (RandomNumber<=2/3)
                ComputerMove='paper';
            else
                ComputerMove='scissor';
            return ComputerMove;
        }
        function winner(UserMove){
            let result='';
            const ComputerMove=pickComputerMove();
            if (ComputerMove==UserMove)
                result='No-one. Tie.';
            else if (UserMove=='rock'){
                if (ComputerMove=='scissor')
                    result='You win.';
                else if (ComputerMove=='paper')
                    result='Computer wins.';
            }
            else if (UserMove=='paper'){
                if (ComputerMove=='rock')
                    result='You win.';
                else if (ComputerMove=='scissor')
                    result='Computer wins.';
            }
            else if (UserMove=='scissor'){
                if (ComputerMove=='paper')
                    result='You win.';
                else if (ComputerMove=='rock')
                    result='Computer wins.';
            }
            if (result=='You win.')
                score.wins++;
            else if (result=='Computer wins.')
                score.losses++;
            else 
                score.ties++;
            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('.js-score').
            innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            document.querySelector('.js-result').innerHTML=result;
            document.querySelector('.js-moves').innerHTML=`You 
                <img src="${UserMove}-emoji.png" class="move-icon">
                <img src="${ComputerMove}-emoji.png" class="move-icon">
                Computer `;
            }