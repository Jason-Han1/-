var xData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
var colors = ["#c43b33", "#016299", "#008e9c", "#a42380", "#d09900", "#f2c172", "#009d6a", "#8fc41e", "#009dbe", "#f9e701", "#d4a7a2", "#5d2d69", "#76A32E", "#c33a32", "#de82b1", "#e40177", "#008e9c", "#557284", "#e66021", "#004ea2"];
//第一个tab
var itemList = ['氯霉素', '四环素类', '地塞米松', '金刚烷胺', '磺胺类', '替米考星', '克伦特罗', '沙丁胺醇', '西马特罗', '黄曲霉B1', '氟苯尼考', '莱克多巴胺'];
//此处selectedList应该利用itemList做一个循环
var selectedList = {};
var selectedList1 = {};
var legendData = [];
for (var i = 0; i < itemList.length; i++) {
    selectedList[itemList[i] + "合格率"] = false;
    selectedList[itemList[i] + "合格数"] = true;
    selectedList1[itemList[i] + "合格率"] = false;
    selectedList1[itemList[i] + "合格数"] = false;
    legendData.push(itemList[i] + "合格率");
    legendData.push(itemList[i] + "不合格数")
}
var serieshHegeData = [
    ['99', '100', '90', '80', '100', '90', '80', '100', '90', '80', '100', '90', '80'],
    ['98', '100', '90', '80', '100', '90', '80', '100', '90', '80', '100', '90', '80'],
    ['88', '75', '67', '88', '75', '67', '88', '75', '67', '88', '75', '67', '82'],
    ['76', '95', '83', '76', '95', '83', '76', '95', '83', '76', '95', '83', '97'],
    ['70', '96', '45', '75', '75', '72', '92', '100', '78', '98', '72', '91', '80'],
    ['78', '75', '91', '88', '83', '67', '80', '65', '89', '86', '75', '77', '88'],
    ['86', '98', '100', '86', '85', '93', '86', '85', '73', '86', '85', '73', '87'],
    ['91', '75', '67', '88', '75', '67', '88', '75', '67', '88', '75', '67', '82'],
    ['81', '95', '83', '76', '95', '83', '76', '95', '83', '76', '95', '83', '97'],
    ['75', '96', '45', '75', '75', '72', '92', '100', '78', '98', '72', '91', '80'],
    ['95', '75', '91', '88', '83', '67', '80', '65', '89', '86', '75', '77', '88'],
    ['100', '98', '100', '86', '85', '93', '86', '85', '73', '86', '85', '73', '87']
]; //合格率
var serieshHegeNumData = [
    ['8', '10', '9', '8', '10', '9', '8', '10', '9', '8', '10', '9'],
    ['8', '10', '9', '8', '10', '9', '8', '10', '9', '8', '10', '9'],
    ['253', '452', '234', '253', '452', '234', '253', '452', '234', '253', '452', '234'],
    ['398', '287', '197', '398', '287', '197', '398', '287', '197', '398', '287', '197'],
    ['8', '10', '9', '8', '10', '9', '8', '10', '9', '8', '10', '9'],
    ['253', '452', '234', '253', '452', '234', '253', '452', '234', '253', '452', '234'],
    ['398', '287', '197', '398', '287', '197', '398', '287', '197', '398', '287', '197'],
    ['253', '452', '234', '253', '452', '234', '253', '452', '234', '253', '452', '234', ],
    ['398', '287', '197', '398', '287', '197', '398', '287', '197', '398', '287', '197'],
    ['8', '10', '9', '8', '10', '9', '8', '10', '9', '8', '10', '9'],
    ['253', '452', '234', '253', '452', '234', '253', '452', '234', '253', '452', '234'],
    ['398', '287', '197', '398', '287', '197', '398', '287', '197', '398', '287', '197']
]; //合格数
var serieshNoHegeNumData = [
    ['8', '100', '90', '80', '100', '90', '80', '100', '90', '80', '100', '90'],
    ['8', '100', '90', '80', '100', '90', '80', '100', '90', '80', '100', '90'],
    ['28', '85', '78', '28', '85', '78', '28', '85', '78', '28', '85', '78'],
    ['38', '28', '18', '38', '28', '18', '38', '28', '18', '38', '28', '18'],
    ['80', '100', '90', '80', '100', '90', '80', '100', '90', '80', '100', '90'],
    ['28', '25', '78', '28', '25', '78', '28', '25', '78', '28', '25', '78'],
    ['38', '28', '18', '38', '28', '18', '38', '28', '18', '38', '28', '18'],
    ['28', '15', '78', '28', '15', '78', '28', '15', '78', '28', '15', '78'],
    ['38', '28', '18', '38', '28', '18', '38', '28', '18', '38', '28', '18'],
    ['80', '100', '90', '80', '100', '90', '80', '100', '90', '80', '100', '90'],
    ['28', '85', '78', '28', '85', '78', '28', '85', '78', '28', '85', '78'],
    ['38', '28', '18', '38', '28', '18', '38', '28', '18', '38', '28', '18']

]; //不合格数
//第一个tab

