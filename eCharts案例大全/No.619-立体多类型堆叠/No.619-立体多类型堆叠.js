const xData = ['性别', '政治面貌', '年龄', '学历', '职务', '职级'];
// 性别
const genderMan = 60;
const genderWoman = 60;
// 政治面貌
const zhengZhiMianMaoDangYuan = 60;
const zhengZhiMianMaoTuanYuan = 60;
const zhengZhiMianMaoWuDangPai = 60;
const zhengZhiMianMaoQunZhong = 60;
// 年龄范围
const age35 = 60;
const age45 = 60;
const age55 = 60;
const age56 = 60;
// 学历
const educationZhongZhuan = 60;
const educationZhuanKe = 60;
const educationBenKe = 60;
const educationYanJiuSheng = 60;
// 职务
const jobBanShiYuan = 60;
const jobBanKeYuan = 60;
const jobBanXiangKeFu = 60;
const jobBanXiangKeZheng = 60;
const jobBanXianChuFu = 60;
const jobBanXianChuZheng = 60;
const jobBanTingJuFu = 60;
const jobBanTingJuZheng = 60;
// 职级
const gradeJingYuan1 = 60;
const gradeJingYuan2 = 60;
const gradeJingZhang1 = 60;
const gradeJingZhang2 = 60;
const gradeJingZhang3 = 60;
const gradeJingZhang4 = 60;
const gradeAdvancedJingZhang1 = 60;
const gradeAdvancedJingZhang2 = 60;
const gradeAdvancedJingZhang3 = 60;
const gradeAdvancedJingZhang4 = 60;
const gradeJingWuZhuanYuan1 = 60;
const gradeJingWuZhuanYuan2 = 60;
const label = {
    show: true,
    verticalAlign: 'middle',
    align: 'center',
    formatter: function (param) {
        if (!param.data) {
            return '';
        }
        return param.seriesName + '\t' + param.data;
    },
};
option = {
    tooltip: {
        show: true,
        textStyle: {
            fontSize: 18,
        },
        trigger: 'item',
        padding: 5,
        formatter: function (param) {
            var resultTooltip = param.seriesName + ':' + param.value;
            return resultTooltip;
        },
    },
    legend: {
        show: false,
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 100,
        },
        {
            start: 0,
            end: 10,
            bottom: 10,
        },
    ],
    grid: {
        show: true,
        left: '2%',
        right: '2%',
        top: '20%',
        bottom: 80,
    },
    xAxis: [
        {
            data: xData,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#aaaaaa',
                    fontSize: 12,
                },
                margin: 30, //刻度标签与轴线之间的距离。
            },
            axisLine: {
                show: true, //不显示x轴
            },
            axisTick: {
                show: true, //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
                show: true,
                width: 0.08,
                lineStyle: {
                    type: 'solid',
                    color: '#03202E',
                },
            },
        },
    ],
    yAxis: [
        {
            show: true,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eee',
                    type: 'solid',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#888',
                },
            },
        },
    ],
    series: [
        // -----------------------------------------------华丽的分割线【性别】---------------------------------------------------------
        // ***************** 性别 *****************
        {
            name: '男',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#103BE5',
            },
            data: [genderMan, 0, 0, 0, 0, 0],
            z: 2,
        },
        {
            name: '男',
            type: 'bar',
            stack: '性别',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#103BE5',
                opacity: 0.8,
            },
            label,
            data: [genderMan, 0, 0, 0, 0, 0],
            z: 2,
        },
        // ***************** 性别 *****************
        {
            name: '女',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#6A88FF',
            },
            data: [genderWoman + genderMan, 0, 0, 0, 0, 0],
            z: 1,
        },
        {
            name: '女',
            type: 'bar',
            stack: '性别',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#6A88FF',
                opacity: 0.8,
            },
            label,
            data: [genderWoman, 0, 0, 0, 0, 0],
            z: 1,
        },

        // -----------------------------------------------华丽的分割线【政治面貌】---------------------------------------------------------
        // ***************** 政治面貌 *****************
        {
            name: '群众',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#580313',
            },
            data: [0, zhengZhiMianMaoQunZhong, 0, 0, 0, 0],
            z: 4,
        },
        {
            name: '群众',
            type: 'bar',
            stack: '政治面貌',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#580313',
                opacity: 0.8,
            },
            label,
            data: [0, zhengZhiMianMaoQunZhong, 0, 0, 0, 0],
            z: 4,
        },
        // ***************** 政治面貌 *****************
        {
            name: '民主党派及无党派人士',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#9C0723',
            },
            data: [0, zhengZhiMianMaoWuDangPai + zhengZhiMianMaoQunZhong, 0, 0, 0, 0],
            z: 3,
        },
        {
            name: '民主党派及无党派人士',
            type: 'bar',
            stack: '政治面貌',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#9C0723',
                opacity: 0.8,
            },
            label,
            data: [0, zhengZhiMianMaoWuDangPai, 0, 0, 0, 0],
            z: 3,
        },
        // ***************** 政治面貌 *****************
        {
            name: '共青团员',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#E00E36',
            },
            data: [0, zhengZhiMianMaoTuanYuan + zhengZhiMianMaoWuDangPai + zhengZhiMianMaoQunZhong, 0, 0, 0, 0],
            z: 2,
        },
        {
            name: '共青团员',
            type: 'bar',
            stack: '政治面貌',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#E00E36',
                opacity: 0.8,
            },
            label,
            data: [0, zhengZhiMianMaoTuanYuan, 0, 0, 0, 0],
            z: 2,
        },
        // ***************** 政治面貌 *****************
        {
            name: '中共党员',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#FF385E',
            },
            data: [
                0,
                zhengZhiMianMaoDangYuan + zhengZhiMianMaoTuanYuan + zhengZhiMianMaoWuDangPai + zhengZhiMianMaoQunZhong,
                0,
                0,
                0,
                0,
            ],
            z: 1,
        },
        {
            name: '中共党员',
            type: 'bar',
            stack: '政治面貌',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#FF385E',
                opacity: 0.8,
            },
            label,
            data: [0, zhengZhiMianMaoDangYuan, 0, 0, 0, 0],
            z: 1,
        },
        // -----------------------------------------------华丽的分割线【年龄】---------------------------------------------------------
        // ***************** 年龄 *****************
        {
            name: '56岁及以上',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#00A3A6',
            },
            data: [0, 0, age56, 0, 0, 0],
            z: 4,
        },
        {
            name: '56岁及以上',
            type: 'bar',
            stack: '年龄',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#00A3A6',
                opacity: 0.8,
            },
            label,
            data: [0, 0, age56, 0, 0, 0],
            z: 4,
        },
        // ***************** 年龄 *****************
        {
            name: '46岁-55岁',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#20D4D2',
            },
            data: [0, 0, age55 + age56, 0, 0, 0],
            z: 3,
        },
        {
            name: '46岁-55岁',
            type: 'bar',
            stack: '年龄',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#20D4D2',
                opacity: 0.8,
            },
            label,
            data: [0, 0, age55, 0, 0, 0],
            z: 3,
        },
        // ***************** 年龄 *****************
        {
            name: '35岁-45岁',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#49E3FB',
            },
            data: [0, 0, age45 + age55 + age56, 0, 0, 0],
            z: 2,
        },
        {
            name: '35岁-45岁',
            type: 'bar',
            stack: '年龄',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#49E3FB',
                opacity: 0.8,
            },
            label,
            data: [0, 0, age45, 0, 0, 0],
            z: 2,
        },
        // ***************** 年龄 *****************
        {
            name: '35岁及以下',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#7AEBFD',
            },
            data: [0, 0, age35 + age45 + age55 + age56, 0, 0, 0],
            z: 1,
        },
        {
            name: '35岁及以下',
            type: 'bar',
            stack: '年龄',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#7AEBFD',
                opacity: 0.8,
            },
            label,
            data: [0, 0, age35, 0, 0, 0],
            z: 1,
        },
        // -----------------------------------------------华丽的分割线【学历】---------------------------------------------------------
        // ***************** 学历 *****************
        {
            name: '中专及以下',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#B63E16',
            },
            data: [0, 0, 0, educationZhongZhuan, 0, 0],
            z: 4,
        },
        {
            name: '中专及以下',
            type: 'bar',
            stack: '学历',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#B63E16',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, educationZhongZhuan, 0, 0],
            z: 4,
        },
        // ***************** 学历 *****************
        {
            name: '专科教育',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#FF5B25',
            },
            data: [0, 0, 0, educationZhuanKe + educationZhongZhuan, 0, 0],
            z: 3,
        },
        {
            name: '专科教育',
            type: 'bar',
            stack: '学历',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#FF5B25',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, educationZhuanKe, 0, 0],
            z: 3,
        },
        // ***************** 学历 *****************
        {
            name: '本科教育',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#C9603D',
            },
            data: [0, 0, 0, educationBenKe + educationZhuanKe + educationZhongZhuan, 0, 0],
            z: 2,
        },
        {
            name: '本科教育',
            type: 'bar',
            stack: '学历',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#C9603D',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, educationBenKe, 0, 0],
            z: 2,
        },
        // ***************** 学历 *****************
        {
            name: '研究生教育',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#FF9C7B',
            },
            data: [0, 0, 0, educationYanJiuSheng + educationBenKe + educationZhuanKe + educationZhongZhuan, 0, 0],
            z: 1,
        },
        {
            name: '研究生教育',
            type: 'bar',
            stack: '学历',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#FF9C7B',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, educationYanJiuSheng, 0, 0],
            z: 1,
        },
        // -----------------------------------------------华丽的分割线【职务】---------------------------------------------------------
        // ***************** 职务 *****************
        {
            name: '办事员',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#4C157A',
            },
            data: [0, 0, 0, 0, jobBanShiYuan, 0],
            z: 8,
        },
        {
            name: '办事员',
            type: 'bar',
            stack: '职务',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#4C157A',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, jobBanShiYuan, 0],
            z: 8,
        },
        // ***************** 职务 *****************
        {
            name: '科员',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#6C1EAF',
            },
            data: [0, 0, 0, 0, jobBanKeYuan + jobBanShiYuan, 0],
            z: 8,
        },
        {
            name: '科员',
            type: 'bar',
            stack: '职务',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#6C1EAF',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, jobBanKeYuan, 0],
            z: 1,
        },
        // ***************** 职务 *****************
        {
            name: '乡科级副职',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#8E1EAF',
            },
            data: [0, 0, 0, 0, jobBanXiangKeFu + jobBanKeYuan + jobBanShiYuan, 0],
            z: 8,
        },
        {
            name: '乡科级副职',
            type: 'bar',
            stack: '职务',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#8E1EAF',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, jobBanXiangKeFu, 0],
            z: 1,
        },
        // ***************** 职务 *****************
        {
            name: '乡科级正职',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#8C0BD6',
            },
            data: [0, 0, 0, 0, jobBanXiangKeZheng + jobBanXiangKeFu + jobBanKeYuan + jobBanShiYuan, 0],
            z: 8,
        },
        {
            name: '乡科级正职',
            type: 'bar',
            stack: '职务',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#8C0BD6',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, jobBanXiangKeZheng, 0],
            z: 1,
        },
        // ***************** 职务 *****************
        {
            name: '县处级副职',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#BC26E9',
            },
            data: [
                0,
                0,
                0,
                0,
                jobBanXianChuFu + jobBanXiangKeZheng + jobBanXiangKeFu + jobBanKeYuan + jobBanShiYuan,
                0,
            ],
            z: 8,
        },
        {
            name: '县处级副职',
            type: 'bar',
            stack: '职务',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#BC26E9',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, jobBanXianChuFu, 0],
            z: 1,
        },
        // ***************** 职务 *****************
        {
            name: '县处级正职',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#FB49E8',
            },
            data: [
                0,
                0,
                0,
                0,
                jobBanXianChuZheng +
                    jobBanXianChuFu +
                    jobBanXiangKeZheng +
                    jobBanXiangKeFu +
                    jobBanKeYuan +
                    jobBanShiYuan,
                0,
            ],
            z: 8,
        },
        {
            name: '县处级正职',
            type: 'bar',
            stack: '职务',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#FB49E8',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, jobBanXianChuZheng, 0],
            z: 1,
        },
        // ***************** 职务 *****************
        {
            name: '厅局级副职',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#F383E7',
            },
            data: [
                0,
                0,
                0,
                0,
                jobBanTingJuFu +
                    jobBanXianChuZheng +
                    jobBanXianChuFu +
                    jobBanXiangKeZheng +
                    jobBanXiangKeFu +
                    jobBanKeYuan +
                    jobBanShiYuan,
                0,
            ],
            z: 8,
        },
        {
            name: '厅局级副职',
            type: 'bar',
            stack: '职务',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#F383E7',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, jobBanTingJuFu, 0],
            z: 1,
        },
        // ***************** 职务 *****************
        {
            name: '厅局级正职',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#FF9FF5',
            },
            data: [
                0,
                0,
                0,
                0,
                jobBanTingJuZheng +
                    jobBanTingJuFu +
                    jobBanXianChuZheng +
                    jobBanXianChuFu +
                    jobBanXiangKeZheng +
                    jobBanXiangKeFu +
                    jobBanKeYuan +
                    jobBanShiYuan,
                0,
            ],
            z: 8,
        },
        {
            name: '厅局级正职',
            type: 'bar',
            stack: '职务',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#FF9FF5',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, jobBanTingJuZheng, 0],
            z: 1,
        },
        // -----------------------------------------------华丽的分割线【职级】---------------------------------------------------------
        // ***************** 职级 *****************
        {
            name: '二级警员',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#074C37',
            },
            data: [0, 0, 0, 0, 0, gradeJingYuan2],
            z: 8,
        },
        {
            name: '二级警员',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#074C37',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeJingYuan2],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '一级警员',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#0E6E36',
            },
            data: [0, 0, 0, 0, 0, gradeJingYuan1 + gradeJingYuan2],
            z: 8,
        },
        {
            name: '一级警员',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#0E6E36',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeJingYuan1],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '四级警长',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#2B824E',
            },
            data: [0, 0, 0, 0, 0, gradeJingZhang4 + gradeJingYuan1 + gradeJingYuan2],
            z: 8,
        },
        {
            name: '四级警长',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#2B824E',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeJingZhang4],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '三级警长',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#438F73',
            },
            data: [0, 0, 0, 0, 0, gradeJingZhang3 + gradeJingZhang4 + gradeJingYuan1 + gradeJingYuan2],
            z: 8,
        },
        {
            name: '三级警长',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#438F73',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeJingZhang3],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '二级警长',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#117959',
            },
            data: [
                0,
                0,
                0,
                0,
                0,
                gradeJingZhang2 + gradeJingZhang3 + gradeJingZhang4 + gradeJingYuan1 + gradeJingYuan2,
            ],
            z: 8,
        },
        {
            name: '二级警长',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#117959',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeJingZhang2],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '一级警长',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#10933E',
            },
            data: [
                0,
                0,
                0,
                0,
                0,
                gradeJingZhang1 + gradeJingZhang2 + gradeJingZhang3 + gradeJingZhang4 + gradeJingYuan1 + gradeJingYuan2,
            ],
            z: 8,
        },
        {
            name: '一级警长',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#10933E',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeJingZhang1],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '四级高级警长',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#30BA87',
            },
            data: [
                0,
                0,
                0,
                0,
                0,
                gradeAdvancedJingZhang4 +
                    gradeJingZhang1 +
                    gradeJingZhang2 +
                    gradeJingZhang3 +
                    gradeJingZhang4 +
                    gradeJingYuan1 +
                    gradeJingYuan2,
            ],
            z: 8,
        },
        {
            name: '四级高级警长',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#30BA87',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeAdvancedJingZhang4],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '三级高级警长',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#1DD792',
            },
            data: [
                0,
                0,
                0,
                0,
                0,
                gradeAdvancedJingZhang3 +
                    gradeAdvancedJingZhang4 +
                    gradeJingZhang1 +
                    gradeJingZhang2 +
                    gradeJingZhang3 +
                    gradeJingZhang4 +
                    gradeJingYuan1 +
                    gradeJingYuan2,
            ],
            z: 8,
        },
        {
            name: '三级高级警长',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#1DD792',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeAdvancedJingZhang3],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '二级高级警长',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#05B951',
            },
            data: [
                0,
                0,
                0,
                0,
                0,
                gradeAdvancedJingZhang2 +
                    gradeAdvancedJingZhang3 +
                    gradeAdvancedJingZhang4 +
                    gradeJingZhang1 +
                    gradeJingZhang2 +
                    gradeJingZhang3 +
                    gradeJingZhang4 +
                    gradeJingYuan1 +
                    gradeJingYuan2,
            ],
            z: 8,
        },
        {
            name: '二级高级警长',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#05B951',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeAdvancedJingZhang2],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '一级高级警长',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#00D45A',
            },
            data: [
                0,
                0,
                0,
                0,
                0,
                gradeAdvancedJingZhang1 +
                    gradeAdvancedJingZhang2 +
                    gradeAdvancedJingZhang3 +
                    gradeAdvancedJingZhang4 +
                    gradeJingZhang1 +
                    gradeJingZhang2 +
                    gradeJingZhang3 +
                    gradeJingZhang4 +
                    gradeJingYuan1 +
                    gradeJingYuan2,
            ],
            z: 8,
        },
        {
            name: '一级高级警长',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#00D45A',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeAdvancedJingZhang1],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '二级警务专员',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#46E78A',
            },
            data: [
                0,
                0,
                0,
                0,
                0,
                gradeJingWuZhuanYuan2 +
                    gradeAdvancedJingZhang1 +
                    gradeAdvancedJingZhang2 +
                    gradeAdvancedJingZhang3 +
                    gradeAdvancedJingZhang4 +
                    gradeJingZhang1 +
                    gradeJingZhang2 +
                    gradeJingZhang3 +
                    gradeJingZhang4 +
                    gradeJingYuan1 +
                    gradeJingYuan2,
            ],
            z: 8,
        },
        {
            name: '二级警务专员',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#46E78A',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeJingWuZhuanYuan2],
            z: 1,
        },
        // ***************** 职级 *****************
        {
            name: '一级警务专员',
            type: 'pictorialBar',
            symbolSize: [150, 20], //调整截面形状
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            itemStyle: {
                color: '#65EF9F',
            },
            data: [
                0,
                0,
                0,
                0,
                0,
                gradeJingWuZhuanYuan1 +
                    gradeJingWuZhuanYuan2 +
                    gradeAdvancedJingZhang1 +
                    gradeAdvancedJingZhang2 +
                    gradeAdvancedJingZhang3 +
                    gradeAdvancedJingZhang4 +
                    gradeJingZhang1 +
                    gradeJingZhang2 +
                    gradeJingZhang3 +
                    gradeJingZhang4 +
                    gradeJingYuan1 +
                    gradeJingYuan2,
            ],
            z: 8,
        },
        {
            name: '一级警务专员',
            type: 'bar',
            stack: '职级',
            barWidth: 150,
            barGap: '-100%',
            itemStyle: {
                color: '#65EF9F',
                opacity: 0.8,
            },
            label,
            data: [0, 0, 0, 0, 0, gradeJingWuZhuanYuan1],
            z: 1,
        },
    ],
};
myChart.setOption(option);