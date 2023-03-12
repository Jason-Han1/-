var uploadedDataURL = "/asset/get/s/data-1576045440071-YP5gXf_x.xlsx";
var 
option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: "axis",
        showDelay: 0,
        axisPointer: {
            type: "cross",
            lineStyle: {
                type: "dashed",
                width: 1
            }
        }
    },
    legend: {
        data: ["徐思默", "秦冠峰", "高岩7"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataZoom: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    xAxis: {
        type : 'category',
            boundaryGap : false,
            axisLine: {onZero: false},
            data : [
                '0','7/01', '7/02', '7/03', '7/04', '7/05', '7/06', '7/07', '7/08', '7/09', '7/10', '7/11', '7/12', '7/13', '7/14', '7/15', '7/16', '7/17', '7/18', '7/19', '7/20', '7/21', '7/22', '7/23', '7/24', '7/25', '7/26', '7/27', '7/28', '7/29', '7/30', '7/31', '8/01', '8/02', '8/03', '8/04', '8/05', '8/06', '8/07', '8/08', '8/09', '8/10', '8/11', '8/12', '8/13', '8/14', '8/15', '8/16', '8/17', '8/18', '8/19', '8/20', '8/21', '8/22', '8/23', '8/24', '8/25', '8/26', '8/27', '8/28', '8/29', '8/30', '8/31', '9/01', '9/02', '9/03', '9/04', '9/05', '9/06', '9/07', '9/08', '9/09', '9/10', '9/11', '9/12', '9/13', '9/14', '9/15', '9/16', '9/17', '9/18', '9/19', '9/20', '9/21', '9/22', '9/23', '9/24', '9/25', '9/26', '9/27', '9/28', '9/29', '9/30',
            ].map(function (str) {
                return str.replace(' ', '\n')
            })
    },
    yAxis: {
        type: "value",
            power: 1,
            splitNumber: 4,
            scale: true,
            position: "left",
            name: "工作内容难度",
            nameLocation: "end",
            nameTextStyle: {
                color: "rgb(20, 22, 22)",
                fontSize: 12
            },
            min: 0,
            max: 10
    },
    series: [{
           name: "徐思默",
            type: "scatter",
            symbol: "circle",
			type: "line",
            data: [[1, 2, 3], [2, 3, 3], [4, 1, 3], [5, 1, 3], [9, 3, 3], [10, 1, 3], [10, 2, 3], [14, 3, 3], [14, 2, 3], [15, 3, 3], [17, 1, 3], [19, 2, 3], [20, 3, 3], [27, 1, 3], [29, 2, 3], [29, 2, 3], [30, 3, 3], [32, 4, 3], [32, 4, 3], [36, 4, 3], [38, 3, 3], [39, 4, 3], [39, 3, 3], [40, 4, 3], [45, 3, 3], [46, 5, 3], [46, 5, 3], [48, 4, 3], [48, 4, 3], [49, 5, 3], [51, 4, 3], [53, 3, 3], [54, 4, 3], [54, 5, 3], [60, 4, 3], [60, 5, 3], [64, 4, 3], [66, 5, 3], [67, 6, 3], [68, 6, 3], [71, 5, 3], [72, 6, 3], [73, 4, 3], [73, 5, 3], [78, 4, 3], [78, 6, 3], [82, 5, 3], [82, 6, 3], [83, 4, 3], [83, 5, 3], [85, 6, 3], [87, 4, 3]],
            symbolSize: function anonymous(value) {
               var radius = (value[2] - 3) * 3 / 2 + 6;
               return Math.max(Math.round(radius), 1) || 1;
            }
    }],
    title: {
        text: "宝山组数据",
        x: "center",
        y: "bottom"
    },
    color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"],
    animation: true,
    animationEasing: "QuarticOut",
    animationDuration: 1374,
    calculable: true,
    calculableHolderColor: "#ccc",
    grid: {
        backgroundColor: "rgb(255, 255, 255)",
        borderWidth: 0,
        borderColor: "rgb(137, 137, 137)"
    }
};