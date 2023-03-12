option = {
    title: {
        text: '',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['叠翠园', '北岳北', '御东学府', '大同大学北', '富力城一期', '煤场院'], // right:'30'
    },
    // dataZoom: [{ //  TYPE: 'SLIDER', //  REALTIME: TRUE, //  //移动端展示方式 //  HANDLESIZE: '100%', //滑动条两侧的大小 START: 0, END: 50, // }],
    //      DATAZOOM: [{
    //      TYPE: 'INSIDE',
    //          START: 0,
    //       END: DATA.LENGTH > 3 ? 35 : 100
    //   }],
    dataZoom: [
        {
            type: 'slider',
            start: 0,
            end: 50,
        }, 
        // {  type: 'slider',  showDataShadow: false,
        //  handleIcon: 'path:M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z', 
        //   handleSize: '80%' ,
        //   start: 0, 
        // //   end: data.length > 3 ? 35 : 100 
        //  },
        {
            type: 'inside',
            orient: 'vertical',
            // start: 15,
            // end: 65,
        }, 
        // { //  type: 'inside', //  orient: 'vertical', // showDataShadow: false, //  // handleIcon: 'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z', //     // handleSize: '80%' // }
    ],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        height: '80%',
        containLabel: true,
    },
    toolbox: {
        show: true,
        feature: {
            // dataZoom: {},
            // dataView: {readOnly: false},
            magicType: { type: ['line', 'bar', 'pie'] }, // restore: {}, // saveAsImage: {}
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10月1日', '10月2日', '10月3日', '10月4日', '10月5日', '10月6日', '10月7日'],
        markPoint: {
            data: [
                {
                    name: '周最高',
                    value: 120,
                    xAxis: 4,
                    yAxis: 120,
                },
            ],
        },
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '叠翠园',
            type: 'line',
            smooth: true,
            data: [280, 192, 181, 174, 210, 280, 210],
            symbolSize: 1,
            markPoint: {
                data: [
                    {
                        name: '周最高',
                        value: 120,
                        xAxis: 4,
                        yAxis: 120,
                    },
                ],
            },
        },
        {
            name: '北岳北',
            type: 'line',
            smooth: true,
            data: [340, 382, 391, 334, 390, 390, 410],
            symbolSize: 1,
            markPoint: {
                data: [
                    {
                        name: '周最高',
                        value: 150,
                        xAxis: 2,
                        yAxis: 150,
                    },
                ],
            },
        },
        {
            name: '御东学府',
            type: 'line',
            smooth: true,
            data: [100, 132, 101, 154, 190, 130, 210],
            symbolSize: 1,
        },
        {
            name: '大同大学北',
            type: 'line',
            smooth: true,
            data: [240, 332, 301, 324, 380, 330, 320],
            symbolSize: 1,
        },
        {
            name: '富力城一期',
            type: 'line',
            smooth: true,
            data: [230, 312, 351, 321, 280, 350, 310],
            symbolSize: 1,
        },
        {
            name: '煤场院',
            type: 'line',
            smooth: true,
            data: [250, 382, 231, 344, 310, 70, 390],
            symbolSize: 1,
        },
    ],
};
