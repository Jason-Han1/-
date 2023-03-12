option = {
     title: {
	        text: '2019年销售水量和主营业务收入对比',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '10%',
	    },
    backgroundColor: '#0f375f',
    grid: {
        top: "25%",
        bottom: "10%"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: ["销售水量", "主营业务"],
        top: "15%",
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: [
            "当年完成水量",
            "去年同期水量",
            "滚动目标值水量",
            "全年目标值水量",
            "当年完成金额",
            "去年同期金额",
            "滚动目标金额",
            "全年目标值",
            
        ],
        axisLine: {
            show: false //隐藏X轴轴线
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff" //X轴文字颜色
            }
        }
    },
    yAxis: [{
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: "#ebf8ac"
                }
            },
            
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            },
            axisLine: {show: false,
                lineStyle: {
                    color: '#FFFFFF'
                    }
            },
        }
    ],
    series: [{
            name: "销售水量",
            type: "line",
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABdUlEQVQ4jZXVz2oUQRDH8c82e9GFkIP/QCNr9J6T0Qgqgvo0+h7e42P4Ch4MiGhOOeS6u2oiQiKEQHLajR6mhvS0Dbv7gzrMr6u+08101fQ+vPipooRhxE0MMMMZjjGJuCgL+xXYEI+xUnnJasQDnOIrxmVSqx4e4XUFVtMKXkVNrwbcxMYCoFIbUYvLI69XYH08w0PcDu8Qu9jBtIAeYdSPXW4VsFW8wVrhr0c8wXucZGtbmKRIGBQ7q8FyreGt7kcd4H57PXI9nQNrdSdycw0TbhTmpsVV5l5PuFKYd5cAlrlXk8ptX0Kz0kg4L7wfSwAPi+fzhD+FubsEsMw9Spomz7WDgwVgB5Gba5Iw0kyRVlNsozqGMti2breciU65wBe8zBZP8A7PNc1/K/zfmgnzqYAJxqy96SPs6fbzFB8j5mkvGJ1p8w37CxSX2o9adHvxLz7jl+aY82biaYBGuVmb2GN81wyNe7jmcni0v4BxgP5rin+GyFAwgOYf5AAAAABJRU5ErkJggg==", //标记的图形为实心圆
            symbolSize: 17, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#ac41e3"
            },
            lineStyle: {
                color: "#ac41e3",
                width:3
            },
            areaStyle:{
                color: "rgba(5,140,255, 0)"
            },
            data: [4.2, 3.8, 4.8, 3.5, 15.9, 7.8, 3, 5]
        },
        {
            name: "销售水量",
            type: "line",
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABdklEQVQ4jZ3VsU5UQRTG8d+O28gaQoFQCGRdLeioBDHRDlteBJ7Ax8BH8CksN9FEqSxod1cFGsQYkiUULFjcuWF2mGR3+ZJTzDdn/nfu3DnnNoa76woKaMdYRgsjDPEHgxg3+cJmAdbGa8wXHrIQ4yUu8A39PKlWA1t4X4CVNI+duKZRAm5iYwpQro24Fnev3CnAmniHV3gWvRMcoovrDHqGXjPucjuDLWAPq5nfifEGH/EvmdvGIMSEVrazEizVKvaNf9QWXtTXI9XbCbBaKzE3VTtgKTM3Ta8892nA48xcmwGY584Fhds+g0a5EXCZeb9mAJ5k48uA88w8nAGY554FVZGn6uJ4CthxzE01COipukitaxzg9wTYgfFqGaL36MP64m0cdJLJK3yN/hPVTRipzuwzPrl/9l38bST9cMvDmgP8ULWysW7zHUcPgB3FtRivxVt8walqt5N64kUE9VKz1LH7+Kk60+dYdNc86l9AP4LuFcV/eE1Pa4/YIVUAAAAASUVORK5CYII=", //标记的图形为实心圆
            symbolSize: 17, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#f54f28"
            },
            lineStyle: {
                color: "#f54f28",
                width:3
            },
            areaStyle:{
                color: "rgba(5,140,255, 0)"
            },
            data: [3.2, 5.8, 7.8, 6.5, 11.9, 4.8, 6, 5]
        },
        {
            name: "销售水量",
            type: "line",
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABbElEQVQ4jZ3VzWoUURCG4WcOg6ADIQv/QCPj6D4roxHUjXo1ejXxMrwENwZcaFYusp0ZNREhBiSQLCRRF11NesoDM5MPatFfV73ndPep6t7vt5dUVDCMuIEBznCMn5hG/MmF/QpsiEdYqSyyGnEfR/iISU5q1cNDvKzAalrBi6jp1YAbWF8AlLUetTh/5FEF1sdTPMCt8Paxg22cJugBxv3Y5WaCreIV1pI/iniMN/jVubeJaYmEQdpZDdbVGl6b/agD3GuPR1dP5sBa3Y7croYF15O5YXHl3GsFl5N5Zwlgzr1SVE77EjrLRsFJ8r4uAdxP1ycFh8ncWQKYcw+Kpsm72sbeArC9yO1qWjDWTJFWp9jCtzmwLbPdcoxxL8bXCM9TUR/PNM1/M7wfmgnzPsHgXRcoCi8yHOBzLDQzbT5h9wKw3ajFbC/+xQd81+x23kw8CtC4a9Ym9gRfNO/1Lq46Hx7tL2ASoP+a4h+9FUwam/1ajAAAAABJRU5ErkJggg==", //标记的图形为实心圆
            symbolSize: 17, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#faac06"
            },
            lineStyle: {
                color: "#faac06",
                width:3
            },
            areaStyle:{
                color: "rgba(5,140,255, 0)"
            },
            data: [4.2, 1.8, 5.8, 14.5, 3.9, 12.8, 4, 8]
        },
        {
            name: "销售水量",
            type: "line",
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABdElEQVQ4jZXVPWsUURTG8d8O2+hCSOEbmMga7VMZjaA26qfR72BpH7+OhQERTZUi2O2umogQhRBIqt1oMWfIzPHC7j5winnuOf+5l7nnTG/t6xsFVRhG3MQAM5zhNyYRF7mwX4AN8QgrhZesRtzHKT5jnJMa9fAQLwuwklbwImp6JeAWNhcAZW1GLS6PvFGA9fEUD3A7vCPsYRfTBD3GqB+73E6wVbzCevI3Ih7jHU5aa9uYVJEwSDsrwdpax2vdjzrAveZ6tPVkDqzRWuS2NaxwI5lbFlfOvV7hSjLvLAHMuVcrhdu+hGbZqHCevO9LAI/S83mFP8ncWwKYc48rdZO3tYvDBWCHkdvWpMJIPUUaTbGDH3NgO7rdciY65QKf8Ly1eIK3eKZu/lvh/1JPmA8JJhiz5qaPsK/bz1O8j5in/WB0ps0XHCxQnHUQtej24l98xE/1MefNxNMAjdpmaWKP8U09NO7imsvh0fwCxgH6ryn+ATqzT9P6zpY0AAAAAElFTkSuQmCC", //标记的图形为实心圆
            symbolSize: 17, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#1cd780"
            },
            lineStyle: {
                color: "#1cd780",
                width:3
            },
            areaStyle:{
                color: "rgba(5,140,255, 0)"
            },
            data: [1.2, 2.8, 3.8, 4.5, 6.9, 5.8, 7, 5]
        },
        {
            name: "销售水量",
            type: "line",
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABdUlEQVQ4jZXVv2oUURTH8c8O2+hCSOE/0Mga7VMZjaA2aumT6HvYx1fwMSwMiGiqFGl3N5qIEIUQSKrdaDFnyMzxwu7+4BTzu+d8517mnjO91x8OFFRhGHETA8xwht+YRFzkwn4BNsRjrBReshrxAKf4inFOatTDI7wqwEpawcuo6ZWAm9hYAJS1EbW4PPJ6AdbHMzzE7fCOsIsdTBP0GKN+7HIrwVbxBmvJX494gvc4aa1tYVJFwiDtrARraw1vdT/qAPeb69HW0zmwRncit61hhRvJ3LS4cu71CleSeXcJYM69Winc9iU0y0aF8+R9XwJ4lJ7PK/xJ5u4SwJx7XKmbvK0dHC4AO4zctiYVRuop0miKbfyYA9vW7ZYz0SkX+IIXrcUTvMNzdfPfCv+XesJ8SjDBmDU3fYQ93X6e4mPEPO0FozNtvmF/geKs/ahFtxf/4jN+qo85byaeBmjUNksTe4wD9dC4h2suh0fzCxgH6L+m+AeftFA0itHzhwAAAABJRU5ErkJggg==", //标记的图形为实心圆
            symbolSize: 17, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#4ea5e1"
            },
            lineStyle: {
                color: "#4ea5e1",
                width:3
            },
            areaStyle:{
                color: "rgba(5,140,255, 0)"
            },
            data: [2.2, 3.8, 4.8, 5.5, 3.9, 6.8, 4, 6]
        }
    ]
};