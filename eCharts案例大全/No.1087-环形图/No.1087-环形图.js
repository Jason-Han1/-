let list = [
    {percentage: 3.2258, name: "医养健康", value: 1},
    {percentage: 0, name: "文化创意", value: 2},
    {percentage: 9.6774, name: "新一代信息技术产业", value: 3},
    {percentage: 38.7097, name: "新能源新材料", value: 12},
    {percentage: 3.2258, name: "现代海洋", value: 1},
    {percentage: 0, name: "现代金融服务", value: 0},
    {percentage: 3.2258, name: "现代高效农业", value: 1},
    {percentage: 0, name: "精品旅游", value: 5},
    {percentage: 9.6774, name: "高端化工", value: 3},
    {percentage: 32.2581, name: "高端装备产业", value: 10},
] 
var nameArray = list.map(item=>{
    return item.name + '\t\t\t' + item.value + '个' + '\t\t\t' + item.percentage + '%'
})
var img = '../../img/zhsq/radian.png'
var color=['#2ca1ff','#0adbfa','#febe13','#65e5dd','#7b2cff','#fd5151','#f071ff', '#85f67a','#0baefd','#fdcd0b','#0bfdab','#ff5353','#ff72cb','#8488ff',]
var data = [];
for (var i = 0; i < list.length; i++) {
    data.push({
        value: list[i].value,
        name: list[i].name + '\t\t\t' + list[i].value + '个' + '\t\t\t' + list[i].percentage + '%',
        itemStyle: {
            normal: {
                borderWidth: 2,
                shadowBlur: 5,
                borderRadius:5,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 1,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        }
    });
}
option = {
    backgroundColor:"#061740",
    color : color,
    tooltip: {
        show: false
    },
    title: {
        text: '签约项目分类',
        left: '18%',
        top: 'center',
        textStyle: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: "1.5rem",
        }
    },
    legend: [{
        icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        orient: 'vertical',
        data:nameArray,
        left: 'right',
        top: 'center',
        align: 'left',
        itemGap: 5,
        textStyle: {
            color: 'rgba(36, 173, 254, 1)',
            fontSize: "1rem",
        },
        //图例标记的图形高度
        itemHeight: 10,
        //图例标记的图形宽度
        itemWidth: 10,
    },
    ],
    toolbox: {
        show: false
    },
    series: [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['120%', '140%'],
        width:"55%",
        height:"55%",
        hoverAnimation: false,
        center: ['50%', '50%'],
        top:"center",
        itemStyle: {
            normal:{
                label: {
                    show:false
                }
            }
        },
        data: data
    }]
};
