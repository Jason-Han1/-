/*
重点代码：

series配置里面
left: "70%",
width:"31.5%",
// right: "0%",

let arr = e.data.data || e.data.children; tooltip时需要注意item的取值
*/

// convert #hex notation to rgb array
var parseColor = function (hexStr) {
    return hexStr.length === 4 ? hexStr.substr(1).split('')
              .map(function (s) {
                  return 0x11 * parseInt(s, 16);
              })
        : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(function (s) {
              return parseInt(s, 16);
          });
};
// zero-pad 1 digit to 2
var pad = function (s) {
    return s.length === 1 ? '0' + s : s;
};
// console.log(gradientColors('#00ff00', '#ff0000', 100));
// console.log(gradientColors('#000', '#fff', 100, 2.2));
// 两个颜色之间的渐变色值
var gradientColors = function (start, end, steps, gamma) {
    var i,j,ms,me,output = [],so = [];
    gamma = gamma || 1;
    var normalize = function (channel) {
        return Math.pow(channel / 255, gamma);
    };
    start = parseColor(start).map(normalize);
    end = parseColor(end).map(normalize);
    for (i = 0; i < steps; i++) {
        ms = i / (steps - 1);
        me = 1 - ms;
        for (j = 0; j < 3; j++) {
            so[j] = pad(Math.round(Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255).toString(16));
        }
        output.push('#' + so.join(''));
    }
    return output;
};

function getData(param){
    let {
        len = 100
    } = param;
    let arr = [];
    let ColorArr = gradientColors('#0BE6FF', '#0E58F8', len);
    let signIndex = 10+Math.ceil(Math.random()*20);
    console.log("52 signIndex",signIndex);
    for (let i = 0; i < len; i++) {
        let itemStyle = {
            // colorAlpha:[0.3, 0.5],// 渐变色,结合option的color一起使用
            // colorSaturation:  0.03+0.04*i,// 渐变色,结合option的color一起使用
            color: ColorArr[i],
            borderWidth: 0.5,
            borderColor: '#121E35',
        };
        i == signIndex && (itemStyle.color = '#FFF400'); // 设置特殊颜色
        arr.push({
            name: 'name' + i,
            value: [10, i],
            itemStyle,
            data: [
                { name: 'test1', num: '1.71', status: 'top', baseNum: 1.6 },
                { name: 'test2', num: '1.71', status: 'top', baseNum: 1.6 },
                { name: 'test3', num: '1.71', status: 'top', baseNum: 1.6 },
                { name: 'test4', num: '1.71', status: 'top', baseNum: 1.6 },
            ],
        });
    }
    return arr.reverse();
}

function initChart(){
    let arr = getData({
        //len:120+Math.ceil(Math.random()*200),
        len:810
    })
    arr = arr.reverse();
    let arr1 = arr.slice(0,270);
    let arr2 = arr.slice(270,540);
    let arr3 = arr.slice(540,810);
    // 分模块的数据显示是从右到左，所以要进行一下翻转
    // 在实际工作中自己注意数据顺序
    arr1 = arr1.reverse();
    arr2 = arr2.reverse();
    arr3 = arr3.reverse();
    
    let h = 'CMI';
    var option = {
        backgroundColor: '#121E35',
        leafDepth: false, // 是否可以下钻
        title:[
            {
                text: h + ">1.5",
                textStyle: {
                    color: "#fff",
                    fontSize: 15
                },
                left: "12%",
                bottom: -3
            }, 
            {
                text: "0.8\u2264" + h + "\u22641.5",
                textStyle: {
                    color: "#fff",
                    fontSize: 15
                },
                right: "41%",
                bottom: -3
            }, {
                text: h + "<0.8",
                textStyle: {
                    color: "#fff",
                    fontSize: 15
                },
                right: "13%",
                bottom: -3
            },
        ],
        tooltip: {
            backgroundColor: '#222',
            padding: 5,
            borderColor: '#222',
            borderRadius: 8,
            appendToBody: true, // position锁死了状态,且父元素不能overflow:hidden
            // position: (point) => [point[0] + 5, point[1] + 5],
            textStyle: {
                align: 'left',
            },
            formatter: function (e) {
                console.log(103,e);
                if (!e.data.name) return '';
                let html = '';
                let arr = e.data.data || e.data.children;
                arr.forEach((item) => {
                    html += `<div>${item.name}--${item.num}--${item.status}--${item.baseNum}</div>`;
                });
                return `
                        <div style="min-height:32px;line-height:32px;font-size: 16px;color:#fff;text-indent:9px;border-bottom: 1px solid #B3BFD2;">${e.data.name}</div>
                        ${html}
                      `;
            },
        },
        series: [
            {
                name:'treemap1',
                type: 'treemap',
                top: 0,
                bottom: 40,
                left: "0%",
                width:'31.5%',
                // right: "70%",
                roam: false, // 关闭平移和缩放
                nodeClick: false,
                breadcrumb: false, //不显示当前节点
                label: false,
                itemStyle: {
                    show: true,
                    borderWidth: 1,
                    borderColor: '#202C4C',
                },
                emphasis: {
                    itemStyle: {
                        color: '#FFF400',
                    },
                },
                data: arr1,
            },
            {
                name:'treemap2',
                type: 'treemap',
                top: 0,
                bottom: 40,
                left: "34.25%",
                width:'31.5%',
                // right: "0%",
                roam: false, // 关闭平移和缩放
                nodeClick: false,
                breadcrumb: false, //不显示当前节点
                label: false,
                itemStyle: {
                    show: true,
                    borderWidth: 1,
                    borderColor: '#202C4C',
                },
                emphasis: {
                    itemStyle: {
                        color: '#FFF400',
                    },
                },
                data: arr2,
            },
            {
                name:'treemap3',
                type: 'treemap',
                top: 0,
                bottom: 40,
                left: "70%",
                width:"31.5%",
                // right: "0%",
                roam: false, // 关闭平移和缩放title
                nodeClick: false,
                breadcrumb: false, //不显示当前节点
                label: false,
                itemStyle: {
                    show: true,
                    borderWidth: 1,
                    borderColor: '#202C4C',
                },
                emphasis: {
                    itemStyle: {
                        color: '#FFF400',
                    },
                },
                data: arr3,
            },
        ],
    };
    myChart.setOption(option,{
        notMerge:true,
        lazyUpdate:false
    })
}
initChart();

// setInterval(function() {
//     initChart();
// }, 2000);

// myChart.on("click",e => {
//   console.log(e);
//   signIndex = e.data.value[1];
// })
/*
还有一种方案是：
option.color = ['yellowgreen'] // 固定一种颜色
let itemStyle = {
    //colorAlpha:[0.3, 0.5],// 渐变色,结合option的color一起使用
    colorSaturation:  0.03+0.04*i,// 渐变色,结合option的color一起使用
    borderWidth: 0.5,
    borderColor: '#121E35',
}
*/
