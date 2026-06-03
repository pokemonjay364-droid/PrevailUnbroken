# Exports - Video Files

This folder contains the video files for the Rise Above Shorts series.

## Files

Place your MP4 video files here with the following naming convention:

- `01-the-3-second-rule.mp4` - The 3 Second Rule
- `02-your-worst-day-is-your-best-teacher.mp4` - Your Worst Day is Your Best Teacher
- `03-fall-7-times-rise-8.mp4` - Fall 7 Times, Rise 8
- `04-the-bamboo-tree-secret.mp4` - The Bamboo Tree Secret
- `05-you-are-stronger-than-you-know.mp4` - You Are Stronger Than You Know

## Video Specifications

- **Format:** MP4 (H.264 codec)
- **Recommended Resolution:** 1920 x 1080 (1080p) or 1280 x 720 (720p)
- **Frame Rate:** 30fps
- **Audio Codec:** AAC
- **File Size:** Optimized for web streaming (50MB - 200MB per video)

## Adding Your Videos

1. Export your videos as MP4 files
2. Save them with the exact filenames listed above
3. Place them in this folder
4. Commit and push to your repository
5. The landing page will automatically enable the video player modal

## Video Playback

When users click the "Watch" button on a video card, the video player modal will:
- Load the corresponding MP4 file from this folder
- Display video controls (play, pause, volume, fullscreen)
- Allow users to watch or download the video

## Note on Large Files

If your video files are very large (>100MB each), consider:
- Further compressing the videos
- Using GitHub's Large File Storage (LFS)
- Hosting videos on a CDN (YouTube, Vimeo, etc.) and linking instead
