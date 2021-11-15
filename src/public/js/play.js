var checkIfSomeoneWon = function() {
    if ($('#columnOne').children().eq(5).hasClass('red') && $('#columnOne').children().eq(4).hasClass('red') && $('#columnOne').children().eq(3).hasClass('red') && $('#columnOne').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if($('#columnOne').children().eq(5).hasClass('black') && $('#columnOne').children().eq(4).hasClass('black') && $('#columnOne').children().eq(3).hasClass('black') && $('#columnOne').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnOne').children().eq(4).hasClass('red') && $('#columnOne').children().eq(3).hasClass('red') && $('#columnOne').children().eq(2).hasClass('red') && $('#columnOne').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(4).hasClass('black') && $('#columnOne').children().eq(3).hasClass('black') && $('#columnOne').children().eq(2).hasClass('black') && $('#columnOne').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnOne').children().eq(3).hasClass('red') && $('#columnOne').children().eq(2).hasClass('red') && $('#columnOne').children().eq(1).hasClass('red') && $('#columnOne').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(3).hasClass('black') && $('#columnOne').children().eq(2).hasClass('black') && $('#columnOne').children().eq(1).hasClass('black') && $('#columnOne').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnTwo').children().eq(5).hasClass('red') && $('#columnTwo').children().eq(4).hasClass('red') && $('#columnTwo').children().eq(3).hasClass('red') && $('#columnTwo').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if($('#columnTwo').children().eq(5).hasClass('black') && $('#columnTwo').children().eq(4).hasClass('black') && $('#columnTwo').children().eq(3).hasClass('black') && $('#columnTwo').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnTwo').children().eq(4).hasClass('red') && $('#columnTwo').children().eq(3).hasClass('red') && $('#columnTwo').children().eq(2).hasClass('red') && $('#columnTwo').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(4).hasClass('black') && $('#columnTwo').children().eq(3).hasClass('black') && $('#columnTwo').children().eq(2).hasClass('black') && $('#columnTwo').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnTwo').children().eq(3).hasClass('red') && $('#columnTwo').children().eq(2).hasClass('red') && $('#columnTwo').children().eq(1).hasClass('red') && $('#columnTwo').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(3).hasClass('black') && $('#columnTwo').children().eq(2).hasClass('black') && $('#columnTwo').children().eq(1).hasClass('black') && $('#columnTwo').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(5).hasClass('red') && $('#columnThree').children().eq(4).hasClass('red') && $('#columnThree').children().eq(3).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if($('#columnThree').children().eq(5).hasClass('black') && $('#columnThree').children().eq(4).hasClass('black') && $('#columnThree').children().eq(3).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(4).hasClass('red') && $('#columnThree').children().eq(3).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnThree').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnThree').children().eq(4).hasClass('black') && $('#columnThree').children().eq(3).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnThree').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(3).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnThree').children().eq(1).hasClass('red') && $('#columnThree').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnThree').children().eq(3).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnThree').children().eq(1).hasClass('black') && $('#columnThree').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(5).hasClass('red') && $('#columnFour').children().eq(4).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if($('#columnFour').children().eq(5).hasClass('black') && $('#columnFour').children().eq(4).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(4).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red') && $('#columnFour').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(4).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black') && $('#columnFour').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(3).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red') && $('#columnFour').children().eq(1).hasClass('red') && $('#columnFour').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(3).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black') && $('#columnFour').children().eq(1).hasClass('black') && $('#columnFour').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFive').children().eq(5).hasClass('red') && $('#columnFive').children().eq(4).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if($('#columnFive').children().eq(5).hasClass('black') && $('#columnFive').children().eq(4).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFive').children().eq(4).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red') && $('#columnFive').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFive').children().eq(4).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black') && $('#columnFive').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFive').children().eq(3).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red') && $('#columnFive').children().eq(1).hasClass('red') && $('#columnFive').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFive').children().eq(3).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black') && $('#columnFive').children().eq(1).hasClass('black') && $('#columnFive').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnSix').children().eq(5).hasClass('red') && $('#columnSix').children().eq(4).hasClass('red') && $('#columnSix').children().eq(3).hasClass('red') && $('#columnSix').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if($('#columnSix').children().eq(5).hasClass('black') && $('#columnSix').children().eq(4).hasClass('black') && $('#columnSix').children().eq(3).hasClass('black') && $('#columnSix').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnSix').children().eq(4).hasClass('red') && $('#columnSix').children().eq(3).hasClass('red') && $('#columnSix').children().eq(2).hasClass('red') && $('#columnSix').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnSix').children().eq(4).hasClass('black') && $('#columnSix').children().eq(3).hasClass('black') && $('#columnSix').children().eq(2).hasClass('black') && $('#columnSix').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnSix').children().eq(3).hasClass('red') && $('#columnSix').children().eq(2).hasClass('red') && $('#columnSix').children().eq(1).hasClass('red') && $('#columnSix').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnSix').children().eq(3).hasClass('black') && $('#columnSix').children().eq(2).hasClass('black') && $('#columnSix').children().eq(1).hasClass('black') && $('#columnSix').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnSeven').children().eq(5).hasClass('red') && $('#columnSeven').children().eq(4).hasClass('red') && $('#columnSeven').children().eq(3).hasClass('red') && $('#columnSeven').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if($('#columnSeven').children().eq(5).hasClass('black') && $('#columnSeven').children().eq(4).hasClass('black') && $('#columnSeven').children().eq(3).hasClass('black') && $('#columnSeven').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnSeven').children().eq(4).hasClass('red') && $('#columnSeven').children().eq(3).hasClass('red') && $('#columnSeven').children().eq(2).hasClass('red') && $('#columnSeven').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnSeven').children().eq(4).hasClass('black') && $('#columnSeven').children().eq(3).hasClass('black') && $('#columnSeven').children().eq(2).hasClass('black') && $('#columnSeven').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnSeven').children().eq(3).hasClass('red') && $('#columnSeven').children().eq(2).hasClass('red') && $('#columnSeven').children().eq(1).hasClass('red') && $('#columnSeven').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnSeven').children().eq(3).hasClass('black') && $('#columnSeven').children().eq(2).hasClass('black') && $('#columnSeven').children().eq(1).hasClass('black') && $('#columnSeven').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnOne').children().eq(5).hasClass('red') && $('#columnTwo').children().eq(5).hasClass('red') && $('#columnThree').children().eq(5).hasClass('red') && $('#columnFour').children().eq(5).hasClass('red')) {
        alert('winner red')	
    } else if ($('#columnOne').children().eq(5).hasClass('black') && $('#columnTwo').children().eq(5).hasClass('black') && $('#columnThree').children().eq(5).hasClass('black') && $('#columnFour').children().eq(5).hasClass('black')) {
        alert('winner black')	
    } else if ($('#columnTwo').children().eq(5).hasClass('red') && $('#columnThree').children().eq(5).hasClass('red') && $('#columnFour').children().eq(5).hasClass('red') && $('#columnFive').children().eq(5).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(5).hasClass('black') && $('#columnThree').children().eq(5).hasClass('black') && $('#columnFour').children().eq(5).hasClass('black') && $('#columnFive').children().eq(5).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(5).hasClass('black') && $('#columnFour').children().eq(5).hasClass('black') && $('#columnFive').children().eq(5).hasClass('black') && $('#columnSix').children().eq(5).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(5).hasClass('red') && $('#columnFour').children().eq(5).hasClass('red') && $('#columnFive').children().eq(5).hasClass('red') && $('#columnSix').children().eq(5).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(5).hasClass('black') && $('#columnFive').children().eq(5).hasClass('black') && $('#columnSix').children().eq(5).hasClass('black') && $('#columnSeven').children().eq(5).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(5).hasClass('red') && $('#columnFive').children().eq(5).hasClass('red') && $('#columnSix').children().eq(5).hasClass('red') && $('#columnSeven').children().eq(5).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(4).hasClass('red') && $('#columnTwo').children().eq(4).hasClass('red') && $('#columnThree').children().eq(4).hasClass('red') && $('#columnFour').children().eq(4).hasClass('red')) {
        alert('winner red')	
    } else if ($('#columnOne').children().eq(4).hasClass('black') && $('#columnTwo').children().eq(4).hasClass('black') && $('#columnThree').children().eq(4).hasClass('black') && $('#columnFour').children().eq(4).hasClass('black')) {
        alert('winner black')	
    } else if ($('#columnTwo').children().eq(4).hasClass('red') && $('#columnThree').children().eq(4).hasClass('red') && $('#columnFour').children().eq(4).hasClass('red') && $('#columnFive').children().eq(4).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(4).hasClass('black') && $('#columnThree').children().eq(4).hasClass('black') && $('#columnFour').children().eq(4).hasClass('black') && $('#columnFive').children().eq(4).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(4).hasClass('black') && $('#columnFour').children().eq(4).hasClass('black') && $('#columnFive').children().eq(4).hasClass('black') && $('#columnSix').children().eq(4).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(4).hasClass('red') && $('#columnFour').children().eq(4).hasClass('red') && $('#columnFive').children().eq(4).hasClass('red') && $('#columnSix').children().eq(4).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(4).hasClass('black') && $('#columnFive').children().eq(4).hasClass('black') && $('#columnSix').children().eq(4).hasClass('black') && $('#columnSeven').children().eq(4).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(4).hasClass('red') && $('#columnFive').children().eq(4).hasClass('red') && $('#columnSix').children().eq(4).hasClass('red') && $('#columnSeven').children().eq(4).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(3).hasClass('red') && $('#columnTwo').children().eq(3).hasClass('red') && $('#columnThree').children().eq(3).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red')) {
        alert('winner red')	
    } else if ($('#columnOne').children().eq(3).hasClass('black') && $('#columnTwo').children().eq(3).hasClass('black') && $('#columnThree').children().eq(3).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black')) {
        alert('winner black')	
    } else if ($('#columnTwo').children().eq(3).hasClass('red') && $('#columnThree').children().eq(3).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(3).hasClass('black') && $('#columnThree').children().eq(3).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(3).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black') && $('#columnSix').children().eq(3).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(3).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red') && $('#columnSix').children().eq(4).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(3).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black') && $('#columnSix').children().eq(3).hasClass('black') && $('#columnSeven').children().eq(3).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(3).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red') && $('#columnSix').children().eq(3).hasClass('red') && $('#columnSeven').children().eq(3).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(2).hasClass('red') && $('#columnTwo').children().eq(2).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red')) {
        alert('winner red')	
    } else if ($('#columnOne').children().eq(2).hasClass('black') && $('#columnTwo').children().eq(2).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black')) {
        alert('winner black')	
    } else if ($('#columnTwo').children().eq(2).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(2).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black') && $('#columnSix').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red') && $('#columnSix').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(2).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black') && $('#columnSix').children().eq(2).hasClass('black') && $('#columnSeven').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(2).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red') && $('#columnSix').children().eq(2).hasClass('red') && $('#columnSeven').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(1).hasClass('red') && $('#columnTwo').children().eq(1).hasClass('red') && $('#columnThree').children().eq(1).hasClass('red') && $('#columnFour').children().eq(1).hasClass('red')) {
        alert('winner red')	
    } else if ($('#columnOne').children().eq(1).hasClass('black') && $('#columnTwo').children().eq(1).hasClass('black') && $('#columnThree').children().eq(1).hasClass('black') && $('#columnFour').children().eq(1).hasClass('black')) {
        alert('winner black')	
    } else if ($('#columnTwo').children().eq(1).hasClass('red') && $('#columnThree').children().eq(1).hasClass('red') && $('#columnFour').children().eq(1).hasClass('red') && $('#columnFive').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(1).hasClass('black') && $('#columnThree').children().eq(1).hasClass('black') && $('#columnFour').children().eq(1).hasClass('black') && $('#columnFive').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(1).hasClass('black') && $('#columnFour').children().eq(1).hasClass('black') && $('#columnFive').children().eq(1).hasClass('black') && $('#columnSix').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(1).hasClass('red') && $('#columnFour').children().eq(1).hasClass('red') && $('#columnFive').children().eq(1).hasClass('red') && $('#columnSix').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(1).hasClass('black') && $('#columnFive').children().eq(1).hasClass('black') && $('#columnSix').children().eq(1).hasClass('black') && $('#columnSeven').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(1).hasClass('red') && $('#columnFive').children().eq(1).hasClass('red') && $('#columnSix').children().eq(1).hasClass('red') && $('#columnSeven').children().eq(1).hasClass('red')) {
        alert('winner red')
    }else if ($('#columnOne').children().eq(0).hasClass('red') && $('#columnTwo').children().eq(0).hasClass('red') && $('#columnThree').children().eq(0).hasClass('red') && $('#columnFour').children().eq(0).hasClass('red')) {
        alert('winner red')	
    } else if ($('#columnOne').children().eq(0).hasClass('black') && $('#columnTwo').children().eq(0).hasClass('black') && $('#columnThree').children().eq(0).hasClass('black') && $('#columnFour').children().eq(0).hasClass('black')) {
        alert('winner black')	
    } else if ($('#columnTwo').children().eq(0).hasClass('red') && $('#columnThree').children().eq(0).hasClass('red') && $('#columnFour').children().eq(0).hasClass('red') && $('#columnFive').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(0).hasClass('black') && $('#columnThree').children().eq(0).hasClass('black') && $('#columnFour').children().eq(0).hasClass('black') && $('#columnFive').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(0).hasClass('black') && $('#columnFour').children().eq(0).hasClass('black') && $('#columnFive').children().eq(0).hasClass('black') && $('#columnSix').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(0).hasClass('red') && $('#columnFour').children().eq(0).hasClass('red') && $('#columnFive').children().eq(0).hasClass('red') && $('#columnSix').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(0).hasClass('black') && $('#columnFive').children().eq(0).hasClass('black') && $('#columnSix').children().eq(0).hasClass('black') && $('#columnSeven').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(0).hasClass('red') && $('#columnFive').children().eq(0).hasClass('red') && $('#columnSix').children().eq(0).hasClass('red') && $('#columnSeven').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(3).hasClass('black') && $('#columnTwo').children().eq(2).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnOne').children().eq(3).hasClass('red') && $('#columnTwo').children().eq(2).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(4).hasClass('red') && $('#columnTwo').children().eq(3).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(4).hasClass('black') && $('#columnTwo').children().eq(3).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnTwo').children().eq(3).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(1).hasClass('black') && $('#columnFive').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnTwo').children().eq(3).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(1).hasClass('red') && $('#columnFive').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(5).hasClass('red') && $('#columnTwo').children().eq(4).hasClass('red') && $('#columnThree').children().eq(3).hasClass('red') && $('#columnTwo').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(5).hasClass('black') && $('#columnTwo').children().eq(4).hasClass('black') && $('#columnThree').children().eq(3).hasClass('black') && $('#columnTwo').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnTwo').children().eq(4).hasClass('black') && $('#columnThree').children().eq(3).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black') && $('#columnFive').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnTwo').children().eq(4).hasClass('red') && $('#columnThree').children().eq(3).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red') && $('#columnFive').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnThree').children().eq(3).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black') && $('#columnFive').children().eq(1).hasClass('black') && $('#columnSix').children().eq(0).hasClass('black')) {
        alert('winner black')
    }  else if ($('#columnThree').children().eq(3).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red') && $('#columnFive').children().eq(1).hasClass('red') && $('#columnSix').children().eq(0).hasClass('red')) {
        alert('winner red')
    }  else if ($('#columnTwo').children().eq(5).hasClass('red') && $('#columnThree').children().eq(4).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(5).hasClass('black') && $('#columnThree').children().eq(4).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(4).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black') && $('#columnSix').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(4).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red') && $('#columnSix').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(3).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red') && $('#columnSix').children().eq(1).hasClass('red') && $('#columnSeven').children().eq(0).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(3).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black') && $('#columnSix').children().eq(1).hasClass('black') && $('#columnSeven').children().eq(0).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(5).hasClass('black') && $('#columnFour').children().eq(4).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black') && $('#columnSix').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(5).hasClass('red') && $('#columnFour').children().eq(4).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red') && $('#columnSix').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(4).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red') && $('#columnSix').children().eq(2).hasClass('red') && $('#columnSeven').children().eq(1).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(4).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black') && $('#columnSix').children().eq(2).hasClass('black') && $('#columnSeven').children().eq(1).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(5).hasClass('black') && $('#columnFive').children().eq(4).hasClass('black') && $('#columnSix').children().eq(3).hasClass('black') && $('#columnSeven').children().eq(2).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(5).hasClass('red') && $('#columnFive').children().eq(4).hasClass('red') && $('#columnSix').children().eq(3).hasClass('red') && $('#columnSeven').children().eq(2).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(2).hasClass('red') && $('#columnTwo').children().eq(3).hasClass('red') && $('#columnThree').children().eq(4).hasClass('red') && $('#columnFour').children().eq(5).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnOne').children().eq(2).hasClass('black') && $('#columnTwo').children().eq(3).hasClass('black') && $('#columnThree').children().eq(4).hasClass('black') && $('#columnFour').children().eq(5).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnOne').children().eq(1).hasClass('black') && $('#columnTwo').children().eq(2).hasClass('black') && $('#columnThree').children().eq(3).hasClass('black') && $('#columnFour').children().eq(4).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnOne').children().eq(1).hasClass('red') && $('#columnTwo').children().eq(2).hasClass('red') && $('#columnThree').children().eq(3).hasClass('red') && $('#columnFour').children().eq(4).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(2).hasClass('red') && $('#columnThree').children().eq(3).hasClass('red') && $('#columnFour').children().eq(4).hasClass('red') && $('#columnFive').children().eq(5).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(2).hasClass('black') && $('#columnThree').children().eq(3).hasClass('black') && $('#columnFour').children().eq(4).hasClass('black') && $('#columnFive').children().eq(5).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnOne').children().eq(0).hasClass('black') && $('#columnTwo').children().eq(1).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnOne').children().eq(0).hasClass('red') && $('#columnTwo').children().eq(1).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(1).hasClass('red') && $('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red') && $('#columnFive').children().eq(4).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(1).hasClass('black') && $('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black') && $('#columnFive').children().eq(4).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(2).hasClass('black') && $('#columnFour').children().eq(3).hasClass('black') && $('#columnFive').children().eq(4).hasClass('black') && $('#columnSix').children().eq(5).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(2).hasClass('red') && $('#columnFour').children().eq(3).hasClass('red') && $('#columnFive').children().eq(4).hasClass('red') && $('#columnSix').children().eq(5).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(0).hasClass('red') && $('#columnThree').children().eq(1).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnTwo').children().eq(0).hasClass('black') && $('#columnThree').children().eq(1).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(1).hasClass('black') && $('#columnFour').children().eq(2).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black') && $('#columnSix').children().eq(4).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(1).hasClass('red') && $('#columnFour').children().eq(2).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red') && $('#columnSix').children().eq(4).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(2).hasClass('red') && $('#columnFive').children().eq(3).hasClass('red') && $('#columnSix').children().eq(4).hasClass('red') && $('#columnSeven').children().eq(5).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(2).hasClass('black') && $('#columnFive').children().eq(3).hasClass('black') && $('#columnSix').children().eq(4).hasClass('black') && $('#columnSeven').children().eq(5).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(0).hasClass('black') && $('#columnFour').children().eq(1).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black') && $('#columnSix').children().eq(3).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnThree').children().eq(0).hasClass('red') && $('#columnFour').children().eq(1).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red') && $('#columnSix').children().eq(3).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(1).hasClass('red') && $('#columnFive').children().eq(2).hasClass('red') && $('#columnSix').children().eq(3).hasClass('red') && $('#columnSeven').children().eq(4).hasClass('red')) {
        alert('winner red')
    } else if ($('#columnFour').children().eq(1).hasClass('black') && $('#columnFive').children().eq(2).hasClass('black') && $('#columnSix').children().eq(3).hasClass('black') && $('#columnSeven').children().eq(4).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(0).hasClass('black') && $('#columnFive').children().eq(1).hasClass('black') && $('#columnSix').children().eq(2).hasClass('black') && $('#columnSeven').children().eq(3).hasClass('black')) {
        alert('winner black')
    } else if ($('#columnFour').children().eq(0).hasClass('red') && $('#columnFive').children().eq(1).hasClass('red') && $('#columnSix').children().eq(2).hasClass('red') && $('#columnSeven').children().eq(3).hasClass('red')) {
        alert('winner red')
    }
}