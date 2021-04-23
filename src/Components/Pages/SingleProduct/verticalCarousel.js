import $ from "jquery";

$(document).ready(function() {
  var Carousel = {
    width: 100, // Images are forced into a width of this many pixels.
    numVisible: 2, // The number of images visible at once.
    duration: 600, // Animation duration in milliseconds.
    padding: 2 // Vertical padding around each image, in pixels.
  };

  function rotateForward() {
    var carousel = Carousel.carousel,
      children = carousel.children,
      firstChild = children[0],
      lastChild = children[children.length - 1];
    carousel.insertBefore(lastChild, firstChild);
  }
  function rotateBackward() {
    var carousel = Carousel.carousel,
      children = carousel.children,
      firstChild = children[0],
      lastChild = children[children.length - 1];
    carousel.insertBefore(firstChild, lastChild.nextSibling);
  }

  function animate(begin, end, finalTask) {
    var wrapper = Carousel.wrapper,
      carousel = Carousel.carousel,
      change = end - begin,
      duration = Carousel.duration,
      startTime = Date.now();
    carousel.style.top = begin + "px";
    var animateInterval = window.setInterval(function() {
      var t = Date.now() - startTime;
      if (t >= duration) {
        window.clearInterval(animateInterval);
        finalTask();
        return;
      }
      t /= duration / 2;
      var top =
        begin +
        (t < 1
          ? (change / 2) * Math.pow(t, 3)
          : (change / 2) * (Math.pow(t - 2, 3) + 2));
      carousel.style.top = top + "px";
    }, 1000 / 60);
  }

  window.onload = function() {
    var carousel = (Carousel.carousel = document.getElementById("carousel")),
      images = carousel.getElementsByTagName("img"),
      numImages = images.length,
      imageWidth = Carousel.width,
      aspectRatio = images[0].width / images[0].height,
      imageHeight = imageWidth / aspectRatio,
      padding = Carousel.padding,
      rowHeight = (Carousel.rowHeight = imageHeight + 2 * padding);
    carousel.style.width = "100%";
    for (var i = 0; i < numImages; ++i) {
      var image = images[i],
        frame = document.createElement("div");
      frame.className = "pictureFrame";
      var aspectRatio = image.offsetWidth / image.offsetHeight;
      image.style.width = "100%";
      image.style.height = "calc(100% - 10px)";
      image.style.objectFit = "contain";
      image.style.border = "1px solid #ff7f00";
      image.style.margin = "5px 0";
      image.style.backgroundColor = "white";
      image.style.cursor = "pointer";
      frame.style.height = "110.4px";
      frame.style.width = "calc(100% - 30px)";
      carousel.insertBefore(frame, image);
      frame.appendChild(image);
    }
    Carousel.rowHeight = carousel.getElementsByTagName("div")[0].offsetHeight;
    carousel.style.height = "100%";
    carousel.style.visibility = "visible";
    var wrapper = (Carousel.wrapper = document.createElement("div"));
    wrapper.id = "carouselWrapper";
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    carousel.parentNode.insertBefore(wrapper, carousel);
    wrapper.appendChild(carousel);
    var prevButton = document.getElementById("prev"),
      nextButton = document.getElementById("next");
    prevButton.onclick = function() {
      prevButton.disabled = nextButton.disabled = true;
      rotateForward();
      animate(-Carousel.rowHeight, 0, function() {
        carousel.style.top = "0";
        prevButton.disabled = nextButton.disabled = false;
      });
    };
    nextButton.onclick = function() {
      prevButton.disabled = nextButton.disabled = true;
      animate(0, -Carousel.rowHeight, function() {
        rotateBackward();
        carousel.style.top = "0";
        prevButton.disabled = nextButton.disabled = false;
      });
    };
  };
});
