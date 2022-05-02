let toggleIsOn = false

themeSwitch = () => {
    let body = document.querySelector("body")
    let toggle = document.querySelector(".input-slider")
    let themeColor = body.style
    let toggleColor = toggle.style
    
    let darkTheme = () => {
        themeColor.backgroundColor = "var(--dark)";
        toggleColor.backgroundColor = "var(--light)";
        themeColor.color = "var(--light)";
    }

    let lightTheme = () => {
        themeColor.backgroundColor = "var(--light)";
        toggleColor.backgroundColor = "var(--dark)";
        themeColor.color = "var(--dark)";
    }

    if(toggleIsOn == false) {
        toggleIsOn = true
        console.log(`Dark theme active ${toggleIsOn}`)
    }else {
        toggleIsOn = false
        console.log(`Dark theme active ${toggleIsOn}`)
    }

    let active = toggleIsOn ?  darkTheme() : lightTheme();
}