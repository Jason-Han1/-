// var paperDataURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAyCAYAAACgRRKpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB6FJREFUeNrsnE9y2zYYxUmRkig7spVdpx3Hdqb7ZNeFO2PdoD1Cj9DeoEdKbmDPeNFNW7lu0y7tRZvsYqfjWhL/qPgggoIggABIQKQkwsOhE5sQCfzw3uNHJu5sNnOaZq29RttolwfAbxgwChO9nad//4C2C7S9Sfe3uzQobqNghdoJBdIw3R8qHnvNANcA1sBUGCaV9pYC7rYBbLvbgAFpaBgmWbujlO1NA9h2wQTbcdHOoih2ZujLa7WcFtoMtUsKuFEDWL3bkAHq2GTnT+OJkyTzsXRd1/G8FoYN9vBnQ+pGZ7f7BrDqYSLbq6IdxXGM96BKIlBgDP97mgj7aLXcDLa8fgqoGwFu1ABmvzwwLAuTTJmw/SFIfG/ZBmEMIwRiHCVOnCTSPkk/BDoD7YHJbvcNYOVgYmtNWo1cs0xJ8pQJDgXIfM9bscE4TrDyAWwETuEEpP0QSzWU365T0CpXtzoDdsJY3bmpjqfT0AlRKMfWhQBhFYkGLAwjpE6JIxsnAAz6YW0QjksQaBGGTq0fw/mt0kJvXQA7cezWmpYaqBJ73XmKREABQMAKARjZsOXZqU4/FvLbWgu9VQA24NzRGYEJJm6C1GmuJJ4w39C5Sj6x/H6IKiWxPHflwQv9wPEV5TeibgS4200DzGitSdX6VCZWR0nonAR98dQNgxInpey0BvnNeKHXJGDGYYLiJQwiqIjuHZ+uKsWpEsUYOHVAeOdm0k4rzm9vKYUbrRswY7UmcVYa48mR5SN2YgkoMlXCoHEmQ6cfAojni1VkAUmsrEplVddCfitU6FUFzDpMvDw1nkzFA5dz91dkYvP61MlJREV8waQWUSWRnVac35QeY/EAe83c0RmDCSzMRV+w2nlZhp1UyFNyJVpMaJ6VmlQ3HUBE9rdSpIUbhhJ2WnF+ExZ63U+f/v2h02mfeb7/JZp0a8rEK1ouVqeXu6LwhEZqA0eCuCyD6ExGngVmKpICJ5tUEbjFsmC+nRZRSsSC0UKv++7Pv676/f7ZQb/v7O/vm3p0wQ3sUEIoM/hsDpFNqKqV6t1R5ltgnJ6Xyt0kOT+RZelCQmcuVs1VrhGOC7qd0kIyV2N87j+7v938cUFXyQ8O+nh7hmBrt9vGVUz1mZ3nicsC7ISqTICqldLqFilaoEjddOxP5UamiJ3CubV9n+sKbH7rdHzu74rnE/UzW9QCASpmvC5XekOWiTdoQRA4z58PEGx7+PvSNRE0aHABbV+eiYjlTJ0oW5m+761M4txePWmox5ODVDTCdbIwF2Dysw4zqTzFxOc/TbjlC/p6ZbYM109/Bk+NuP3l2Cn+nDDhQtNKFwTdF3xm7sJLMmWSLmj4nel0+swdXd9coQ86k8EB3gw2enBwgKx0z8pdo4pqECv1Jbfe2lYqAJinmKoWmAexdilEougiOy1qe/P+UrubyfMlfPbT05MzHo/xHsHldLvde/fi8vKjM3MGQa/n9NDmuvIMBhOMrdRSbiOqAWqjEupVrVQFDFWAdS1fVpzVKal00WKHxaAyhi1XXpJYtrpZar/y8tXj4+MSUMuC1AGe7jBgURgOspPvBvMt6CrBto7cphrAdepjcXpnagpgnUCu+mA9FljRXq9bqmiKlSmZ5zhieUplJkqhYE+ajywYqRWOUSlYWQZzf/n1+qc4jr4KEYFAYRSF2YrrBkEGnGoznduKK5FefUwZ4Ja8rKJbBIV+QZVEi4LuC97776HFb8vqZEARmACkAPPRzVvMl+j3/fH8oCA9oWQOWhg603DqPNx/xAMKPwcb9f18hYITef/+g7XcRkJ9R6JEvFDPUwxsXchuiOXkATxf7TEuAMvKKnSIXla31bwF/eYpEhvIpUFc0+pIg3mnoaKszjk8PMQw+b7ev9VeKVOIPjicTtBkRXiAADQATvUh9Lpym+n6mJaVpiUBmZXy8lbRIJ7d0WlanQgogIlYXRGYqCLrBdkAsB/RN987Gu9kgY3CyUGA1Mlq68ptNupjOnd9vaCj/OhF/fVtJ81Mi2ymX+yOMqCgHwCIQAX7ElX7DKj9vWDpIXj2LPLm93ffoh3Z1vmPTa3nNtU7NNW3NvLKKnAMhPDSCyRVpUVRdVYYKAImXBsTwo0DtTKmvBOvEjbb9TZdK8X5TOEOkpQr3DSwF7E6+u6ubAOHgQVQEiZtoJQA48A2TGE7XidstnObqpUG3bZW3tSxOs7jlapbKaC0AWNgg1d4vqsCtnXkNtFbG2XqTjqPVypqdwxQtyY7L/xGa9Ww2c5txPZgeDptX/mY7E2CWbEgvulAGQOsTrDZzm1Cq8t/k2AngbICWJ1gs5Xbij5e2TWgrAPGwHaSggbAvariAovktjKPV3YdqLUCVjfYeLmt6JsEDVA1A6xusEFue/HiuM5Wt5FA1QKwusD28uXLBqhtB0wAG2znOwLYVgFVa8AY2AYUbN9sEWBbDdTGALYO2NYE2E4BtZGA2YLNEmA7DdTGA2YSttPT04nrut0GqAYwVdiGjsZrRkdHR3ftdlv3aQP9/zA0QO0KYBzgpO+0KQL2wCjUqMGmAUwJNgFgDVANYGZgQ4DdI8AGDVANYFba3/98+PqLzz+7ajCw1/4XYABXWBExzrUA+gAAAABJRU5ErkJggg==';
var paperDataURI = 'data:image/png;base64,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'
var option = {
    backgroundColor: "rgba(2, 18, 65, 0.5)",
    textStyle: {
        color: "#c0c3cd",
        fontSize: 14,
    },
    toolbox: {
        show: false,
        feature: {
            saveAsImage: {
                backgroundColor: "#031245",
            },
            restore: {},
        },
        iconStyle: {
            borderColor: "#c0c3cd",
        },
    },
    legend: {
        top: 10,
        itemWidth: 8,
        itemHeight: 8,
        icon: "circle",
        left: "center",
        padding: 0,
        textStyle: {
            color: "#c0c3cd",
            fontSize: 14,
            padding: [2, 0, 0, 0],
        },
    },
    color: [
        "#63caff",
        "#49beff",
        "#03387a",
        "#03387a",
        "#03387a",
        "#6c93ee",
        "#a9abff",
        "#f7a23f",
        "#27bae7",
        "#ff6d9d",
        "#cb79ff",
        "#f95b5a",
        "#ccaf27",
        "#38b99c",
        "#93d0ff",
        "#bd74e0",
        "#fd77da",
        "#dea700",
    ],
    grid: {
        containLabel: true,
        left: 10,
        right: 10,
        bottom: "10%",
        top: 30,
    },
    xAxis: {
        nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 12,
        },
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 12,
            interval: 0,
        },
        axisTick: {
            lineStyle: {
                color: "#384267",
                width: 1,
            },
            show: true,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "solid",
            },
            show: true,
        },
        data: [
            "1234\n地区1",
            "1234\n地区2",
            "1234\n地区3",
            "1234\n地区4",
            "1234\n地区2",
            "1234\n地区3",
            "1234\n地区4",
        ],
        type: "category",
    },
    yAxis: {
        nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, 0, 0],
            fontSize: 12,
        },
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14,
        },
        axisTick: {
            lineStyle: {
                color: "#384267",
                width: 1,
            },
            show: true,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#384267",
                type: "dashed",
            },
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "solid",
            },
            show: true,
        },
        name: "单位：万",
        splitNumber: 3,
        // boundaryGap:[0,1] //boundaryGap是坐标轴两端空白策略，数组内数值代表百分比
    },
    dataZoom: [{
            type: "slider",
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 135,
            bottom: 0, //距离底部的距离
            height: 18,
            handleStyle: {
                color: "#d3dee5",
            },
            textStyle: {
                color: "#fff",
                fontSize: "10px"
            },
        },
        // {
        //   type: "inside",
        //   xAxisIndex: [0],
        //   start: 1,
        //   end: 135,
        //   bottom: 0, //距离底部的距离
        //   height: 20,
        // },
    ],
    series: [{
            data: [200, 85, 112, 275, 305, 415, 741, 405],
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 30,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                            offset: 0,
                            color: "#1495F4",
                        },
                        {
                            offset: 0.5,
                            color: "#1495F4",
                        },
                        {
                            offset: 1,
                            color: "#09FCFF",
                        },
                    ],
                },
            },
            label: {
                show: true,
                position: "top",
                distance: 10,
                color: "#fff",
            },
        },
        {
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            type: "pictorialBar",
            barMaxWidth: "20",
            // symbol: "diamond",
            // symbol: 'image://' + paperDataURI,
            symbolOffset: [0, "50%"],
            symbolSize: [30, 15],
        },
        {
            data: [200, 85, 112, 275, 305, 415, 741, 405],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            // symbol: "diamond",
            symbol: 'image://' + paperDataURI,
            symbolOffset: [0, "-50%"],
            symbolSize: [30, 22],
            zlevel: 2,
        },
        {
            data: [741, 741, 741, 741, 741, 741, 741, 741],
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 30,
            barGap: "-100%",
            zlevel: -1,
        },
        {
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            type: "pictorialBar",
            barMaxWidth: "20",
            // symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [30, 15],
            zlevel: -2,
        },
        {
            data: [741, 741, 741, 741, 741, 741, 741, 741],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            // symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [30, 12],
            zlevel: -1,
        },
    ],
    tooltip: {
        trigger: "axis",
        show: false,
    },
};