var seriesData = []; //初始化seriesData
//处理数据  用于series
var seriesFun = function() {
    for (var i = 0; i <= itemList.length; i++) {
        a = {
            name: itemList[i] + '合格率',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: colors[i]
                }
            },
            data: serieshHegeData[i]
        }
        b = {
            name: itemList[i] + '合格数',
            type: 'bar',
            stack: itemList[i],
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#009d6a"
                }
            },
            data: serieshHegeNumData[i]
        }

        c = {
            name: itemList[i] + '不合格数',
            type: 'bar',
            stack: itemList[i],
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    color: colors[i]
                }
            },
            data: serieshNoHegeNumData[i]
        }

        seriesData.push(a)
        seriesData.push(b)
        seriesData.push(c)

    }
    return seriesData;
};
seriesFun();

var option = {
    title: {
        text: '某个类型不同项目【部门一】月报表',
        x: 'center',
        subtext: ''
    },
    color: colors,
    tooltip: {
        trigger: 'item',
        confine: true,
        formatter: function(params, ticket, callback) {
            var num = parseInt(params.seriesIndex / 3)
            return xData[params.dataIndex] + "【" + itemList[num] + "】" + "数据" + "<br />" + "<hr />" +
                itemList[num] + "合格率" + ":" + serieshHegeData[num][params.dataIndex] + "<br />" +
                itemList[num] + "合格数" + ":" + serieshHegeNumData[num][params.dataIndex] + "<br />" +
                itemList[num] + "不合格数" + ":" + serieshNoHegeNumData[num][params.dataIndex] + "<br />";
        }
    },
    grid: { //图标所占的空间位置
        top: '10',
        bottom: '240'
    },
    toolbox: { //提示框
        orient: 'vertical',
        itemGap: 15,
        right: '15',
        y: 'center',
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        selected: selectedList,
        // orient:"vertical",
        // x: 'left',
        y: 'bottom',
        data: legendData
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: xData
    }],
    yAxis: [{
        type: 'value',
        name: '合格率',
        min: 0,
        max: 100,
        position: 'left',
        axisLabel: {
            formatter: '{value} %'
        }
    }, {

        type: 'value',
        name: '不合格/合格数',
        min: 0,
        max: 500,
        position: 'right',

        axisLine: {
            lineStyle: {
                color: colors[1]
            }
        },
        axisLabel: {
            formatter: '{value} 个'
        }
    }, {
        show: false,
        type: 'value',
        name: '不合格/合格数',
        min: 0,
        max: 500,
        position: 'right',

        axisLine: {
            lineStyle: {
                color: colors[2]
            }
        },
        axisLabel: {
            formatter: '{value} 个'
        }
    }],
    dataZoom: [{ //滚动条
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 0,
        type: 'slider',
        start: 1,
        end: 20,
        handleSize: '110%',
        handleStyle: {
            color: '#9B4E4E'
        },
        bottom: "180"
    }],
    series: seriesData
};
//切换全部数据与不合格数据显示
// 		var pass = document.getElementById("pass");
// 		pass.onchange = function() {
// 			if(pass.selectedIndex == "0") {
// 				option.legend.selected = selectedList1;
// 				myChart.setOption(option);
// 			} else {
// 				option.legend.selected = selectedList;
// 				myChart.setOption(option);
// 			}
// 		}
//合格数、不合格数与合格率间的显示联动
myChart.on('legendselectchanged', function(params) {
        var str = params.name.substr(params.name.length - 4);
        if (str == "不合格数") {
            var item = params.name.split("不合格数");
            var Name = item[0] + "合格率";
            var NameNoHeGe = item[0] + "不合格数";
            var NameHeGe = item[0] + "合格数";
            //判断不合格数的显示与否，联动合格数的现实与否
            if (params.selected[NameNoHeGe] == true) {
                //与option联动
                // 	if (pass.selectedIndex == "0") {
                // 		params.selected[NameHeGe] = false;
                // 	} else{
                params.selected[NameHeGe] = true;
                // 	}

            } else {
                params.selected[NameHeGe] = false;
                params.selected[Name] = false;
            }

            option.legend.selected = params.selected;
            myChart.setOption(option);
        } else {
            var item = params.name.split("合格率");
            var NameNoHeGe = item[0] + "不合格数";
            var NameHeGe = item[0] + "合格数";
            //与option联动
            // if (pass.selectedIndex == "0") {
            // 	params.selected[NameNoHeGe] = true;
            // 	params.selected[NameHeGe] = false;
            // }else{
            params.selected[NameNoHeGe] = true;
            params.selected[NameHeGe] = true;
            // }

            option.legend.selected = params.selected;
            myChart.setOption(option);
        }
    })
    //
myChart.on("click", eConsole);

function eConsole(param) {
    // 			if (pass.selectedIndex == "0") {
    if (param.seriesName.substring(param.seriesName.length - 4) == '不合格数') {
        //留待查询时使用

    }
    // 			} 
}