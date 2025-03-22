/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container : {
        center : true,
      },
      fontFamily : {
        danaBlack : ["dana black","sans-serif"],
        danaBold : ["dana bold","sans-serif"],
        danaDemibold : ["dana demibold","sans-serif"],
        danaExtrabold : ["dana extrabold","sans-serif"],
        danaExtralight : ["dana extralight","sans-serif"],
        danaLight : ["dana light","sans-serif"],
        danaMedium : ["dana medium","sans-serif"],
        danaRegular : ["dana regular","sans-serif"],
        danaThin : ["dana thin","sans-serif"],
      },
      colors : {
        "darkBlue" : "#1f242dcc",
        "cWhite" : "#EBECF1",
        "darkBg" : "#1F242D",
        "lightBg" : "#323946",
        "iceBlue" : "#00EEFF",
        "midliner" : "#f8ffff08",
        "endliner" : "#ffffff00",
      },
      animation: {
        Skills90 : "Skills90 5s ease",
        Skills80 : "Skills80 5s ease",
        Skills75 : "Skills75 5s ease",
        OpenMenu : "OpenMenu 1s ease",
        CloseMenu : "CloseMenu 1s ease",
        OpenCover : "OpenCover 1s ease",
        CloseCover : "CloseCover 1s ease",
        utb : "utb 1s ease",
        btu : "btu 1s ease",
        rtl : "rtl 1s ease",
        ltr : "ltr 1s ease",
        onoff : "onoff 3s ease",
      },
      keyframes: {
        Skills90 : {
          "0%" : {width: "0%"},
          "100%" : {width: "90%"},
        },
        Skills80 : {
          "0%" : {width: "0%"},
          "100%" : {width: "80%"},
        },  
        Skills75 : {
          "0%" : {width: "0%"},
          "100%" : {width: "75%"},
        },
        OpenMenu:{
          "0%":{transform:"translateX(100%)"},
          "100%":{transform:"translateX(0%)"}
        },
        CloseMenu:{
          "0%":{transform:"translateX(0%)"},
          "100%":{transform:"translateX(100%)"}
        },
        OpenCover:{
          "0%":{transform:"translateX(-100%)"},
          "100%":{transform:"translateX(0%)"}
        },
        CloseCover:{
          "0%":{transform:"translateX(0%)"},
          "100%":{transform:"translateX(-100%)"}
        },
        onoff:{
          "0%" : {opacity : "0"},
          "100%" : {opacity : "100"},
        },
        utb:{
          "0%":{transform:"translateY(-200%)"},
          "100%":{transform:"translateY(0%)"}
        },
        btu:{
          "0%":{transform:"translateY(100%)"},
          "100%":{transform:"translateY(0%)"}
        },
        ltr:{
          "0%":{transform:"translateX(-100%)"},
          "100%":{transform:"translateX(0%)"}
        },
        rtl:{
          "0%":{transform:"translateX(200%)"},
          "100%":{transform:"translateX(0%)"},
        }
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}