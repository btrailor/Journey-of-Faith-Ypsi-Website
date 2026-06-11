// Safari Video Debugging Script
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-carousel video");

  if (video) {
    console.log("🎥 Video element found:", video);
    console.log("🎥 Video src:", video.currentSrc || video.src);
    console.log("🎥 Video attributes:", {
      autoplay: video.autoplay,
      muted: video.muted,
      loop: video.loop,
      playsInline: video.playsInline,
    });

    // Check if video can play
    video.addEventListener("canplay", () => {
      console.log("✅ Video can play");
    });

    video.addEventListener("canplaythrough", () => {
      console.log("✅ Video can play through");
    });

    video.addEventListener("loadstart", () => {
      console.log("🔄 Video load started");
    });

    video.addEventListener("loadeddata", () => {
      console.log("📊 Video data loaded");
    });

    video.addEventListener("loadedmetadata", () => {
      console.log("📋 Video metadata loaded");
      console.log(
        "🎥 Video dimensions:",
        video.videoWidth,
        "x",
        video.videoHeight
      );
      console.log("🎥 Video duration:", video.duration);
    });

    video.addEventListener("error", (e) => {
      console.error("❌ Video error:", e);
      console.error("❌ Video error code:", video.error?.code);
      console.error("❌ Video error message:", video.error?.message);
    });

    video.addEventListener("play", () => {
      console.log("▶️ Video started playing");
    });

    video.addEventListener("pause", () => {
      console.log("⏸️ Video paused");
    });

    // Try to force play after a delay (for Safari autoplay restrictions)
    setTimeout(() => {
      if (video.paused) {
        console.log("🔧 Attempting to force play video...");
        video
          .play()
          .then(() => {
            console.log("✅ Force play successful");
          })
          .catch((error) => {
            console.error("❌ Force play failed:", error);
          });
      }
    }, 1000);

    // Check if video is actually visible and positioned correctly
    setTimeout(() => {
      const rect = video.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(video);
      console.log("🎥 Video position:", rect);
      console.log("🎥 Video computed styles:", {
        position: computedStyle.position,
        display: computedStyle.display,
        width: computedStyle.width,
        height: computedStyle.height,
        zIndex: computedStyle.zIndex,
        objectFit: computedStyle.objectFit,
      });
    }, 2000);
  } else {
    console.error("❌ Video element not found!");
  }
});
