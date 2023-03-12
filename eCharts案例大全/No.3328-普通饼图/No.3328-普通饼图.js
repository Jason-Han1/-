


//hex颜色转rgb颜色
function HexToRgb(str) {
    var r = /^\#?[0-9A-F]{6}$/;
    //test方法检查在字符串中是否存在一个模式，如果存在则返回true，否则返回false
    if (!r.test(str)) return console.log('输入错误的hex');
    //replace替换查找的到的字符串
    str = str.replace('#', '');
    //match得到查询数组
    var hxs = str.match(/../g);
    //alert('bf:'+hxs)
    for (var i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
    //alert(parseInt(80, 16))
    //console.log(hxs);
    return hxs;
}
//GRB颜色转Hex颜色
function RgbToHex(a, b, c) {
    var r = /^\d{1,3}$/;
    if (!r.test(a) || !r.test(b) || !r.test(c)) return console.log('输入错误的rgb颜色值');
    var hexs = [a.toString(16), b.toString(16), c.toString(16)];
    for (var i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = '0' + hexs[i];
    return '#' + hexs.join('');
}

//得到hex颜色值为color的加深颜色值，level为加深的程度，限0-1之间
function getDarkColor(color, level) {
    var r = /^\#?[0-9A-F]{6}$/;
    if (!r.test(color)) return console.log('输入错误的hex颜色值');
    var rgbc = HexToRgb(color);
    //floor 向下取整
    for (var i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level));
    return RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}
//得到hex颜色值为color的减淡颜色值，level为加深的程度，限0-1之间
function getLightColor(color, level) {
    var r = /^\#?[0-9A-F]{6}$/;
    if (!r.test(color)) return console.log('输入错误的hex颜色值');
    var rgbc = HexToRgb(color);
    for (var i = 0; i < 3; i++) rgbc[i] = Math.floor((255 - rgbc[i]) * level + rgbc[i]);
    return RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}

let echartData = [
    {
        name: 'A类',
        value: '3720',
    },
    {
        name: 'B类',
        value: '2920',
    },
    {
        name: 'C类',
        value: '2200',
    },
    {
        name: 'D类',
        value: '1420',
    },
    {
        name: 'E类',
        value: '1420',
    },
    {
        name: 'F类',
        value: '1420',
    },
    {
        name: 'G类',
        value: '1420',
    },
    {
        name: 'H类',
        value: '1420',
    },
];
        let pieCenter = ['30%', "50%"]
let shadowData = echartData.map((item) => {
    return {
        name: '',
        value: item.value,
    };
});
var nameArray = echartData.map((item) => {
    return item.name;
});
let color  = ["#3FB1E3","#6BE6C1","#626C91","#93B7E3","#C4EBAD","#96DEE8","#EDAFDA","#FE8463"]
let darkColor = echartData.map((item,i)=>{
    return getDarkColor(color[i],0.4)
})
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(20,50,125,.6)',
    },
    legend: [
        {
            icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
            orient: 'vertical',
            data: nameArray.slice(4, 8),
            left: '80%',
            top: 'center',
            itemWidth: 15,
            align: 'left',
            textStyle: {
                color: '#fff',
            },
            itemGap: 20,
        },
        {
            icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
            orient: 'vertical',
            data: nameArray.slice(0, 4),
            left: '70%',
            top: 'center',
            itemWidth: 15,
            align: 'left',
            textStyle: {
                color: '#fff',
            },
            itemGap: 20,
        },
    ],
    series: [
        {
            name: '阴影',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['38%', '45%'],
            center: pieCenter,
            
            color: darkColor,
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            emphasis: {
                scale: false,
            },
            tooltip: {
                show: false,
            },

            data: shadowData,
        },
        {
            name: '实际',
            type: 'pie',
            radius: ['43%', '55%'],
            center: pieCenter,
            color: color,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            data: echartData,
        },
    ],
};

myChart.on('legendselectchanged', (obj)=>{
    console.log(obj)
})

let len = 0
setInterval(()=>{
    
    if(len === echartData.length){
        len = 0
    }
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1,
    })
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: len,
    })
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: len,
    })
    len ++
}, 1000)

