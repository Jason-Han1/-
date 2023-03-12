var uploadedDataURL = '/asset/get/s/data-1625654057443-57iqD-KYT.css';

var htmlStr = `<div class="container">
			<!-- 可添加边框 -->
			<div class="box-wrap">
				<!-- 默认有4个像素的透明边框，修改边框宽度可调整间隙大小 -->
				<div class="box">
					<div class="fill-area" id="fill-area" style="transform: translateY(-varStr)">
						<svg xmlns="http://www.w3.org/2000/svg" version="1.0" class="waves back-wave" viewBox="0 0 600 140">
							<g>
								<!-- Q 75 45  45(值:1-70 决定波峰和波谷，值越小波动越大) -->
								<path d="M 0 70 Q 75 45,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z" />
							</g>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" version="1.0" class="waves front-wave" viewBox="0 0 600 140">
							<g>
								<!-- Q 75 45  45(值:1-70 决定波峰和波谷，值越小波动越大) -->
								<path d="M 0 70 Q 75 45,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z" />
							</g>
						</svg>
					</div>
					<span class="text">varStr</span>
				</div>
			</div>
		</div>`;

// 请求样式文件
function getStyleTxt() {
    $.get(uploadedDataURL, function (style) {
        // 加载样式文件，动态插入到head标签中
        var ele = document.createElement('style');
        ele.innerHTML = style;
        document.getElementsByTagName('head')[0].appendChild(ele);
        // 将图表选择一个合适的位置放置
        var cssText = `
            display: flex;
            justify-content: space-around;
            align-content: center;
            flex-wrap: wrap;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 99;
            background-color: #000;
        `;
        var box = document.getElementById('chart-panel')
        var dom = document.createElement('div');
        dom.style.cssText = cssText;
        
        // 动态创建两个水球容器
        var waves1 = document.createElement('div');
        var waves2 = document.createElement('div');
        // 设置水球刻度值
        waves1.innerHTML = htmlStr.replace(/varStr/g, '50%');
        waves2.innerHTML = htmlStr.replace(/varStr/g, '80%');
        dom.appendChild(waves1);
        dom.appendChild(waves2);
        box.appendChild(dom)
    });
}

getStyleTxt();
