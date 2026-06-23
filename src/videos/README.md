# Video Files

Place your hero video files in this directory.

Required files for the homepage hero:
- `JOFHeroVideo.mp4` — forward-play version
- `JOFHeroVideo_reversed.mp4` — reversed version (used for the seamless forward/backward loop)

## Current Hero Video

- **Source**: `/Users/brettgershon/Downloads/JOFherovideo.mp4`
- **Loop**: forward → reverse → forward, with no pause, for smooth seamless motion.

## Video Recommendations

For best results:
- **Format**: MP4 (H.264 codec)
- **Duration**: 3–10 seconds
- **Resolution**: 1280x720 or 1920x1080
- **Aspect Ratio**: 16:9
- **File Size**: Keep under 1MB per clip for fast loading
- **Audio**: removed (videos autoplay muted)

## Optimization Tips

1. Compress videos before uploading (use tools like HandBrake, ffmpeg, or online compressors)
2. Remove audio if not needed (videos autoplay muted)
3. Keep clips focused on people and community moments
4. Ensure good lighting and quality

To regenerate the reversed clip with ffmpeg:

```bash
ffmpeg -y -i src/videos/JOFHeroVideo.mp4 -vf reverse -c:v libx264 -crf 28 -preset fast -movflags +faststart -an src/videos/JOFHeroVideo_reversed.mp4
```
