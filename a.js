const canvas=document.querySelector('canvas')
        var isgameover=0
        let x=0
        let y=0
        canvas.width=500
        canvas.height=500
        var red_obj=[]
        const ctx=canvas.getContext('2d')
        ctx.fillStyle='green'
        ctx.fillRect(0,0,10,10)
        function mvpiece(mx,my){
            console.log('clear')
            ctx.fillStyle='green'
            ctx.clearRect(x,y,10,10)
            x+=mx
            y+=my
            ctx.fillRect(x,y,10,10)
            red_obj.forEach( ele =>{
                if(((x+10>ele['x'] && y+10>ele['y'])||(x>ele['x']+10 && y>ele['y']+10))&&((x<ele['x']+10 && y<ele['y']+10))){
                console.log('%cCrash','color:red;font-size: large')
                isgameover=1
                document.querySelector('#filter').style.display='flex'
            }
            })
        }
        document.addEventListener('keydown',(e)=>{
            if (!isgameover){
            var code = e.keyCode;
    switch (code) {
        case 37: mvpiece(-5,0); break; //Left key
        case 38: mvpiece(0,-5); break; //Up key
        case 39: mvpiece(5,0); break; //Right key
        case 40: mvpiece(0,5); break; //Down key
        // default: console.log(code)
    }}
        })
        var maplines=map.split('\n')
        ctx.fillStyle='red'
        for (let i = 0; i < maplines.length; i++) {
            const line = maplines[i];
            for (let index = 0; index < line.length; index++) {
                const char = line[index];
                if (char=='.'){
                    red_obj.push({
                x: Math.floor((index)*10),
                y: Math.floor((i)*10),
            })
            console.log(red_obj[red_obj.length-1])
            ctx.fillRect(red_obj[red_obj.length-1]['x'],red_obj[red_obj.length-1]['y'],10,10)
                }
            }            
        }
        // for (i=1;i<=100;i++){
            // ctx.fillStyle='red'
            // red_obj.push({
            //     x: Math.floor(Math.random()*canvas.width),
            //     y: Math.floor(Math.random()*canvas.height),
            // })
            // ctx.fillRect(red_obj[red_obj.length-1]['x'],red_obj[red_obj.length-1]['y'],10,10)
        // }
        document.querySelector('button').onclick=function(){
            location.reload()
        }
        console.log('Initialnized!')