(() => {
    // day 1
    function setup() {
        const canvas = document.getElementById('falling-snow');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        return {
            canvas,
            canvasContext: canvas.getContext('2d'),
            numberOfSnowBalls: 250
        }
    }

    function random(min, max) {
        // สุ่มเลขระหว่าง min - max
        // (1) (max - min) +1
        // (2) (1) * random 0 - 0.99
        // (3) (2) ปัดเศษลง
        // (4) (3) + min
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawSnowBalls(canvasContext, snowBall) {
        // เริ่มใช้ canvasContext เพื่อเริ่มวาด
        canvasContext.beginPath();

        // สร้างรูปวงกลม
        // params พิกัด x, พิกัด y, ความใหญ่ของวงกลม, องศาเริ่ม, องศาจบ (2 pi เป็นวงกลมพอดี)
        canvasContext.arc(snowBall.x, snowBall.y, 4, 0, Math.PI * 2);

        // set color
        canvasContext.fillStyle = `rgb(255, 255, 255, 0.5)`;
        canvasContext.fill();
    }

    function createSnowBalls(canvas, numberOfSnowBalls) {
        // สร้าง Array ตามจำนวน numberOfSnowBalls
        const coordinates = [...Array(numberOfSnowBalls)].map(() => {
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height)
            }
        });
        return coordinates;
    }

    function run() {
        const { canvas, canvasContext, numberOfSnowBalls } = setup();
        const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
        drawSnowBalls(canvasContext, snowBalls[0]);
    }
    run();
})();