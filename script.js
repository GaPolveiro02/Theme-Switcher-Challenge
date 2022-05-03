function app() {
    let toggle = document.querySelector(".input-slider")
    let input = document.querySelector(".slider")
    let body = document.querySelector("body")
    let toggleColor = toggle.style
    let themeColor = body.style
    let toggleIsOn = 0 
    let theme

    let darkTheme = () => {
        toggleColor.backgroundColor = "var(--light)";
        themeColor.backgroundColor = "var(--dark)";
        themeColor.color = "var(--light)";
        theme = "dark"
        input.value = 0
        localStorage.setItem("pageTheme", JSON.stringify(theme))
    }

    let lightTheme = () => {
        toggleColor.backgroundColor = "var(--dark)";
        themeColor.backgroundColor = "var(--light)";
        themeColor.color = "var(--dark)";
        theme = "light"
        input.value = 1
        localStorage.setItem("pageTheme", JSON.stringify(theme))
    }

    themeSwitch = () => {
        if(toggleIsOn == 0) {
            toggleIsOn = 1
        }else {
            toggleIsOn = 0
        }

        let active = toggleIsOn ?  darkTheme() : lightTheme();
    }

    let getTheme = JSON.parse(localStorage.getItem("pageTheme"))

    if(getTheme == "dark") {
        darkTheme()
        toggleIsOn = 1
    }
}

app()