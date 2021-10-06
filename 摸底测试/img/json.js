
 <script>
         
         var card = document.querySelector('.hand-in_file');
         card.addEventListener('click',function(e){
             
             let x = e.clientX - this.offsetLeft;
             let y = e.clientY - this.offsetTop;

             let circle = document.createElement('span');
             circle.style.left = x + 'px';
             circle.style.top = y + 'px';
             
             card.appendChild(circle);

             setInterval(function(){
                 circle.remove();
             },1000)

         })

    </script>
