window.onload = function() {
    console.log("window load")
    //content resizer.
    const monitor = document.getElementById("monitor"),
        content = document.getElementById("content");
    let monitorW = monitor.width,
    monitorH = monitor.height;
    content.style.width = monitorW + "px"; content.style.height = monitorH + "px";

    window.addEventListener("resize", function(){
        monitorW = monitor.width;
        monitorH = monitor.height;
        content.style.width = monitorW + "px"; content.style.height = monitorH + "px";
    })
};