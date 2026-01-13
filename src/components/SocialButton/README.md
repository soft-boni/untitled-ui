# Social Button Component

Pre-styled social media buttons with brand colors and platform icons. Fully integrated with the design system tokens.

## Features

- **30+ Platforms**: Facebook, Google, GitHub, Twitter/X, LinkedIn, Instagram, and many more
- **2 Styles**: Brand (with platform's brand colors) and Gray
- **3 Sizes**: sm, md, lg
- **Icon + Text**: Show just icon or add platform name
- **Design System**: Uses design tokens for spacing, radius, colors
- **Dark Mode**: Full dark mode support
- **Accessibility**: ARIA labels, keyboard navigation

## Supported Platforms

### Popular
- Facebook, Google, GitHub, LinkedIn, Instagram
- Twitter, X (Twitter), YouTube
- Apple, Microsoft

### Developer Tools
- Figma, Framer, Webflow, Notion
- GitHub, Slack, Discord

### Social & Communication
- WhatsApp, Telegram, Signal
- TikTok, Snapchat, Reddit, Pinterest

### Services
- Stripe, PayPal, Wise
- Spotify, Twitch, YouTube

**And many more!** See full list in TypeScript types.

## Basic Usage

### Icon Only (Default)
```tsx
import { SocialButton } from '@boni/untitled-ui';

// Just the icon - perfect for social media link bars
<SocialButton platform="github" />
<SocialButton platform="twitter" />
<SocialButton platform="linkedin" />
```

### With Text
```tsx
// Show platform name
<SocialButton platform="google" showText />

// Custom text
<SocialButton 
  platform="facebook" 
  showText 
  text="Continue with Facebook"
/>

<SocialButton 
  platform="github" 
  showText 
  text="Sign in with GitHub"
/>
```

## Styles

### Brand Style (Default)
Shows platform's authentic brand colors in the icon:

```tsx
<SocialButton platform="facebook" />  {/* Blue Facebook icon */}
<SocialButton platform="google" />    {/* Colorful Google icon */}
<SocialButton platform="github" />    {/* Black GitHub icon */}
<SocialButton platform="instagram" /> {/* Gradient Instagram icon */}
```

### Gray Style  
Monochrome grayscale version:

```tsx
<SocialButton platform="twitter" style="gray" />
<SocialButton platform="linkedin" style="gray" />
```

## Sizes

```tsx
<SocialButton platform="github" size="sm" />   {/* 36px */}
<SocialButton platform="github" size="md" />   {/* 40px - default */}
<SocialButton platform="github" size="lg" />   {/* 44px */}

// With text
<SocialButton platform="google" showText size="lg" />
```

## Common Patterns

### Social Login
```tsx
<div className="social-login">
  <SocialButton 
    platform="google" 
    showText 
    text="Continue with Google"
    fullWidth
  />
  <SocialButton 
    platform="github" 
    showText 
    text="Continue with GitHub"
    fullWidth
  />
  <SocialButton 
    platform="facebook" 
    showText 
    text="Continue with Facebook"
    fullWidth
  />
</div>
```

### Social Media Links
```tsx
<div className="social-links">
  <SocialButton platform="twitter" onClick={() => window.open('https://twitter.com/...')} />
  <SocialButton platform="linkedin" onClick={() => window.open('https://linkedin.com/...')} />
  <SocialButton platform="github" onClick={() => window.open('https://github.com/...')} />
  <SocialButton platform="dribbble" onClick={() => window.open('https://dribbble.com/...')} />
</div>
```

### Share Buttons
```tsx
<div className="share-buttons">
  <SocialButton platform="facebook" showText text="Share on Facebook" />
  <SocialButton platform="twitter" showText text="Tweet" />
  <SocialButton platform="linkedin" showText text="Share on LinkedIn" />
</div>
```

### Developer Tools
```tsx
<div className="integrations">
  <SocialButton platform="figma" showText />
  <SocialButton platform="notion" showText />
  <SocialButton platform="slack" showText />
  <SocialButton platform="github" showText />
</div>
```

### Payment Methods
```tsx
<div className="payment-options">
  <SocialButton platform="stripe" showText size="lg" />
  <SocialButton platform="paypal" showText size="lg" />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `platform` | `SocialPlatform` | Required | Social media platform |
| `style` | `'brand' \| 'gray'` | `'brand'` | Button style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `showText` | `boolean` | `false` | Show platform name |
| `text` | `string` | Platform name | Custom text override |
| `fullWidth` | `boolean` | `false` | Full width button |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `(e: MouseEvent) => void` | - | Click handler |
| `className` | `string` | `''` | Additional CSS classes |

**Plus all standard HTML button attributes!**

## TypeScript

Full TypeScript support:

```tsx
import type { 
  SocialButtonProps, 
  SocialPlatform,
  SocialButtonStyle,
  SocialButtonSize
} from '@boni/untitled-ui';

const platform: SocialPlatform = 'github';
const style: SocialButtonStyle = 'brand';
```

### All Platforms Type
```typescript
type SocialPlatform =
  | 'angellist'
  | 'apple'
  | 'clubhouse'
  | 'discord-01' | 'discord-02'
  | 'dribbble'
  | 'facebook'
  | 'figma'
  | 'framer-01' | 'framer-02'
  | 'github'
  | 'google'
  | 'instagram'
  | 'layers'
  | 'linkedin'
  | 'notion'
  | 'paypal'
  | 'pinterest'
  | 'reddit'
  | 'signal'
  | 'slack'
  | 'snapchat'
  | 'spotify'
  | 'stripe'
  | 'telegram'
  | 'tiktok'
  | 'tumblr'
  | 'twitch'
  | 'twitter'
  | 'webflow'
  | 'whatsapp'
  | 'wise'
  | 'x-twitter' // X (formerly Twitter)
  | 'youtube';
```

## Design System Integration

This component uses design tokens for all styling:

```tsx
import { spacing } from '../../tokens/spacing';
import { radius } from '../../tokens/radius';

// Spacing: spacing.sm, spacing.md, spacing.lg, spacing.xl
// Radius: radius.md for consistent border radius
// Colors: semantic color tokens for all states
```

**Benefits:**
- ✅ Consistent with entire design system
- ✅ Easy to theme
- ✅ Automatic dark mode
- ✅ Responsive sizing based on tokens

## Dark Mode

Automatic dark mode support:

```tsx
<ThemeProvider>
  <SocialButton platform="github" />  {/* Auto dark mode */}
</ThemeProvider>
```

Dark mode adjusts:
- Background colors
- Border colors
- Text colors
- Hover states

## Accessibility

- ✅ Semantic `<button>` element
- ✅ ARIA labels with platform name
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader friendly

## Real-World Examples

### Full Login Page
```tsx
function LoginPage() {
  return (
    <div className="login-container">
      <h1>Sign in to Your Account</h1>
      
      <div className="social-login">
        <SocialButton 
          platform="google" 
          showText 
          text="Continue with Google"
          fullWidth
          onClick={handleGoogleLogin}
        />
        <SocialButton 
          platform="github" 
          showText 
          text="Continue with GitHub"
          fullWidth
          onClick={handleGitHubLogin}
        />
      </div>
      
      <div className="divider">or</div>
      
      <form>{/* Email/password form */}</form>
    </div>
  );
}
```

### Footer Social Links
```tsx
function Footer() {
  const socialLinks = [
    { platform: 'twitter', url: 'https://twitter.com/...' },
    { platform: 'linkedin', url: 'https://linkedin.com/...' },
    { platform: 'github', url: 'https://github.com/...' },
    { platform: 'youtube', url: 'https://youtube.com/...' },
  ];
  
  return (
    <footer>
      <div className="footer-social">
        {socialLinks.map(({ platform, url }) => (
          <SocialButton
            key={platform}
            platform={platform}
            onClick={() => window.open(url, '_blank')}
          />
        ))}
      </div>
    </footer>
  );
}
```

### Integration Settings
```tsx
function Integrations() {
  const [connected, setConnected] = useState({
    slack: true,
    github: false,
    notion: false,
  });
  
  return (
    <div>
      <h2>Connected Services</h2>
      
      <div className="integration-list">
        <div className="integration-item">
          <SocialButton platform="slack" size="lg" />
          <div>
            <h3>Slack</h3>
            <p>Team communication</p>
          </div>
          {connected.slack ? (
            <Button hierarchy="secondary">Disconnect</Button>
          ) : (
            <SocialButton platform="slack" showText text="Connect Slack" />
          )}
        </div>
        {/* More integrations... */}
      </div>
    </div>
  );
}
```

---

**Perfect for authentication flows, social sharing, and service integrations!** 🎉
