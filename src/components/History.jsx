import React from 'react'

function History() {
    return (
        <section className="section">
            <div className="section-title">
                <span className="section-icon">‍🔬</span>
                <h2>ประวัตินักวิทยาศาสตร์</h2>
            </div>

            <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem' }}>
            </p>

            {/* Hans Christian Ørsted */}
            <div className="problem-card" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
                <div className="problem-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                    Hans Christian Ørsted (ฮันส์ คริสเตียน เออร์สเตด)
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 300px) 1fr', gap: '2rem', alignItems: 'start' }}>
                    {/* Portrait */}
                    <div style={{
                        background: 'var(--bg-secondary)',
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <img
                            src="/images/oersted.png"
                            alt="Hans Christian Ørsted"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'var(--radius-sm)',
                                display: 'block'
                            }}
                        />
                        <p style={{
                            textAlign: 'center',
                            marginTop: '0.75rem',
                            fontSize: '0.9rem',
                            color: 'var(--text-muted)',
                            marginBottom: 0
                        }}>
                            14 สิงหาคม 1777 - 9 มีนาคม 1851
                        </p>
                    </div>

                    {/* Biography */}
                    <div>
                        <div className="symbol-card" style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>📚 ประวัติ</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                <strong>ฮันส์ คริสเตียน เออร์สเตด</strong> เป็นนักฟิสิกส์และนักเคมีชาวเดนมาร์ก
                                เกิดที่เมือง Rudkøbing ประเทศเดนมาร์ก เป็นบุตรของเภสัชกร
                                ได้รับการศึกษาด้านเภสัชศาสตร์และปรัชญาธรรมชาติที่มหาวิทยาลัยโคเปนเฮเกน
                            </p>
                        </div>

                        <div className="symbol-card" style={{ marginBottom: '1.5rem', background: 'rgba(59, 130, 246, 0.05)' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>🔬 การค้นพบที่ยิ่งใหญ่</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                                ในวันที่ <strong>21 เมษายน 1820</strong> ขณะสาธิตการทดลองให้นักศึกษาดู
                                เออร์สเตดสังเกตเห็นว่าเข็มทิศเบี่ยงเบนเมื่ออยู่ใกล้สายไฟที่มีกระแสไฟฟ้าไหลผ่าน
                            </p>
                            <div style={{
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                borderRadius: 'var(--radius-sm)',
                                borderLeft: '3px solid var(--accent-primary)'
                            }}>
                                <strong style={{ color: 'var(--accent-primary)' }}>💡 การค้นพบนี้พิสูจน์ว่า:</strong>
                                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.8' }}>
                                    <li>กระแสไฟฟ้าสามารถสร้างสนามแม่เหล็กได้</li>
                                    <li>ไฟฟ้าและแม่เหล็กเป็นปรากฏการณ์ที่เชื่อมโยงกัน</li>
                                    <li>เป็นจุดเริ่มต้นของวิชา<span className="highlight">แม่เหล็กไฟฟ้า</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="symbol-card">
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>🏆 ผลงานและเกียรติยศ</h3>
                            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                                <li>ได้รับการแต่งตั้งเป็นศาสตราจารย์ที่มหาวิทยาลัยโคเปนเฮเกน</li>
                                <li>ก่อตั้งสมาคมส่งเสริมวิทยาศาสตร์แห่งเดนมาร์ก</li>
                                <li>หน่วย <strong>Oersted (Oe)</strong> ในระบบ CGS ตั้งชื่อเพื่อเป็นเกียรติแก่เขา</li>
                                <li>การค้นพบของเขานำไปสู่การพัฒนามอเตอร์ไฟฟ้าและเครื่องกำเนิดไฟฟ้า</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* John Ambrose Fleming */}
            <div className="problem-card" style={{ borderLeft: '4px solid var(--accent-secondary)', marginTop: '2rem' }}>
                <div className="problem-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                    John Ambrose Fleming (จอห์น แอมโบรส เฟลมิง)
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 300px) 1fr', gap: '2rem', alignItems: 'start' }}>
                    {/* Portrait */}
                    <div style={{
                        background: 'var(--bg-secondary)',
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <img
                            src="/images/fleming.png"
                            alt="John Ambrose Fleming"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'var(--radius-sm)',
                                display: 'block'
                            }}
                        />
                        <p style={{
                            textAlign: 'center',
                            marginTop: '0.75rem',
                            fontSize: '0.9rem',
                            color: 'var(--text-muted)',
                            marginBottom: 0
                        }}>
                            29 พฤศจิกายน 1849 - 18 เมษายน 1945
                        </p>
                    </div>

                    {/* Biography */}
                    <div>
                        <div className="symbol-card" style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>📚 ประวัติ</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                <strong>จอห์น แอมโบรส เฟลมิง</strong> เป็นวิศวกรไฟฟ้าและนักฟิสิกส์ชาวอังกฤษ
                                เกิดที่เมือง Lancaster ประเทศอังกฤษ ได้รับการศึกษาจากมหาวิทยาลัย University College London
                                และ University of Cambridge เป็นศาสตราจารย์ด้านวิศวกรรมไฟฟ้าที่ University College London
                            </p>
                        </div>

                        <div className="symbol-card" style={{ marginBottom: '1.5rem', background: 'rgba(16, 185, 129, 0.05)' }}>
                            <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>🖐️ กฎมือขวาของเฟลมิง</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                                เฟลมิงพัฒนา<strong>กฎมือขวา</strong> (Fleming's Right-Hand Rule)
                                เพื่อช่วยจำทิศทางของแรงแม่เหล็ก กระแสไฟฟ้า และสนามแม่เหล็ก
                            </p>
                            <div style={{
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                borderRadius: 'var(--radius-sm)',
                                borderLeft: '3px solid var(--accent-secondary)'
                            }}>
                                <strong style={{ color: 'var(--accent-secondary)' }}>🖐️ กฎมือขวา:</strong>
                                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.8' }}>
                                    <li><strong>นิ้วหัวแม่มือ</strong> → ทิศทางของแรง (Force)</li>
                                    <li><strong>นิ้วชี้</strong> → ทิศทางของสนามแม่เหล็ก (Magnetic Field)</li>
                                    <li><strong>นิ้วกลาง</strong> → ทิศทางของกระแสไฟฟ้า (Current)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="symbol-card">
                            <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>🏆 ผลงานและเกียรติยศ</h3>
                            <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                                <li>ประดิษฐ์<strong>หลอดสุญญากาศ</strong> (Vacuum Tube) ในปี 1904</li>
                                <li>พัฒนา Fleming Valve (Thermionic Valve) ซึ่งเป็นต้นแบบของหลอดอิเล็กทรอนิกส์</li>
                                <li>ที่ปรึกษาด้านไฟฟ้าให้กับบริษัท Marconi Wireless Telegraph</li>
                                <li>ได้รับการแต่งตั้งเป็น Knight Bachelor (Sir) ในปี 1929</li>
                                <li>มีส่วนสำคัญในการพัฒนาระบบสื่อสารวิทยุ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="symbol-card" style={{
                marginTop: '2rem',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                border: '2px solid var(--accent-primary)'
            }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textAlign: 'center' }}>
                    🌟 ผลกระทบต่อโลกยุคใหม่
                </h3>
                <p style={{ lineHeight: '1.8', textAlign: 'center', marginBottom: '1rem' }}>
                    การค้นพบของนักวิทยาศาสตร์ทั้งสองท่านเป็นรากฐานสำคัญของเทคโนโลยีสมัยใหม่
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                    <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>⚡</div>
                        <strong style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem' }}>มอเตอร์ไฟฟ้า</strong>
                        <p style={{ fontSize: '0.9rem', textAlign: 'center', margin: 0 }}>
                            ใช้หลักการแม่เหล็กไฟฟ้าของเออร์สเตด
                        </p>
                    </div>
                    <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>📡</div>
                        <strong style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem' }}>ระบบสื่อสาร</strong>
                        <p style={{ fontSize: '0.9rem', textAlign: 'center', margin: 0 }}>
                            หลอดสุญญากาศของเฟลมิงเป็นพื้นฐาน
                        </p>
                    </div>
                    <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)' }}>
                        <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>💻</div>
                        <strong style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem' }}>อิเล็กทรอนิกส์</strong>
                        <p style={{ fontSize: '0.9rem', textAlign: 'center', margin: 0 }}>
                            นำไปสู่การพัฒนาคอมพิวเตอร์
                        </p>
                    </div>
                </div>
            </div>

            <footer className="section text-center" style={{ marginTop: '2rem' }}>
                <p style={{ marginBottom: 0, fontStyle: 'italic', color: 'var(--text-muted)' }}>
                    "วิทยาศาสตร์ไม่ได้เกิดจากคนคนเดียว แต่เกิดจากความร่วมมือและการสืบทอดความรู้ข้ามยุคสมัย"
                </p>
            </footer>
        </section>
    )
}

export default History