/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        light: {
          DEFAULT: "#faf9ea",
          hover: "#f7f6e0",
          active: "#eeedbe",
        },
        normal: {
          DEFAULT: "#c9c52e",
          hover: "#b5b129",
          active: "#a19e25",
        },
        dark: {
          DEFAULT: "#979423",
          hover: "#79761c",
          active: "#5a5915",
        },
        darker: "#464510",
      },
      neutral: {
        1: "#ffffff",
        2: "#fdfdfd",
        3: "#f6f6f6",
        4: "#f1f1f1",
        5: "#dcdcdc",
        6: "#c5c5c5",
        7: "#979797",
        8: "#686868",
        9: "#565656",
        10: "#3a3a3a",
        11: "#333333",
        12: "#2a2a2a",
        13: "#171717",
      },
      blue: {
        light: {
          DEFAULT: "#e6f1fa",
          hover: "#d9eaf7",
          active: "#b0d3ef",
        },
        normal: {
          DEFAULT: "#0172cb",
          hover: "#0167b7",
          active: "#015ba2",
        },
        dark: {
          DEFAULT: "#015698",
          hover: "#01447a",
          active: "#00335b",
        },
        darker: "#002847",
      },
      green: {
        light: {
          DEFAULT: "#eaf6eb",
          hover: "#dff1e1",
          active: "#bce2c1",
        },
        normal: {
          DEFAULT: "#28a138",
          hover: "#249132",
          active: "#20812d",
        },
        dark: {
          DEFAULT: "#1e792a",
          hover: "#186122",
          active: "#124819",
        },
        darker: "#0e3814",
      },
      orange: {
        light: {
          DEFAULT: "#fdf3e6",
          hover: "#fcecda",
          active: "#f8d9b2",
        },
        normal: {
          DEFAULT: "#e98305",
          hover: "#d27605",
          active: "#ba6904",
        },
        dark: {
          DEFAULT: "#af6204",
          hover: "#8c4f03",
          active: "#693b02",
        },
        darker: "#522e02",
      },
      red: {
        light: {
          DEFAULT: "#fbe8e8",
          hover: "#F8DDDD",
          active: "#f1b9b9",
        },
        normal: {
          DEFAULT: "#d21c1c",
          hover: "#bd1919",
          active: "#a81616",
        },
        dark: {
          DEFAULT: "#9e1515",
          hover: "#7e1111",
          active: "#5e0d0d",
        },
        darker: "#4a0a0a",
      },
    },
    fontSize: {
      largeTitle: ["32px", "40px"],
      title1: ["26px", "32px"],
      title2: ["24px", "30px"],
      title3: ["18px", "22px"],
      headline: ["16px", "22px"],
      body: ["16px", "22px"],
      callout: ["15px", "20px"],
      subHeadline: ["14px", "20px"],
      footnote: ["13px", "17px"],
      caption1: ["12px", "16px"],
      caption2: ["11px", "14px"],
      caption3: ["10px", "14px"],
    },
    fontFamily: {
      jost: ["Jost_400Regular"],
      jostMedium: ["Jost_500Medium"],
      jostSemiBold: ["Jost_600SemiBold"],
      jostBold: ["Jost_700Bold"],
    },
    extend: {},
  },
  plugins: [],
};
