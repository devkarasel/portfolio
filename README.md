# devkarasel Portfolio

A bold, creative Next.js 15 portfolio with a live contact form backend and GitHub API integration.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS animations
- **Animations**: CSS keyframes + react-intersection-observer
- **Backend**: Next.js API Routes + Nodemailer
- **Data**: GitHub REST API (auto-fetches your repos)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in your values
cp .env.local.example .env.local

# 3. Run dev server
npm run dev
```

Visit `http://localhost:3000`

---

## Deployment on Namecheap cPanel (Node.js App)

### Prerequisites
- Namecheap hosting plan that supports Node.js (e.g., Business/EasyWP or VPS)
- cPanel access with **Setup Node.js App** available

### Step-by-step

#### 1. Build the project locally
```bash
npm run build
```

#### 2. Upload files via cPanel File Manager or FTP
Upload the entire project folder (excluding `node_modules`) to your hosting.
Recommended path: `/home/yourusername/portfolio`

Files to upload:
- `.next/` (entire build output)
- `public/`
- `app/`
- `components/`
- `lib/`
- `package.json`
- `next.config.mjs`
- `.env.local` (with real values)

#### 3. Create the Node.js App in cPanel
1. Log in to cPanel
2. Go to **Software → Setup Node.js App**
3. Click **Create Application**
4. Fill in:
   - **Node.js version**: 20.x or higher
   - **Application mode**: Production
   - **Application root**: `portfolio` (your folder name)
   - **Application URL**: `yourdomain.com` or `portfolio.yourdomain.com`
   - **Application startup file**: `node_modules/.bin/next` ← or use `server.js` below
5. Click **Create**

#### 4. Install dependencies in cPanel terminal
In the Node.js App panel, click **Enter to the virtual environment** then run:
```bash
npm install
npm run build
```

#### 5. Set Startup File
Create a `server.js` in the project root:
```js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(process.env.PORT || 3000, () => {
    console.log('> Ready on port', process.env.PORT || 3000)
  })
})
```

Set this as startup file in cPanel Node.js settings.

#### 6. Set Environment Variables
In cPanel Node.js App, add your env variables (SMTP_HOST, SMTP_USER, etc.) under **Environment Variables**.

#### 7. Restart the app
Click **Restart** in the Node.js App panel.

---

## Customization

### Update your info
- **Name/bio**: Edit `components/About.tsx`
- **Skills**: Edit `components/Skills.tsx` — update skill names and levels
- **Stats**: Edit the numbers in `components/Hero.tsx`
- **Email**: Update `contact@devkarasel.com` in `components/Contact.tsx` and `Footer.tsx`
- **Projects**: Automatically pulled from GitHub API. To change repos, edit `PINNED_REPOS` in `app/page.tsx`

### Colors
Main theme colors are in `tailwind.config.ts`:
```
accent:  #FF4D00  (orange)
cyan:    #00E5FF
bg:      #07080A
surface: #0F1115
```

---

## Contact Form SMTP Setup (cPanel)

1. In cPanel, go to **Email → Email Accounts**
2. Create `contact@yourdomain.com`
3. Note the SMTP settings (usually `mail.yourdomain.com`, port 465 SSL)
4. Add to `.env.local`:
   ```
   SMTP_HOST=mail.yourdomain.com
   SMTP_PORT=465
   SMTP_USER=contact@yourdomain.com
   SMTP_PASS=your_password
   CONTACT_EMAIL=youremail@gmail.com
   ```
