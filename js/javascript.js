$(document).ready(function(){

	var gameArr = [];
	var playerArr = [];
    var glow;
    var j=0;
    var count = 1;
    var on;
    var off;
    var strict;
    var interval;

	$("#on-div").click(function(){
		$("#on-div").css("opacity","1");
		$("#score-div").html("--");
		$("#off-div").css("opacity",".7");
		$("#start-div").css("opacity","1");
	});

	$("#off-div").click(function(){
		$("#off-div").css("opacity","1");
		$("#score-div").html("");
		$("#on-div").css("opacity",".7");
		$("#start-div").css("opacity",".7");
		$("#restrict-div").css("opacity",".7");
		location.reload();

	});

	$('#restrict-div').click(function () {
		$("#restrict-div").css("opacity","1");
            strict=1;
    });

	$("#start-div").click(function(){
		$("#score-div").text(count);
		start();
		

		
	});

	function start(){
		var randomValue = parseInt((Math.random()*3).toFixed());
		gameArr.push(randomValue);
	

		
		lighting();
		
		
	};

	function lighting(){
		
		if(count<=10){
			off = 400;
			on = 800;
		}else{
			off=250;
			on = 500;
		}
		
		interval = setInterval(function(){

			if(gameArr[j] === 0){
				glow = "glowBlue";
				$("#blue").addClass(glow);
				$("#audio1")[0].play();

				setTimeout(function(){
					$("#blue").removeClass(glow);
				},off);

			} else if (gameArr[j] == 1) {

                    glow = 'glowRed';
                    $('#red').addClass(glow);
                    $('#audio2')[0].play();
                 


                    setTimeout(function () {

                        $('#red').removeClass(glow);

                    }, off);

            } else if (gameArr[j] == 2) {

                    glow = 'glowYellow';
                    $('#yellow').addClass(glow);
                    $('#audio3')[0].play();
                   


                    setTimeout(function () {

                        $('#yellow').removeClass(glow);

                    }, off);

 			} else {

                    glow = 'glowGreen';
                    $('#green').addClass(glow);
                    $('#audio4')[0].play();
                    


                    setTimeout(function () {

                        $('#green').removeClass(glow);

                    }, off);
                }

                 j++;

                   if (j>=count) {
                       clearInterval(interval);
                   }
		},on);

		
	}	

	function checker(){
		
		if(gameArr.length === playerArr.length){

			if(gameArr.join() === playerArr.join()){

				if(count==20){
					setTimeout(function(){
						alert("Yeah You Got It!!!!");
						location.reload();
					}, 1000);
				}else{
					setTimeout(function(){
						$("#score-div").text(count+1);
						count++;
						playerArr = [];
						j=0;
						start();
					},1000);
				}
			}else{
				if(strict == 1){
					j = 0;
					count = 1;
					$("#score-div").text(count);
					playerArr = [];
					gameArr = [];
					start();
				}else{
					setTimeout(function(){
						$("#score-div").text("!!");
						playerArr = [];
						j=0;
						lighting();
					},1000);
				}
			}
		}

	};

	$("#blue").click(function(){
		$("#blue").addClass("glowBlue");
		$("#audio1")[0].play();

		playerArr.push(0);

		setTimeout(function(){
			$("#blue").removeClass("glowBlue");
		},250);

		checker();
	});

	$("#red").click(function(){
		$("#red").addClass("glowRed");
		$("#audio2")[0].play();

		playerArr.push(1);

		setTimeout(function(){
			$("#red").removeClass("glowRed");
		},250);

		checker();
	});

	$("#yellow").click(function(){
		$("#yellow").addClass("glowYellow");
		$("#audio3")[0].play();

		playerArr.push(2);

		setTimeout(function(){
			$("#yellow").removeClass("glowYellow");
		},250);

		checker();
	});

	$("#green").click(function(){
		$("#green").addClass("glowGreen");
		$("#audio4")[0].play();

		playerArr.push(3);

		setTimeout(function(){
			$("#green").removeClass("glowGreen");
		},250);

		checker();
	});
});