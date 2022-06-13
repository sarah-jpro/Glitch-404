let container = document.querySelector('.container')
let text = document.querySelector('.text');

        container.addEventListener('mousemove', (e) =>{

            var x = (window.innerWidth / 2 - e.pageX) / 10;
            var y = (window.innerHeight / 2 - e.pageY) / 10;

            text.style.transform = `translateX(${x}px) translateY(${y}px)`
        })