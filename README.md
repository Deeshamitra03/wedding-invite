# 💍 Bengali × Tamil — A Two States Wedding Invitation

An interactive digital wedding invitation that brings together **Bengali and Tamil traditions** in one modern, beautifully animated web experience.

This project blends the colors, cultural elements, music, imagery, and traditions of **two states and two cultures**, while keeping the invitation simple, elegant, and accessible across desktop and mobile devices.

## ✨ Two States. Two Cultures. One Celebration.

The invitation features a seamless **Bengali ↔ Tamil theme switch**, allowing guests to experience the celebration through either cultural theme.

### 🇧🇩 Bengali Theme

* Bengali-inspired wedding aesthetics
* Bengali invitation text
* Bengali wedding imagery
* Bengali wedding music
* Traditional Bengali decorative elements

### 🇮🇳 Tamil Theme

* Tamil-inspired wedding imagery
* Tamil invitation text
* Tamil wedding music
* Tamil cultural elements
* Theme-specific couple illustration

The English portions of the invitation remain unchanged across both themes.

---

## ❤️ The Idea

The concept behind the invitation is simple:

> **Two States. Two Cultures. One Love Story.**

The website combines elements from Bengali and Tamil traditions into a single interactive invitation, creating a digital experience that feels personal while celebrating both sides equally.

---

## 🌸 Highlights

* Interactive invitation opening screen
* Bengali-inspired visual design
* Tamil-inspired visual design
* Bengali ↔ Tamil theme toggle
* Theme-specific music
* Theme-specific imagery
* Animated transitions
* Wedding journey timeline
* Wedding event details
* Venue information
* Couple memories and photographs
* Responsive desktop and mobile design
* Music controls
* Traditional Indian wedding motifs

---

## 💫 Made With Love

A digital celebration bringing together:

**Bengali × Tamil**
**Two States × Two Cultures**
**One Celebration × One Love Story**

Built as a modern take on the traditional Indian wedding invitation. ❤️


## 🚀 Using This Repository

You can use this repository as a starting point to create your own **Bengali, Tamil, or other two-culture wedding invitation website**.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Deeshamitra03/wedding-invite.git
```

Then move into the project directory:

```bash
cd wedding-invite
```

### 2. Install Dependencies

Install all required packages:

```bash
npm install
```

### 3. Run the Website Locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

---

## 🛠️ Customize the Invitation

You can customize the invitation for your own wedding by changing the information, images, music, and theme content.

### Wedding Information

The main wedding details can be customized through:

```text
src/config.js
```

This includes information such as:

* Bride's name
* Groom's name
* Wedding events
* Dates
* Times
* Venue
* Invitation messages
* Music configuration

---

### 🖼️ Replace Images

Place your own images inside:

```text
public/images/
```

For example:

```text
public/images/
├── frontpage-bg.png
├── couple_art.png
├── tamil-couple.png
├── wedding-logo.jpeg
├── engagement.png
├── wedding.png
└── reception.png
```

When referencing images from React, use:

```jsx
<img src="/images/your-image.png" />
```

Do **not** include `public` in the path.

---

### 🎵 Replace Music

Place your music files inside:

```text
public/music/
```

For example:

```text
public/music/
├── wedding-song.mp3
└── tamil-song.mp3
```

The Bengali/Tamil theme switch can then use different songs for each theme.

---

## 🌏 Creating Your Own Two-Culture Theme

The existing project demonstrates a **Bengali ↔ Tamil** theme switch.

You can adapt the same structure for other combinations, for example:

```text
Bengali ↔ Tamil
Bengali ↔ Telugu
Tamil ↔ Hindi
Punjabi ↔ Bengali
North India ↔ South India
```

The basic idea is:

```text
Default Theme
      ↓
User opens invitation
      ↓
Choose cultural theme
      ↓
┌─────────────────┐
│ Theme A         │
│ Theme B         │
└─────────────────┘
      ↓
Change:
• Cultural text
• Main imagery
• Music
• Decorative elements
```

The English portions of the website can remain common between both themes.

---

## 🌐 Deploy Your Own Version

After customizing the invitation, create a production build:

```bash
npm run build
```

If the build completes successfully, the project can be deployed using platforms such as Vercel.

### Git Workflow

Create your own branch when making major changes:

```bash
git checkout -b my-wedding-theme
```

Add your changes:

```bash
git add .
```

Commit them:

```bash
git commit -m "Customize wedding invitation"
```

Push the new branch:

```bash
git push -u origin my-wedding-theme
```

After the branch has been connected to the remote repository, future changes can be pushed with:

```bash
git push
```

---

## 💡 Recommended Workflow

When customizing the repository, it is recommended to work in a separate branch rather than directly modifying `main`.

```text
main
│
├── my-wedding-theme
│
└── experimental-changes
```

This keeps the stable version safe while allowing you to experiment with:

* New themes
* New images
* New music
* Different layouts
* Additional wedding events
* New animations
* Different cultural designs

Once everything works correctly, the branch can be merged into `main`.

