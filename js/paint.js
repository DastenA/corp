window.addEventListener("load", () => {
    console.log("hello")
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    //resizing
    canvas.height = 550
    canvas.width = 1275


    //variables  
    let painting = false

    function startPosition(e){
        painting = true
        draw(e)
    }

    function finsihedPosition(){
        painting = false
        ctx.beginPath()
    }

    function draw(e){
        if (!painting) return
        ctx.lineWidth = 20
        ctx.lineCap = "round"
        ctx.strokeStyle = "orange"

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }
    //Eventlisteners
    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finsihedPosition)
    canvas.addEventListener("mousemove", draw)
    

})
