# Image Organization Guide

## Overview
All images are centrally managed through `/constants/images.ts` for better organization, maintainability, and code clarity.

## Image Naming Convention

### Company Branding
- **microsolutionsLogo** - Main company logo used in navigation and footer
  - Hash: `3c8f572fa709f1fcc9d13a7d8671fd834447e28e.png`
  - Usage: Hero, Mobile Menu

### Hero Section
- **heroBackgroundImage** - Background image for the hero section
  - Hash: `731a94b6ef866d61b87135be7b704b5b856b81b5.png`
  - Usage: Hero section background

### About Section
- **officeTeamImage** - Office/team photo for about section
  - Hash: `aab56357e46973d47203a84d09fd734d4bf3ad2f.png`
  - Usage: About section

### Services Section
- **consultingServiceImage** - MSConsult service card image
  - Hash: `f18d9f2546b222348d2781bfd9780eae72779acf.png`
  - Usage: Services section (MSConsult card)

- **softwareServiceImage** - MSSoft service card image
  - Hash: `55e00dc0eb5c24271b875522c6d4d472e4ecb492.png`
  - Usage: Services section (MSSoft card)

- **systemIntegrationServiceImage** - MSCom service card image
  - Hash: `46eb76052b99d12158b5280236fc41f161e0277c.png`
  - Usage: Services section (MSCom card + CTA card)

- **maintenanceServiceImage** - MSMan service card image
  - Hash: `7e86dcc18082fd6f2437420b9cf5b2bb8dfadac6.png`
  - Usage: Services section (MSMan card)

### Contact Section
- **contactBackgroundImage** - Background for contact form
  - Hash: `d5a58f10a6e48a20391bd7aaca32353a901a9c5e.png`
  - Usage: Contact section background and decorative image

### Client Logos
- **clientLogo1** through **clientLogo5** - Client/partner logos
  - Hashes:
    - clientLogo1: `de6ac59c25ca88d54156bddc8250ae273fd0dac1.png`
    - clientLogo2: `390dba836a7ca7a16c112eeffead36fe730666a7.png`
    - clientLogo3: `10bee8643401262ec4749e9d46e090c22a843ba9.png`
    - clientLogo4: `df2a4cf187fae4e685a5fa131d24fc635b6b41bd.png`
    - clientLogo5: `1e6135036b26db601f23f146ab62b4aad491da34.png`
  - Usage: ClientLogos section

## How to Use

### Import images in your component:
```typescript
import { microsolutionsLogo, heroBackgroundImage } from '../constants/images';
```

### Use in JSX:
```tsx
<img src={microsolutionsLogo} alt="MicroSolutions Logo" />
```

## Benefits

1. **Single Source of Truth**: All image references in one place
2. **Easy Updates**: Change image path once, updates everywhere
3. **Better Code Completion**: IDE autocomplete for image names
4. **Descriptive Names**: Clear, semantic names instead of hash codes
5. **Type Safety**: TypeScript ensures correct image imports
6. **Easy Refactoring**: Easy to find and replace image usage

## File Structure

```
/constants
  └── images.ts          # Central image registry

/components
  ├── Hero.tsx           # Uses: microsolutionsLogo, heroBackgroundImage
  ├── About.tsx          # Uses: officeTeamImage
  ├── Services.tsx       # Uses: all service images
  ├── Contact.tsx        # Uses: contactBackgroundImage
  └── ClientLogos.tsx    # Uses: clientLogo1-5
```

## Maintenance

When adding new images:
1. Add the import and export to `/constants/images.ts`
2. Use a descriptive, semantic name
3. Document the usage in this guide
4. Update the component to use the new image constant

## Migration Notes

All components have been migrated from direct `figma:asset` imports to using the centralized image constants. The original Figma import file (`MacBookPro141.tsx`) has been removed as it was redundant.
