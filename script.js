var animationPaused = false;

      function pauseAnimation(element) {
        animationPaused = true;
        element.querySelector(".news-container").style.animationPlayState =
          "paused";
      }

      function resumeAnimation(element) {
        animationPaused = false;
        element.querySelector(".news-container").style.animationPlayState =
          "running";
      }

 