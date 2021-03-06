var pointsArray = document.getElementsByClassName('points');

var revealPoint = function(points) {
    points.style.opacity = 1;
    points.style.transform = "scaleX(1) translateY(0)";
    points.style.msTransform = "scaleX(1) translateY(0)";
    points.style.WebkitTransform = "scaleX(1) translateY(0)";
  };

var animatePoints = function(points) {
  forEach(points, revealPoint);
 };

 window.onload = function() {
   // Automatically animate the points on a tall screen where scrolling can't trigger the animation
   if (window.innerHeight > 950) {
       animatePoints(pointsArray);
   }

 window.addEventListener("scroll", function(event) {
     if (pointsArray[0].getBoundingClientRect().top <= 500) {
       animatePoints(pointsArray);
    }
  });
}
