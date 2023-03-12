let width = myChart.getWidth();
let height = myChart.getHeight();
console.log(width, height);
/* 生成网格 @length 图表个数 @cols 每行列数  */
function genGrid(length, cols) {
    let grids = [];
    const gutter = 8; //间隔占比
    let rows = Math.ceil(length / cols); //获取总行数
    let width = Math.floor((100 - (cols + 1) * gutter) / cols); //每列图表宽度
    let height = Math.floor((100 - (rows + 1) * gutter) / rows); //每行图表高度
    for (let i = 0; i < length; i++) {
        let rowIndex = Math.floor(i / cols); //行索引
        let colIndex = i % cols; //列索引
        let left = colIndex * width + (colIndex + 1) * gutter;
        let right = 100 - left - width;
        let top = rowIndex * height + (rowIndex + 1) * gutter;
        let bottom = 100 - top - height;
        let center = [Math.floor(left + width / 2) + '%', Math.floor(top + height / 2 + gutter) + '%'];
        let topCenter = { left: Math.floor(left + width / 2) + '%', top: Math.floor(top - gutter / 2) + '%' };
        let bottomCenter = { left: Math.floor((right - left) / 2) + '%', top: Math.floor(top + gutter / 2) + '%' };
        let gird = {
            index: i,
            topCenter,
            center,
            bottomCenter,
            left: left + '%',
            right: right + '%',
            top: top + '%',
            bottom: bottom + '%',
        };
        grids.push(gird);
    }
    return grids;
}

let grid = genGrid(6, 3);
console.log(grid);
let xAxis = [],
    yAxis = [],
    series = [],
    title = [];
for (let i = 0; i < grid.length; i++) {
    title.push({
        text: '多图表Grid布局算法-图表' + i,
        left: grid[i].topCenter.left,
        top: grid[i].topCenter.top,
        textAlign: 'center',
    });
    xAxis.push({
        gridIndex: i,
        name: '' + i,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    });
    yAxis.push({
        gridIndex: i,
        name: i + '',
    });
    series.push({
        data: [150, 230, 224, 218, 135, 147, 260],
        type: ['line', 'bar'][Math.floor(Math.random() * 2)],
        xAxisIndex: i,
        yAxisIndex: i,
        // center: grid[i].center,
        // radius: grid[i].radius,
    });
}

option = {
    title,
    xAxis,
    yAxis,
    grid,
    series,
};
