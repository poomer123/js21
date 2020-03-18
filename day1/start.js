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
        canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);

        // set color
        canvasContext.fillStyle = `rgb(255, 255, 255, ${snowBall.opacity})`;
        canvasContext.fill();
    }

    function moveSnowBall(canvas, snowBall) {
        // เปลี่ยนพิกัดเพื่อให้ snowball เคลื่อนที่
        snowBall.x += snowBall.speedX;
        snowBall.y += snowBall.speedY;

        // ถ้าพิกัดของ snowBall เลยขนาดจอด้านขวาให้พิกัดเป็นด้านซ้ายสุด
        // ถ้าพิกัดของ snowBall ต่ำกว่า 0 หมายถึงเลยจอด้านซ้ายให้พิกัดไปด้านขวาสุด
        if (snowBall.x > canvas.width) {
            snowBall.x = 0;
        } else if (snowBall.x < 0) {
            snowBall.x = canvas.width
        }

        // ถ้า snowBall มีตำแหน่ง y มากกว่าความสูงของจอหมายความว่า snowBall ตกลงด้านล่างจอ ให้ไปเริ่มบนสุด
        if (snowBall.y > canvas.height) {
            snowBall.y = 0;
        }
    }

    function createSnowBalls(canvas, numberOfSnowBalls) {
        // สร้าง Array ตามจำนวน numberOfSnowBalls
        const coordinates = [...Array(numberOfSnowBalls)].map(() => {
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                radius: random(2, 4),
                opacity: random(0.4, 0.9),
                speedX: random(-5, 5),
                speedY: random(1, 3)
            }
        });
        return coordinates;
    }

    function run() {
        const { canvas, canvasContext, numberOfSnowBalls } = setup();
        const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);

        setInterval(() => {

            // clear canvas ทั้งหน้าแล้วสร้างใหม่ด้วยตำแหน่ง x y ใหม่
            canvasContext.clearRect(0, 0, canvas.width, canvas.height)

            snowBalls.forEach((snowBall) => {
                drawSnowBalls(canvasContext, snowBall);
            });
            snowBalls.forEach((snowBall) => {
                moveSnowBall(canvas, snowBall);
            });
        }, 50);
    }
    run();
})();