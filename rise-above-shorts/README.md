# Rise Above Shorts - Overcoming Series

A modern, responsive landing page for the "Rise Above Shorts" video series - an inspiring collection of short videos designed to help you overcome life's greatest challenges.

## 📁 Project Structure

```
rise-above-shorts/
├── index.html                    ← Main landing page
├── styles.css                    ← Complete styling with responsive design
├── script.js                     ← JavaScript for video playback
├── README.md                     ← This file
├── assets/
│   └── thumbnails/
│       ├── 01-3-second-rule.jpg
│       ├── 02-worst-day-teacher.jpg
│       ├── 03-fall-7-rise-8.jpg
│       ├── 04-bamboo-tree-secret.jpg
│       └── 05-you-are-stronger.jpg
├── pdfs/
│   └── Overcoming-Shorts-Series-Companion-Guide.pdf
└── exports/                      ← (optional) Generated .mp4 video files
    ├── 01-the-3-second-rule.mp4
    ├── 02-your-worst-day-is-your-best-teacher.mp4
    ├── 03-fall-7-times-rise-8.mp4
    ├── 04-the-bamboo-tree-secret.mp4
    └── 05-you-are-stronger-than-you-know.mp4
```

## 🎯 Features

### Landing Page
- ✨ Modern, responsive design
- 📱 Mobile-first approach (works on all devices)
- 🎬 Video card grid with hover effects
- 🎥 Built-in video player modal
- 📥 PDF companion guide download
- 🎨 Gradient backgrounds and smooth animations
- 🔍 SEO-optimized metadata

### Video Series Included
1. **The 3 Second Rule** - Master immediate action
2. **Your Worst Day is Your Best Teacher** - Learn from struggles
3. **Fall 7 Times, Rise 8** - Discover resilience
4. **The Bamboo Tree Secret** - Understand hidden growth
5. **You Are Stronger Than You Know** - Unlock your potential

## 🚀 How to Use

### Local Development
1. Clone the repository
2. Open `index.html` in your web browser
3. Add video files to the `exports/` folder with the correct naming:
   - `01-the-3-second-rule.mp4`
   - `02-your-worst-day-is-your-best-teacher.mp4`
   - `03-fall-7-times-rise-8.mp4`
   - `04-the-bamboo-tree-secret.mp4`
   - `05-you-are-stronger-than-you-know.mp4`

### GitHub Pages Deployment
1. Go to your repository Settings
2. Navigate to **Pages** (left sidebar)
3. Under "Source", select:
   - **Deploy from a branch**
   - **Branch:** main
   - **Folder:** / (root)
4. Click Save
5. Your site will be live at: `https://yourusername.github.io/PrevailUnbroken/rise-above-shorts/`

## 📥 Adding Your Content

### Thumbnails
1. Place your thumbnail images in `assets/thumbnails/`
2. Name them exactly as shown in the file structure
3. Recommended size: 1280x720px (16:9 aspect ratio)
4. Supported formats: JPG, PNG, WebP

### Video Files
1. Place your MP4 video files in the `exports/` folder
2. Use the exact naming convention: `XX-descriptive-name.mp4`
3. Recommended format: MP4 with H.264 codec
4. Supported formats: MP4, WebM, OGG

### PDF Guide
1. Place your companion guide PDF in the `pdfs/` folder
2. Name it: `Overcoming-Shorts-Series-Companion-Guide.pdf`
3. The download button will automatically work

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #ff6b35;      /* Orange - main color */
    --secondary-color: #004e89;    /* Blue - headers */
    --accent-color: #f7931e;       /* Gold - highlights */
}
```

### Fonts
The site uses system fonts for fast loading. To change fonts, edit the `font-family` in `styles.css`:
```css
body {
    font-family: 'Your Font Here', fallback, sans-serif;
}
```

### Video Titles
Edit the `videoMap` object in `script.js` to change video titles:
```javascript
const videoMap = {
    '01': 'Your Custom Title',
    '02': 'Another Title',
    // etc.
};
```

## 💻 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- Lightweight landing page (~50KB HTML/CSS/JS)
- Lazy loading for images
- Responsive images for mobile
- Optimized video player
- No external dependencies

## 🔒 Security

- XSS protection via proper HTML escaping
- No external API calls
- No user data collection
- HTTPS ready for GitHub Pages

## 📝 License

This project is open source and available for educational and personal use.

## 🤝 Support

For issues or suggestions, please open an issue in the repository.

## 🎬 Next Steps

1. ✅ Upload thumbnail images to `assets/thumbnails/`
2. ✅ Upload video files to `exports/`
3. ✅ Upload PDF guide to `pdfs/`
4. ✅ Enable GitHub Pages in repository settings
5. ✅ Share your landing page URL

---

**Rise Above. Overcome. Thrive.** 🚀
