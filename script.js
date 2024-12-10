const cursor = document.createElement('div');
cursor.style.width="32px";
cursor.style.height="32px";
cursor.style.backgroundImage=`url(img/${Math.floor(Math.random()*7)}.png)`
cursor.style.position="fixed";
document.body.appendChild(cursor);

document.addEventListener('mousemove', function(event){
    cursor.style.left=`${event.clientX}px`;
    cursor.style.top=`${event.clientY}px`;
})