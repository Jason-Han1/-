/**
 * 创建组件
 * @class
 * @param {string} el 
 */
function Wave(el) {
    this.$el = $(el).eq(0);

    this.time = 5000;
    this.timer = null;
    this.chart = echarts.init(this.$el[0]);

    //模拟波浪数据
    this.data1 = [60, 70, 65, 75, 52, 85, 84, 55, 80, 65, 90];
    this.data2 = [95, 65, 95, 50, 84, 70, 100, 85, 75, 85, 50];


    this.pointCircle(this.data1,1,'rgb(184, 48, 255)');
    this.pointCircle(this.data1,5,'rgb(184, 48, 255)');
    this.pointCircle(this.data1,7,'rgb(184, 48, 255)');
    this.pointCircle(this.data2,0,'rgb(30, 180, 255)');
    this.pointCircle(this.data2,4,'rgb(30, 180, 255)');
    this.pointCircle(this.data2,9,'rgb(30, 180, 255)');
};


/**
 * 渲染图表
 */
Wave.prototype.render = function () {
    var that = this;
    option = this.option = {
        animationDuration: 0,
        animationEasingUpdate: 'linear',
        animationDurationUpdate: this.time,
        grid: {
            top: 0,
            bottom: -40,
            left: -500,
            right: -500,
            containLabel: true
        },
        xAxis: {
            axisTick: {
                show: false
            },
            boundaryGap: false,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: (function () {
                var now = new Date();
                var res = [];
                var len = 11;
                while (len--) {
                    now = new Date(now - that.time);
                    res.push(now.toLocaleTimeString().replace(/^\D*/, ''));
                }

                return res;
            })()
        },
        yAxis: {
            axisTick: {
                show: false
            },
            max: 100,
            boundaryGap: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            type: 'line',
            smooth: 0.5,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(184, 48, 255)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(184, 48, 255, 0.8)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(184, 48, 255, 0)'
                    }])
                }
            },
            data: this.data1

        }, {
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(30, 180, 255)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(30, 180, 255, 0.8)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(30, 180, 255, 0)'
                    }])
                }
            },
            data: this.data2
        }]
    };

    this.$el.css('width', '100%');
    this.chart.setOption(this.option);

    that.animate();
    this.timer = setInterval(function () {
        that.animate();

    }, that.time);
}

/**
 * 动画 
 */
Wave.prototype.animate = function () {

    this.data1.unshift(this.data1.pop());
    this.data2.unshift(this.data2.pop());


    var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
    this.option.xAxis.data.pop();
    this.option.xAxis.data.unshift(axisData);

    this.chart.setOption(this.option);

}
/**
 * 数据点生成标注
 * @param {array} datas 
 * @param {number} i 
 * @param {string} color 
 */
Wave.prototype.pointCircle = function(datas,i,color){
    datas[i] = {
        value: datas[i] ,
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: color,
                borderColor: '#fff',
                borderWidth: 2,
                shadowColor: color,
                shadowBlur: 15
            }
        }
    }
}

Wave.prototype.dispose = function () {
    var that = this;
    setTimeout(function () {
        that.chart.dispose();
        clearInterval(that.timer);
    }, 1000);

}


var wave = new Wave('#chart-panel');
wave.render();
