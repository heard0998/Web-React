import React, { useState } from 'react'

function DiagramSection() {
    const [currentDirection, setCurrentDirection] = useState('same') // 'same' or 'opposite'

    return (
        <section className="section">
            <div className="section-title">
                <span className="section-icon">🎨</span>
                <h2>แผนภาพประกอบ (Diagram)</h2>
            </div>

            <p>
                แผนภาพด้านล่างแสดงสายไฟสองเส้นที่มีกระแสไฟฟ้าไหลผ่าน
                พร้อมทั้งทิศทางของสนามแม่เหล็กและแรงที่เกิดขึ้น
            </p>

            <div className="diagram-container">
                <svg className="diagram-svg" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <rect width="800" height="500" fill="#151b3d" rx="10" />

                    {/* Title */}
                    <text x="400" y="30" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="bold">
                        {currentDirection === 'same' ? 'กระแสไฟฟ้าไหลในทิศทางเดียวกัน (Same Direction)' : 'กระแสไฟฟ้าไหลในทิศทางตรงกันข้าม (Opposite Direction)'}
                    </text>

                    {/* Wire 1 (Left) */}
                    <line x1="200" y1="100" x2="200" y2="400" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" />
                    <text x="200" y="85" textAnchor="middle" fill="#cbd5e1" fontSize="16">สายไฟ 1 (Wire 1)</text>

                    {/* Wire 2 (Right) */}
                    <line x1="600" y1="100" x2="600" y2="400" stroke="#8b5cf6" strokeWidth="8" strokeLinecap="round" />
                    <text x="600" y="85" textAnchor="middle" fill="#cbd5e1" fontSize="16">สายไฟ 2 (Wire 2)</text>

                    {/* Distance indicator */}
                    <line x1="200" y1="450" x2="600" y2="450" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
                    <text x="400" y="475" textAnchor="middle" fill="#ec4899" fontSize="16" fontWeight="bold">a (ระยะห่าง)</text>

                    {/* Current direction arrows - Wire 1 */}
                    {currentDirection === 'same' ? (
                        <>
                            <polygon points="200,150 195,165 205,165" fill="#4ade80" />
                            <polygon points="200,250 195,265 205,265" fill="#4ade80" />
                            <polygon points="200,350 195,365 205,365" fill="#4ade80" />
                            <text x="230" y="255" fill="#4ade80" fontSize="18" fontWeight="bold">I₁ ↓</text>
                        </>
                    ) : (
                        <>
                            <polygon points="200,150 195,135 205,135" fill="#4ade80" />
                            <polygon points="200,250 195,235 205,235" fill="#4ade80" />
                            <polygon points="200,350 195,335 205,335" fill="#4ade80" />
                            <text x="230" y="255" fill="#4ade80" fontSize="18" fontWeight="bold">I₁ ↑</text>
                        </>
                    )}

                    {/* Current direction arrows - Wire 2 */}
                    <polygon points="600,150 595,165 605,165" fill="#4ade80" />
                    <polygon points="600,250 595,265 605,265" fill="#4ade80" />
                    <polygon points="600,350 595,365 605,365" fill="#4ade80" />
                    <text x="630" y="255" fill="#4ade80" fontSize="18" fontWeight="bold">I₂ ↓</text>

                    {/* Magnetic field symbols around Wire 1 */}
                    {/* Using ⊙ (out of page) and ⊗ (into page) */}
                    <g fill="#fbbf24" fontSize="24">
                        <text x="150" y="255" textAnchor="middle">⊗</text>
                        <text x="250" y="255" textAnchor="middle">⊙</text>
                        <text x="175" y="220" textAnchor="middle">⊗</text>
                        <text x="225" y="290" textAnchor="middle">⊙</text>
                    </g>

                    {/* Magnetic field symbols around Wire 2 */}
                    <g fill="#fbbf24" fontSize="24">
                        <text x="550" y="255" textAnchor="middle">⊗</text>
                        <text x="650" y="255" textAnchor="middle">⊙</text>
                        <text x="575" y="220" textAnchor="middle">⊗</text>
                        <text x="625" y="290" textAnchor="middle">⊙</text>
                    </g>

                    {/* Force arrows */}
                    {currentDirection === 'same' ? (
                        <>
                            {/* Attraction - arrows pointing toward each other */}
                            <line x1="200" y1="250" x2="280" y2="250" stroke="#4ade80" strokeWidth="4" markerEnd="url(#arrowhead-green)" />
                            <line x1="600" y1="250" x2="520" y2="250" stroke="#4ade80" strokeWidth="4" markerEnd="url(#arrowhead-green)" />
                            <text x="340" y="240" textAnchor="middle" fill="#4ade80" fontSize="18" fontWeight="bold">แรงดึงดูด (Attraction)</text>
                            <text x="340" y="265" textAnchor="middle" fill="#4ade80" fontSize="14">F</text>
                        </>
                    ) : (
                        <>
                            {/* Repulsion - arrows pointing away from each other */}
                            <line x1="200" y1="250" x2="120" y2="250" stroke="#f87171" strokeWidth="4" markerEnd="url(#arrowhead-red)" />
                            <line x1="600" y1="250" x2="680" y2="250" stroke="#f87171" strokeWidth="4" markerEnd="url(#arrowhead-red)" />
                            <text x="400" y="240" textAnchor="middle" fill="#f87171" fontSize="18" fontWeight="bold">แรงผลัก (Repulsion)</text>
                            <text x="400" y="265" textAnchor="middle" fill="#f87171" fontSize="14">F</text>
                        </>
                    )}

                    {/* Arrow markers */}
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                            <polygon points="0,0 10,5 0,10" fill="#ec4899" />
                        </marker>
                        <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                            <polygon points="0,0 10,5 0,10" fill="#4ade80" />
                        </marker>
                        <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                            <polygon points="0,0 10,5 0,10" fill="#f87171" />
                        </marker>
                    </defs>
                </svg>

                <div className="diagram-controls">
                    <button
                        className={`diagram-button ${currentDirection === 'same' ? 'active' : ''}`}
                        onClick={() => setCurrentDirection('same')}
                    >
                        ⬇️⬇️ กระแสทิศทางเดียวกัน
                    </button>
                    <button
                        className={`diagram-button ${currentDirection === 'opposite' ? 'active' : ''}`}
                        onClick={() => setCurrentDirection('opposite')}
                    >
                        ⬆️⬇️ กระแสทิศทางตรงกันข้าม
                    </button>
                </div>
            </div>

            <div className="symbol-card" style={{ marginTop: '2rem' }}>
                <h3>🔍 คำอธิบายสัญลักษณ์ในแผนภาพ</h3>
                <div className="symbol-grid" style={{ marginTop: '1rem' }}>
                    <div style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: '#4ade80', fontSize: '1.5rem' }}>↓ ↑</span>
                        <strong> ลูกศรเขียว:</strong> ทิศทางของกระแสไฟฟ้า (Current direction)
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: '#fbbf24', fontSize: '1.5rem' }}>⊙ ⊗</span>
                        <strong> สัญลักษณ์เหลือง:</strong> สนามแม่เหล็ก (⊙ ออกจากหน้ากระดาษ, ⊗ เข้าหน้ากระดาษ)
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: '#4ade80', fontSize: '1.5rem' }}>→ ←</span>
                        <strong> ลูกศรเขียว:</strong> แรงดึงดูด (Attraction force)
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: '#f87171', fontSize: '1.5rem' }}>← →</span>
                        <strong> ลูกศรแดง:</strong> แรงผลัก (Repulsion force)
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiagramSection
