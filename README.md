# แรงแม่เหล็กระหว่างสายไฟที่มีกระแสไฟฟ้าขนาน
# Magnetic Force Between Parallel Current-Carrying Wires

เว็บไซต์การศึกษาเชิงโต้ตอบเกี่ยวกับแรงแม่เหล็กระหว่างสายไฟที่มีกระแสไฟฟ้าขนาน สร้างด้วย React + Vite

An interactive educational website about magnetic force between parallel current-carrying wires, built with React + Vite.

## ✨ Features

- 🧲 **บทนำที่เข้าใจง่าย** - คำอธิบายที่ชัดเจนพร้อมตัวอย่างการใช้งานจริง
- 📜 **ประวัติศาสตร์** - Timeline ของการค้นพบตั้งแต่ Ampère ถึง Biot-Savart
- 📐 **สูตรและคำอธิบาย** - อธิบายสัญลักษณ์และความหมายทางฟิซิกส์
- 🎨 **แผนภาพ SVG แบบโต้ตอบ** - แสดงทิศทางกระแสไฟฟ้า สนามแม่เหล็ก และแรง
- 🧮 **เครื่องคำนวณแบบเรียลไทม์** - คำนวณแรงพร้อมแสดงผลแรงดึงดูด/ผลัก
- 📝 **ตัวอย่างโจทย์** - โจทย์พร้อมเฉลยละเอียดทีละขั้นตอน
- 🔬 **การตรวจสอบหน่วย** - Dimensional analysis แบบละเอียด
- ⚡ **การกำหนดหน่วยแอมแปร์** - อธิบายประวัติศาสตร์และนิยามใหม่ปี 2019

## 🚀 Technology Stack

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and dev server
- **Vanilla CSS** - Custom design system with CSS variables
- **SVG** - Scalable vector graphics for diagrams
- **No external dependencies** - Fully offline-friendly

## 📦 Installation

Since npm/npx commands may have PowerShell execution policy restrictions, you can install dependencies using:

\`\`\`bash
# Option 1: Using npm directly (if allowed)
npm install

# Option 2: Using PowerShell bypass
powershell -ExecutionPolicy Bypass -Command "npm install"

# Option 3: Change execution policy temporarily (as Administrator)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install
\`\`\`

## 🛠️ Development

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

The site will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:

\`\`\`bash
npm run build
\`\`\`

Preview the production build:

\`\`\`bash
npm run preview
\`\`\`

## 🌐 GitHub Pages Deployment

### Step 1: Update vite.config.js

Make sure the `base` path in `vite.config.js` matches your repository name:

\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repo name
})
\`\`\`

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub
2. Initialize git in your project:

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
\`\`\`

### Step 3: Deploy to GitHub Pages

\`\`\`bash
npm run deploy
\`\`\`

This will:
1. Build the production version
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **gh-pages** branch
4. Click **Save**

Your site will be available at: `https://your-username.github.io/your-repo-name/`

## 📁 Project Structure

\`\`\`
web/
├── index.html                 # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── .gitignore               # Git ignore rules
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles and design system
│   └── components/
│       ├── IntroductionSection.jsx
│       ├── HistorySection.jsx
│       ├── FormulaSection.jsx
│       ├── DiagramSection.jsx
│       ├── Calculator.jsx
│       ├── ExampleProblemsSection.jsx
│       ├── UnitSanityCheckSection.jsx
│       └── AmpereDefinitionSection.jsx
└── dist/                    # Production build (generated)
\`\`\`

## 🎨 Design Features

- **Modern Dark Theme** - Easy on the eyes with vibrant accent colors
- **Gradient Text** - Beautiful gradient headings
- **Glassmorphism** - Frosted glass effect on cards
- **Smooth Animations** - Fade-in effects and hover transitions
- **Responsive Design** - Works on all screen sizes
- **Thai Language Support** - Full Thai language with English technical terms

## 🧮 Physics Content

The website covers:

1. **F/L = (μ₀ I₁ I₂) / (2π d)** - Main formula
2. **Attraction vs Repulsion** - Based on current direction
3. **Dimensional Analysis** - Unit verification (N/m)
4. **Historical Context** - Ampère's discovery and SI unit definition
5. **Practical Examples** - Step-by-step problem solving

## 📚 Educational Value

Perfect for:
- Physics students learning electromagnetism
- Teachers looking for interactive demonstrations
- Anyone interested in the history of physics and SI units

## 🤝 Contributing

Feel free to fork this project and make improvements!

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- André-Marie Ampère for the original discovery
- The physics education community
- All students and teachers using this resource

---

Made with ❤️ for physics education
