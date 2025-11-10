// Video background autoplay
(function() {
  'use strict';

  console.log('Video background script loaded');

  function init() {
    const video = document.querySelector('video.hero-video');

    if (!video) {
      console.log('No video element found');
      return;
    }

    console.log('Video element found');
    console.log('Video src:', video.querySelector('source')?.src);
    console.log('Video readyState:', video.readyState);
    console.log('Video networkState:', video.networkState);

    // Function to attempt playing the video
    function tryPlay() {
      console.log('Attempting to play video...');
      console.log('ReadyState before play:', video.readyState);
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('✓ Video is playing!');
        }).catch(error => {
          console.log('✗ Play failed:', error.name, error.message);
        });
      }
    }

    // Listen to all video events for debugging
    ['loadstart', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'error'].forEach(eventName => {
      video.addEventListener(eventName, function() {
        console.log('Video event:', eventName, 'readyState:', video.readyState);
        if (eventName === 'error') {
          console.log('Video error:', video.error);
        }
        if (eventName === 'canplay' || eventName === 'canplaythrough') {
          tryPlay();
        }
      });
    });

    // Fallback: play on any user interaction
    const playOnInteraction = function() {
      console.log('User interaction detected, playing video');
      tryPlay();
    };

    document.addEventListener('click', playOnInteraction, { once: true });
    document.addEventListener('touchstart', playOnInteraction, { once: true });

    // Load the video
    console.log('Calling video.load()...');
    video.load();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
