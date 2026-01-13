# GitHub Setup Guide for Untitled UI

Follow these steps to publish your design system to GitHub and allow others to install it.

---

## 📋 Step-by-Step Guide

### **Step 1: Initialize Git Repository (if not already done)**

```bash
cd "C:\Users\Boni\OneDrive\Desktop\Untitled UI"

# Initialize git
git init

# Check status
git status
```

### **Step 2: Build the Package**

```bash
# Build everything before committing
npm run build
```

This creates the `dist/` folder and processes all icons.

### **Step 3: Create Initial Commit**

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Untitled UI Design System

- 5 core components (Button, ButtonGroup, Icon, Logo, SocialButton)
- 595+ icons across 7 types
- Complete design token system
- Theme provider with light/dark mode
- Full TypeScript support"
```

### **Step 4: Create GitHub Repository**

1. **Go to GitHub**: https://github.com/new

2. **Fill in details**:
   - Repository name: `untitled-ui` (or your choice)
   - Description: "A comprehensive React design system with design tokens, components, and 595+ icons"
   - Visibility: **Public** (so anyone can install it)
   - **DO NOT** initialize with README, .gitignore, or license (you already have these)

3. **Click "Create repository"**

### **Step 5: Connect Local Repo to GitHub**

GitHub will show you commands like these (use YOUR repository URL):

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/untitled-ui.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example** (replace with your username):
```bash
git remote add origin https://github.com/boni/untitled-ui.git
git branch -M main
git push -u origin main
```

---

## ✅ Verification

After pushing, go to your GitHub repository. You should see:
- ✅ All your files
- ✅ README.md displayed
- ✅ Source code in `src/`
- ✅ Built files in `dist/`
- ✅ Assets in `Assets/`

---

## 📦 Installing from GitHub

### **Anyone can now install your package:**

```bash
# Install from GitHub
npm install git+https://github.com/YOUR_USERNAME/untitled-ui.git

# Or with yarn
yarn add git+https://github.com/YOUR_USERNAME/untitled-ui.git
```

### **Install specific version/branch/commit:**

```bash
# Specific branch
npm install git+https://github.com/YOUR_USERNAME/untitled-ui.git#branch-name

# Specific tag
npm install git+https://github.com/YOUR_USERNAME/untitled-ui.git#v0.1.0

# Specific commit
npm install git+https://github.com/YOUR_USERNAME/untitled-ui.git#commit-hash
```

---

## 🏷️ Creating Releases (Recommended)

Create version tags for easier installation:

```bash
# Tag current version
git tag v0.1.0

# Push tag to GitHub
git push origin v0.1.0
```

Then users can install specific versions:
```bash
npm install git+https://github.com/YOUR_USERNAME/untitled-ui.git#v0.1.0
```

---

## 📝 Updating the Package

When you make changes:

```bash
# 1. Build
npm run build

# 2. Commit changes
git add .
git commit -m "Add new features..."

# 3. Update version (optional)
npm version patch  # 0.1.0 → 0.1.1
# or
npm version minor  # 0.1.0 → 0.2.0
# or
npm version major  # 0.1.0 → 1.0.0

# 4. Push to GitHub
git push origin main
git push --tags
```

Users can then update:
```bash
npm update @boni/untitled-ui
# or reinstall
npm install git+https://github.com/YOUR_USERNAME/untitled-ui.git
```

---

## 🎯 What Gets Uploaded to GitHub

### ✅ **Included** (committed to Git):
- Source code (`src/`)
- Assets (`Assets/`)
- Build scripts (`scripts/`)
- Configuration files
- Documentation
- Built package (`dist/`)
- Processed icons (`public/icons/`)

### ❌ **Excluded** (in .gitignore):
- `node_modules/`
- Log files
- IDE settings
- Temporary files

---

## 🌐 Making it Public

Your repository is already set to **Public** when you created it, which means:

✅ Anyone can view the code
✅ Anyone can install it via Git URL
✅ Anyone can fork it
✅ Anyone can contribute (if you allow)

---

## 📖 Adding Repository Info to package.json

Update your `package.json` to include repository info:

```json
{
  "name": "@boni/untitled-ui",
  "version": "0.1.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/YOUR_USERNAME/untitled-ui.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/untitled-ui/issues"
  },
  "homepage": "https://github.com/YOUR_USERNAME/untitled-ui#readme"
}
```

---

## 🚀 Next Steps (Optional)

### **1. Add GitHub Actions for CI/CD**
Automatically build and test on push.

### **2. Enable GitHub Pages**
Host documentation website.

### **3. Add Contributing Guidelines**
Create `CONTRIBUTING.md` for contributors.

### **4. Publish to npm**
Make it even easier to install:
```bash
npm publish --access public
```

Then users can install with:
```bash
npm install @boni/untitled-ui
```

---

## ❓ Troubleshooting

### **"Permission denied" error?**
You might need to authenticate:
```bash
# Use personal access token
git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/untitled-ui.git
```

### **"Repository not found"?**
- Check the URL is correct
- Make sure repository is created on GitHub
- Check repository is public

### **Large files error?**
If you have very large assets:
```bash
# Use Git LFS for large files
git lfs install
git lfs track "*.svg"
```

---

## 📞 Support

If you need help:
1. Check GitHub's documentation: https://docs.github.com
2. Open an issue in your repository
3. Ask in GitHub Discussions

---

**You're all set!** 🎉

Your design system is now on GitHub and anyone can install it with:
```bash
npm install git+https://github.com/YOUR_USERNAME/untitled-ui.git
```
