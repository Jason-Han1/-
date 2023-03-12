var list = [10, 10, 10, 25];
let sum = 0
list.forEach((item,index)=>{
    sum=sum+item
})
let series=[]
let obj={}
let chartList=[{name:'机械电子制造业',value:10},{name:'轻纺工业',value:10},{name:'资源加工工业',value:10},{name:'其他',value:25}]
let maxAngleNum = (sum * 360) / 270;
var namelist = ['机械电子制造业', '轻纺工业', '资源加工工业', '其他'];
let colorList = ['#BFA27C', '#328CD9', '#1FB4A7', '#424CB9'];
   chartList.forEach((item, index) => {
       //文字区域显示样式
        // obj['a'+index]={
        //         color:colorList[index],
        //         align: "center",
        //         padding:[0,0,0,5],
        //   }
          let data = list.map((ele, i) => {
            return 0;
          });
          let bgData = list.map((ele, i) => {
            return 0;
          });
          data[index] = item.value;
          bgData[index] = sum;
          series.push({
            type: "bar",
            barWidth: "50%",
            data: data,
            coordinateSystem: "polar",
            name: item.name,
            stack: "a",
            roundCap: true,
            itemStyle: {
             color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: colorList[index], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "red", // 100% 处的颜色
                  },
                ],
              },
              barBorderRadius: 5,
            },
          });
          series.push({
            type: "bar",
            barWidth: "50%", //和 radius: ["27%", "65%"],控制圆的大小，距离
            data: bgData,
            coordinateSystem: "polar",
            showSymble: true,
            barGap: "-100%",
            name: item.name + "1",
            z: 0,
            stack: "b",
            roundCap: true,
            itemStyle: {
              color: "#16294C",
              barBorderRadius: 5,
            },
          });
    });
option = {
    backgroundColor: 'black',
    angleAxis: {
        type: 'value',
        startAngle: 90,
        clockwise: false, // 逆时针
        max: maxAngleNum,
        min: 0,
        // max: 145,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    radiusAxis: {
        type: 'category',
        data: namelist,
        z: 100,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            // inside: true,
            align: 'left',
            verticalAlign: 'middle',
            margin: -20,
            fontSize: 5,
              formatter: function (value, index) {
                console.log(value);
                return '———' + value + ((list[index] * 100) / sum + '%');
            },
        //   rich: {
        //       ...obj,          
        //       b: {
        //         color: "#fff",
        //         align: "center",
        //         padding: [0, 5, 0, 5],
        //         fontSize: this.fontSize,
        //       },
        //       c: {
        //         color: "#fff",
        //         align: "center",
        //         fontSize: this.fontSize,
        //       },
        //       d: {
        //         color: "#fff",
        //         align: "center",
        //         padding: [0, 5, 0, 0],
        //         fontSize: this.fontSize,
        //       },
        //     },
            // formatter: (index) => {
            //   return `{a${index}|— — —}{b|${this.nameList[index]}}{d|-}{c|${(
            //     (this.valueList[index] * 100) /sum).toFixed(1)}%}`;
            // },
            textStyle: {
                color: '#96F5F6',
            },
            interval: 0,
        },
    },
    polar: {
        radius: ['27%', '65%'],
        center: ['50%', '50%'],
    },
    tooltip: {
        show: true,
    },
    series:series
    // series: [
    //     {
    //         type: 'bar',
    //         barWidth: '40%', //和 radius: ["27%", "65%"],控制圆的大小，距离
    //         data: [10, 0, 0, 0],//对应list数据
    //         coordinateSystem: 'polar',
    //         showSymble: true,
    //         barGap: '-100%',
    //         name: '其他',
    //         stack: 'a',
    //         roundCap: true,
    //         itemStyle: {
    //             color: '#BFA27C',
    //             barBorderRadius: 5,
    //         },
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '40%', //和 radius: ["27%", "65%"],控制圆的大小，距离
    //         data: [total, 0, 0, 0],
    //         coordinateSystem: 'polar',
    //         showSymble: true,

    //         name: '其他1',
    //         z: 0,
    //         stack: 'b',
    //         roundCap: true,
    //         itemStyle: {
    //             color: 'red',
    //             barBorderRadius: 5,
    //         },
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '40%',
    //         data: [0, 10, 0, 0],//对应list数据
    //         coordinateSystem: 'polar',
    //         name: '资源加工工业',
    //         stack: 'a',
    //         roundCap: true,
    //         itemStyle: {
    //             color: '#328CD9',
    //             barBorderRadius: 5,
    //         },
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '40%',
    //         z: 0,
    //         data: [0, total, 0, 0],
    //         coordinateSystem: 'polar',
    //         // showSymble: true,
    //         barGap: '-100%',
    //         name: '资源加工工业1',
    //         stack: 'b',
    //         roundCap: true,
    //         itemStyle: {
    //             color: 'red',
    //             barBorderRadius: 5,
    //         },
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '40%',
    //         data: [0, 0, 10, 0],//对应list数据
    //         coordinateSystem: 'polar',
    //         name: '轻纺工业',
    //         stack: 'a',
    //         roundCap: true,
    //         itemStyle: {
    //             color: '#1FB4A7',
    //             barBorderRadius: 5,
    //         },
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '40%',
    //         z: 0,
    //         data: [0, 0, total, 0],
    //         coordinateSystem: 'polar',
    //         // showSymble: true,
    //         barGap: '-100%',
    //         name: '轻纺工业1',
    //         stack: 'b',
    //         roundCap: true,
    //         itemStyle: {
    //             color: 'red',
    //             barBorderRadius: 5,
    //         },
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '40%',
    //         data: [0, 0, 0, 25],//对应list数据
    //         coordinateSystem: 'polar',
    //         name: '机械电子制造业',
    //         stack: 'a', //相同的stack值可以堆叠放置
    //         roundCap: true, //环形柱条两侧使用圆弧效果

    //         itemStyle: {
    //             color: '#424CB9',
    //             barBorderRadius: 0,
    //         },
    //     },
    //     {
    //         type: 'bar',
    //         barWidth: '40%',
    //         z: 0,
    //         data: [0, 0, 0, total],
    //         coordinateSystem: 'polar',
    //         // showSymble: true,
    //         barGap: '-100%',
    //         name: '机械电子制造业1',
    //         stack: 'b',
    //         roundCap: true,
    //         itemStyle: {
    //             color: 'red',
    //             barBorderRadius: 5,
    //         },
    //     },
    // ],
};
