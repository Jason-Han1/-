var uploadedDataURL4 = "/asset/get/s/data-1640861695588-a4Pdxudz6.png";

var uploadedDataURL3 = "/asset/get/s/data-1640861690832-zLCaC-qkn.png";

var uploadedDataURL2 = "/asset/get/s/data-1640861685441-zDfsY4LkX.png";

var uploadedDataURL1 = "/asset/get/s/data-1640861680329-6DDF6U314.png";

var uploadedDataURL0 = "/asset/get/s/data-1640861674592-z4TbaaYVQ.png";

var colors = ['#f00', '#00f', '#ff0', '#0ff', '#f0f'];
option = {
    backgroundColor:"#000",
    title: {
        text: '诉求总数        解决诉求数',
        subtext: '',
        textStyle:{
            color:"#fff",
            fontSize:14,
            position:[10,10]
        },
        padding:[70,0,0,800]
       
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '3%',
        right: '30%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        show: false, //不显示x轴相关信息
    },
    yAxis: [
        {
            show: true,
            type: 'category',
            data: ['html5', 'css', 'js', 'vue', 'node'],
            axisTick: { show: false }, //不显示刻度线
            axisLabel: {
                color: '#000',
                 rich: {
                      img0:{
                        width: 98,
                        height:52,
                       backgroundColor:{ image:uploadedDataURL0 },
                    },
                    img1:{
                        width: 98,
                        height:52,
                       backgroundColor:{ image:uploadedDataURL1 },
                      
                    },
                    img2:{
                         width: 98,
                        height:52,
                       backgroundColor:{ image:uploadedDataURL2 },

                    },
                    img3:{
                         width: 98,
                        height:52,
                       backgroundColor:{ image:uploadedDataURL3 },

                    },
                    img4:{
                        width: 98,
                        height:52,
                       backgroundColor:{ image:uploadedDataURL4 },

                    },
                    nt: {
                        color:"#fff",
                        align: 'left',
                        fontSize:17,
                        fontWeight:'400',
                    }
                },
                formatter: function(value, index) {
                

                     return  '{img'+index+'|}' +'\n   {nt|' + value + '}'

                }
            },
            axisLine: {
                show: false,
            },
            
            // inverse: true,
        },
       
    ],
    series: [
        {
            name: '条',
            z: 1,
            yAxisIndex: 0,
            type: 'bar',
            data: [70, 33, 60, 78, 69],
            showBackground:true,
            backgroundStyle:{
                color:"rgba(18, 69, 139, 1)",
                 borderRadius: 5,
            },
            // 修改第一条柱子的圆角
            itemStyle: {
                normal: {
                    barBorderRadius:5,
                    color: 'rgba(136, 99, 255, 1)',
                },
                // color 可以修改柱子的颜色
                // color:"orange"
            },
            // 柱子之间的间距
            barCategoryGap: 5,
            // 柱子之间的宽度
            barWidth: 20,
            // 显示柱子内的文字
            label: {
                show: true,
                position: [670, 10],
                formatter: '{c}',
                // offset: [550, 0],
              textStyle: {
                            //数值样式
                            color: '#9372FB',
                            fontSize: 35,
                            fontWeight: 600,
                        },
          
            },
        },
         {
            name: '条',
            z: 1,
            yAxisIndex: 0,
            type: 'bar',
            data: [50, 43, 70, 48, 39],
            showBackground:true,
            backgroundStyle:{
                color:"rgba(18, 69, 139, 1)",
                 borderRadius:5
            },
            // 修改第一条柱子的圆角
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: 'rgba(0, 255, 198, 1)',
                },
                // color 可以修改柱子的颜色
                // color:"orange"
            },
            // 柱子之间的间距
            barCategoryGap: 5,
            // 柱子之间的宽度
            barWidth: 20,
            // 显示柱子内的文字
            label: {
                show: true,
               
               show: true,
                position: [760, -15],
              textStyle: {
                            //数值样式
                            color: '#2BFFD0',
                            fontSize:35,
                            fontWeight: 600,
                        },
            },
        },
    ],
};
