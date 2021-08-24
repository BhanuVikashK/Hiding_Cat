function switchOff(){
    document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("head1").textContent="Switched Off";
    document.getElementById("offSwitch").style.backgroundColor = "red";
    document.getElementById("onSwitch").style.backgroundColor = "grey";
}

function switchOn(){
    document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("head1").textContent="Switched On";
        document.getElementById("offSwitch").style.backgroundColor = "grey";
    document.getElementById("onSwitch").style.backgroundColor = "green";
    
}