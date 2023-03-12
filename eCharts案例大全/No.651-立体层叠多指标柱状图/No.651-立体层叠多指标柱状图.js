
      const xData = ['监狱1', '监狱2', '监狱3', '监狱4', '监狱5', '监狱6']
      // const genderMan = [0, 0, 0, 0, 0, 0];
      // const genderWoman = [0, 0, 0, 0, 0, 0];
      const genderMan = [4030, 4905, 3500, 3568, 3689, 4587];
      const genderWoman = [4500, 3805, 4000, 3568, 4689, 4000];
      const jobZhengTing = [1030, 905, 1500, 568, 689, 2587];
      const jobFuTing = [1030, 905, 1500, 568, 689, 2587];
      const jobZhengXian = [1030, 905, 1500, 568, 689, 2587];
      const jobFuXian = [1030, 905, 1500, 1568, 2689, 2587];
      const jobZhengXiang = [1030, 2905, 1500, 568, 689, 2587];
      const jobFuXiang = [3030, 3905, 1500, 2568, 3689, 2587];
      const jobKeYuan = [3030, 2905, 2500, 2568, 3689, 2587];
      const jobBanShiYuan = [1200, 1300, 1400, 1568, 1689, 1787];
      const age35 = [3200, 3300, 3400, 3568, 3689, 3787];
      const age45 = [4200, 4300, 4400, 4568, 4689, 4787];
      const age55 = [5200, 5300, 5400, 5568, 5689, 5787];
      const age56 = [4200, 4300, 4400, 4568, 4689, 4787];
      // const age35 = [0, 0, 0, 0, 0, 0];
      // const age45 = [0, 0, 0, 0, 0, 0];
      // const age55 = [0, 0, 0, 0, 0, 0];
      // const age56 = [0, 0, 0, 0, 0, 0];
      // -----------------------------华丽分割线  计算行不圆柱体顶部位置------------------------------
      const genderWomanTop = []
      genderWoman.forEach((item, index) => {
        genderWomanTop.push(item + genderMan[index])
      })
      // -----------------------------华丽分割线  计算职务圆柱体顶部位置------------------------------=
      const jobKeYuanTop = []
      jobKeYuan.forEach((item, index) => {
        jobKeYuanTop.push(item + jobBanShiYuan[index])
      })
      const jobFuXiangTop = []
      jobFuXiang.forEach((item, index) => {
        jobFuXiangTop.push(item + jobKeYuanTop[index])
      })
      const jobZhengXiangTop = []
      jobZhengXiang.forEach((item, index) => {
        jobZhengXiangTop.push(item + jobFuXiangTop[index])
      })
      const jobFuXianTop = []
      jobFuXian.forEach((item, index) => {
        jobFuXianTop.push(item + jobZhengXiangTop[index])
      })
      const jobZhengXianTop = []
      jobZhengXian.forEach((item, index) => {
        jobZhengXianTop.push(item + jobFuXianTop[index])
      })
      const jobFuTingTop = []
      jobFuTing.forEach((item, index) => {
        jobFuTingTop.push(item + jobZhengXianTop[index])
      })
      const jobZhengTingTop = []
      jobZhengTing.forEach((item, index) => {
        jobZhengTingTop.push(item + jobFuTingTop[index])
      })
      // -----------------------------华丽分割线  计算年龄范围圆柱体顶部位置------------------------------
      const age55Top = []
      age55.forEach((item, index) => {
        age55Top.push(item + age56[index])
      })
      const age45Top = []
      age55Top.forEach((item, index) => {
        age45Top.push(item + age45[index])
      })

      const age35Top = []
      age45Top.forEach((item, index) => {
        age35Top.push(item + age35[index])
      })
      console.log(genderWomanTop)
      option = {
        tooltip: {
          show: true,
          textStyle: {
            fontSize: 18
          },
          trigger: 'item',
          padding: 5,
          formatter: function (param) {
            var resultTooltip = param.seriesName + ':' + param.value;
            return resultTooltip
          }
        },
        legend: {
          show: true,
          icon: 'circle',
          orient: 'horizontal',
          right: 'center',
          itemWidth: 16.5,
          itemHeight: 6,
          // itemGap: 30,
          textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD',
            fontSize: 14
          },
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 10,
            bottom: 10
          }
        ],
        grid: {
          show: true,
          left: '2%',
          right: '2%',
          top: '20%',
          bottom: 80
        },
        xAxis: [{
          data: xData,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#aaaaaa',
              fontSize: 12
            },
            margin: 30, //刻度标签与轴线之间的距离。
          },
          axisLine: {
            show: true //不显示x轴
          },
          axisTick: {
            show: true //不显示刻度
          },
          boundaryGap: true,
          splitLine: {
            show: true,
            width: 0.08,
            lineStyle: {
              type: 'solid',
              color: '#03202E'
            }
          }
        }],
        yAxis: [{
          show: true,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#eee',
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#888'
            },
          }
        }],
        series: [
          // 底下的蓝色阴影部分，凸显立体效果
          // {
          //   type: 'custom',
          //   silent: true,
          //   legendHoverLink: false,
          //   z: 0,
          //   renderItem: (params, api) => {
          //     //const location = api.coord([0,0])
          //     var color = new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //       {
          //         offset: 0,
          //         color: 'rgba(43, 123, 255, 0.1)',
          //       },
          //       {
          //         offset: 1,
          //         color: 'rgba(44, 124, 255, 1)',
          //       },
          //     ]);
          //     return {
          //       type: 'group',
          //       children: [
          //         {
          //           type: 'BottomPanel',
          //           shape: {
          //             api,
          //           },
          //           style: {
          //             fill: color,
          //           },
          //         },
          //       ],
          //     };
          //   },
          //   data: [0],
          // },

          // ***************** 男性柱体 *****************
          {
            name: '男性',
            type: 'bar',
            stack: '男性',
            barWidth: 30,
            barGap: '0%',
            itemStyle: {
              color: '#103BE5',
              opacity: .8
            },
            data: genderMan,
            z: 1,
          },
          //男性柱顶圆片
          {
            name: '男性',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['-150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#103BE5',
            },
            data: genderMan,
            z: 1,
          },
          {//男性柱底圆片
            name: '男性',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['-150%', 10],
            itemStyle: {
              color: '#103BE5',
            },
            data: genderMan,
            z: 1,
          },
          // ***************** 女性柱体 *****************
          {
            name: '女性',
            type: 'bar',
            stack: '男性',
            barWidth: 30,
            barGap: '0%',
            itemStyle: {
              color: '#6A88FF',
              opacity: .8
            },
            data: genderWoman,
            z: 2,
          },
          //女性柱顶圆片
          {
            name: '女性',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['-150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#6A88FF',
            },
            data: genderWomanTop,
            z: 2,
          },
          {//女性柱底圆片
            name: '女性',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['-150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#6A88FF',
            },
            data: genderMan,
            z: 2,
          },
          // -----------------------------------------------华丽的分割线【职务级别】---------------------------------------------------------
          // ***************** 办事员 *****************
          {
            name: '办事员',
            type: 'bar',
            stack: '办事员',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#4C157A',
              opacity: .8
            },
            data: jobBanShiYuan,
            z: 1,
          },
          //职务柱顶圆片
          {
            name: '办事员',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#4C157A',
            },
            data: jobBanShiYuan,
            z: 1,
          },
          {//职务柱底圆片
            name: '办事员',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, 10],
            itemStyle: {
              color: '#4C157A',
            },
            data: jobBanShiYuan,
            z: 1,
          },
          // ***************** 科员 *****************
          {
            name: '科员',
            type: 'bar',
            stack: '办事员',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#6C1EAF',
              opacity: .8
            },
            data: jobKeYuan,
            z: 2,
          },
          //科员柱顶圆片
          {
            name: '科员',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#6C1EAF',
            },
            data: jobKeYuanTop,
            z: 2,
          },
          {//科员柱底圆片
            name: '科员',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#6C1EAF',
            },
            data: jobBanShiYuan,
            z: 2,
          },
          // ***************** 乡科级副职 *****************
          {
            name: '乡科级副职',
            type: 'bar',
            stack: '办事员',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#8E1EAF',
              opacity: .8
            },
            data: jobFuXiang,
            z: 3,
          },
          //乡科级副职柱顶圆片
          {
            name: '乡科级副职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#8E1EAF',
            },
            data: jobFuXiangTop,
            z: 3,
          },
          {//乡科级副职柱底圆片
            name: '乡科级副职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#8E1EAF',
            },
            data: jobKeYuanTop,
            z: 3,
          },
          // ***************** 乡科级正职 *****************
          {
            name: '乡科级正职',
            type: 'bar',
            stack: '办事员',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#8C0BD6',
              opacity: .8
            },
            data: jobZhengXiang,
            z: 4,
          },
          //乡科级正职柱顶圆片
          {
            name: '乡科级正职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#8C0BD6',
            },
            data: jobZhengXiangTop,
            z: 4,
          },
          {//乡科级正职柱底圆片
            name: '乡科级正职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#8C0BD6',
            },
            data: jobFuXiangTop,
            z: 4,
          },

          // ***************** 县处级副职 *****************
          {
            name: '县处级副职',
            type: 'bar',
            stack: '办事员',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#bc26e9',
              opacity: .8
            },
            data: jobFuXian,
            z: 5,
          },
          //县处级副职柱顶圆片
          {
            name: '县处级副职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#bc26e9',
            },
            data: jobFuXianTop,
            z: 5,
          },
          {//县处级副职柱底圆片
            name: '县处级副职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#bc26e9',
            },
            data: jobZhengXiangTop,
            z: 5,
          },

          // ***************** 县处级正职 *****************
          {
            name: '县处级正职',
            type: 'bar',
            stack: '办事员',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#fb49e8',
              opacity: .8
            },
            data: jobZhengXian,
            z: 6,
          },
          //县处级正职柱顶圆片
          {
            name: '县处级正职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#fb49e8',
            },
            data: jobZhengXianTop,
            z: 6,
          },
          {//县处级正职柱底圆片
            name: '县处级正职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#fb49e8',
            },
            data: jobFuXianTop,
            z: 6,
          },

          // ***************** 厅局级副职 *****************
          {
            name: '厅局级副职',
            type: 'bar',
            stack: '办事员',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#F383E7',
              opacity: .8
            },
            data: jobFuTing,
            z: 7,
          },
          //厅局级副职柱顶圆片
          {
            name: '厅局级副职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#F383E7',
            },
            data: jobFuTingTop,
            z: 7,
          },
          {//厅局级副职柱底圆片
            name: '厅局级副职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#F383E7',
            },
            data: jobZhengXianTop,
            z: 7,
          },


          // ***************** 厅级正职 *****************
          {
            name: '厅级正职',
            type: 'bar',
            stack: '办事员',
            barWidth: 30,
            barGap: '0%',
            itemStyle: {
              color: '#ff9ff5',
              opacity: .8
            },
            data: jobZhengTing,
            z: 8,
          },
          //职务柱顶圆片
          {
            name: '厅级正职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#ff9ff5',
            },
            data: jobZhengTingTop,
            z: 8,
          },
          {//职务柱底圆片
            name: '厅级正职',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#ff9ff5',
            },
            data: jobFuTingTop,
            z: 8,
          },

          // -----------------------------------------------华丽的分割线【年龄分段级别】---------------------------------------------------------
          //年龄分段柱体
          // ***************** 56岁及以上 *****************
          {
            name: '56岁及以上',
            type: 'bar',
            stack: '56岁及以上',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#00A3A6',
              opacity: .8
            },
            data: age56,
            z: 1,
          },
          //年龄分段柱顶圆片
          {
            name: '56岁及以上',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#00A3A6',
            },
            data: age56,
            z: 1,
          },
          {//年龄分段柱底圆片
            name: '56岁及以上',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['150%', 10],
            itemStyle: {
              color: '#00A3A6',
            },
            data: age56,
            z: 1,
          },
          // ***************** 46岁-55岁 *****************
          {
            name: '46岁-55岁',
            type: 'bar',
            stack: '56岁及以上',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#20D4D2',
              opacity: .8
            },
            data: age55,
            z: 2,
          },
          //年龄分段柱顶圆片
          {
            name: '46岁-55岁',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#20D4D2',
            },
            data: age55Top,
            z: 2,
          },
          {//年龄分段柱底圆片
            name: '46岁-55岁',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#20D4D2',
            },
            data: age56,
            z: 2,
          },
          // ***************** 36岁 - 45岁 *****************
          {
            name: '36岁-45岁',
            type: 'bar',
            stack: '56岁及以上',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#49E3FB',
              opacity: .8
            },
            data: age45,
            z: 3,
          },
          //年龄分段柱顶圆片
          {
            name: '36岁-45岁',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#49E3FB',
            },
            data: age45Top,
            z: 3,
          },
          {//年龄分段柱底圆片
            name: '36岁-45岁',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#49E3FB',
            },
            data: age55Top,
            z: 3,
          },
          // ***************** 36岁及以下 *****************
          {
            name: '36岁及以下',
            type: 'bar',
            stack: '56岁及以上',
            barWidth: 30,
            barGap: '50%',
            itemStyle: {
              color: '#7AEBFD',
              opacity: .8
            },
            data: age35,
            z: 4,
          },
          //年龄分段柱顶圆片
          {
            name: '36岁及以下',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#7AEBFD',
            },
            data: age35Top,
            z: 4,
          },
          {//年龄分段柱底圆片
            name: '36岁及以下',
            type: 'pictorialBar',
            symbolSize: [30, 20],//调整截面形状
            symbolOffset: ['150%', -10],
            symbolPosition: 'end',
            itemStyle: {
              color: '#7AEBFD',
            },
            data: age45Top,
            z: 4,
          },
        ]
      };