option = {
 backgroundColor: '#0e1c47',
 color: ["#339c97",'#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97'],
            grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
        series: [
{
        type: 'pie',
        radius: ['15%', '50%'],
        roseType: 'radius',
        zlevel:10,
         itemStyle: {
              normal: {
                borderWidth:1,
                borderColor: "#ccc"
              }
            },
        label: {
            normal: {
                show: false,
            },

        },
        labelLine: {
            emphasis: {
                show: false
            }
        },
        data: [10,5,15,25,20,35,10,5,15,25,20,35,10,5,15,25,20,35]
    },
        ]
      };
