
        var signal=prompt("")
        if(signal=="stop") {
            document.getElementById("bulb1").style.backgroundColor="red"
        }
        else if(signal=="caution") {
            document.getElementById("bulb2").style.backgroundColor="orange"
        }
        else if(signal=="start") {
            document.getElementById("bulb3").style.backgroundColor="green"
        }
