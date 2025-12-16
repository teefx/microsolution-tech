# Image Export & Setup Guide

## 📦 Folder Structure Created

The following folders have been created in `/public/assets/`:

```
/public/assets/
├── logo/           - Company logo
├── hero/           - Hero section images
├── about/          - About section images
├── services/       - Service card images
├── contact/        - Contact section images
└── clients/        - Client logo images
```

## 🎨 Images to Export from Figma

You need to export **12 images** from your Figma design file. Here's the complete list:

### 1. Company Logo
- **Figma Layer**: Find the MicroSolutions logo layer
- **Export as**: `microsolutions-logo.png`
- **Place in**: `/public/assets/logo/`
- **Used in**: Navigation, Footer, SEO meta tags

### 2. Hero Section
- **Figma Layer**: Hero background image
- **Export as**: `hero-background.png`
- **Place in**: `/public/assets/hero/`
- **Used in**: Hero section background

### 3. About Section
- **Figma Layer**: Office/team photo
- **Export as**: `office-team.png`
- **Place in**: `/public/assets/about/`
- **Used in**: About section

### 4-7. Service Images (4 images)
Export these service card images:
- **MSConsult image** → `consulting-service.png`
- **MSSoft image** → `software-service.png`
- **MSCom image** → `system-integration-service.png`
- **MSMan image** → `maintenance-service.png`
- **Place all in**: `/public/assets/services/`

### 8. Contact Section
- **Figma Layer**: Contact background image
- **Export as**: `contact-background.png`
- **Place in**: `/public/assets/contact/`
- **Used in**: Contact section background

### 9-13. Client Logos (5 images)
Export the 5 client logo images:
- **Client 1** → `client-logo-1.png`
- **Client 2** → `client-logo-2.png`
- **Client 3** → `client-logo-3.png`
- **Client 4** → `client-logo-4.png`
- **Client 5** → `client-logo-5.png`
- **Place all in**: `/public/assets/clients/`

## 📤 How to Export from Figma

1. Open your Figma design file
2. Select the image layer you want to export
3. In the right sidebar, scroll to "Export" section
4. Click "+ Add export setting" if not already visible
5. Choose format: **PNG** (recommended)
6. Choose scale: **2x** or **3x** for better quality
7. Click "Export [layer name]"
8. Rename the downloaded file according to the naming above
9. Place it in the correct folder

## ✅ Quick Checklist

After exporting from Figma, place the files like this:

- [ ] `/public/assets/logo/microsolutions-logo.png`
- [ ] `/public/assets/hero/hero-background.png`
- [ ] `/public/assets/about/office-team.png`
- [ ] `/public/assets/services/consulting-service.png`
- [ ] `/public/assets/services/software-service.png`
- [ ] `/public/assets/services/system-integration-service.png`
- [ ] `/public/assets/services/maintenance-service.png`
- [ ] `/public/assets/contact/contact-background.png`
- [ ] `/public/assets/clients/client-logo-1.png`
- [ ] `/public/assets/clients/client-logo-2.png`
- [ ] `/public/assets/clients/client-logo-3.png`
- [ ] `/public/assets/clients/client-logo-4.png`
- [ ] `/public/assets/clients/client-logo-5.png`

## 🚀 After Adding Images

Once you've placed all images in their folders:

1. **Delete the `.gitkeep` files** in each folder (they're just placeholders)
2. **Test locally**: Run `npm run dev` and check if all images load
3. **Commit to Git**: The images will now be part of your repository
4. **Deploy**: Images will work in production (Vercel/Netlify/etc.)

## 🔧 Already Updated Files

The following files have been automatically updated to use local image paths:

- ✅ `/constants/images.ts` - All image imports updated
- ✅ Components automatically use the updated paths (no changes needed)

## 💡 Benefits of Local Images

- ✅ Works in GitHub/VS Code/local development
- ✅ Works in production environments
- ✅ Full control over image optimization
- ✅ Can be committed to version control
- ✅ No dependency on Figma's virtual assets

## ⚠️ Important Notes

- Use **PNG format** for images with transparency (logos)
- Use **JPG format** for photographs (if smaller file size needed)
- Export at **2x or 3x** resolution for Retina displays
- Keep file sizes reasonable (compress if needed)
- Maintain exact file names as specified above
