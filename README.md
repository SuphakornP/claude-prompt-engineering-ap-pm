# Claude Prompt Engineering for AP PM

HTML presentation สำหรับสอนทีม Project Manager ของ AP Thailand ให้ใช้ Claude ได้เป็นงานขึ้น โดยเน้น 3 เรื่องหลัก: เขียน Prompt ให้ชัดเหมือน brief งานจริง, เลือกประเภท Claude ให้ตรงงาน, และเลือก Model ให้เหมาะกับความเสี่ยง/ความเร็ว/ความลึก

## Live Presentation

เปิด deck เวอร์ชัน public ได้ที่:

https://suphakornp.github.io/claude-prompt-engineering-ap-pm/

## เนื้อหาใน Deck

- โครงสร้าง Prompt ที่ดี: บอกบทบาท, บริบท, แหล่งข้อมูล, รูปแบบผลลัพธ์ และเกณฑ์คุณภาพ
- การเลือกใช้ Claude Chat, Claude Cowork และ Claude Code ในบริบทงาน PM
- วิธีเลือก Model สำหรับงานเร็ว งานทั่วไป งานวิเคราะห์ลึก และงานที่ต้องตรวจทานสูง
- ตัวอย่าง prompt สำหรับ status update, issue/risk, vendor review, memo, checklist และ prototype
- Speaker notes สำหรับผู้สอน และแหล่งอ้างอิงจาก official Anthropic/Claude documentation

## เปิดใช้งานในเครื่อง

โปรเจกต์นี้เป็น static HTML ไม่มีขั้นตอน build

```bash
python3 -m http.server 4173
```

แล้วเปิด:

```text
http://localhost:4173
```

หรือเปิดไฟล์ `index.html` ใน browser ได้โดยตรง

## Controls

- `Arrow Right`, `Page Down`, หรือ `Space`: ไป slide ถัดไป
- `Arrow Left` หรือ `Page Up`: ย้อนกลับ
- `Home`: ไป slide แรก
- `End`: ไป slide สุดท้าย
- `N`: เปิด/ปิด speaker notes
- `Esc`: ปิด speaker notes
- ปุ่ม `แหล่งอ้างอิง`: เปิด reference notes
- ปุ่มวงกลมด้านขวาบน: fullscreen

## Project Files

- `index.html`: presentation deck
- `styles.css`: visual design, typography, layout และ responsive behavior
- `script.js`: slide navigation, progress, fullscreen และ notes panel
- `speaker-notes.md`: talk track สำหรับผู้สอน
- `sources.md`: official references และ verification notes
- `assets/`: logo, font และ image assets ที่ใช้ใน deck

## Source Policy

ข้อมูลเรื่อง Claude models, Claude Chat, Claude Cowork, Claude Code และ prompt engineering practices อ้างอิงจาก official Anthropic, Claude, Claude Help Center หรือ Claude Platform documentation เท่าที่ตรวจสอบได้ ณ วันที่ 2 กรกฎาคม 2026 รายละเอียดอยู่ใน `sources.md`

## License

This repository is public for viewing and presentation access, but the training content, AP Thailand branding, fonts, logos, and visual assets are not open licensed.

See `LICENSE` for the full terms.
