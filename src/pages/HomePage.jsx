import React from 'react'
import IntroductionSection from '../components/IntroductionSection'
import HistorySection from '../components/HistorySection'
import FormulaSection from '../components/FormulaSection'
import DiagramSection from '../components/DiagramSection'
import UnitSanityCheckSection from '../components/UnitSanityCheckSection'
import AmpereDefinitionSection from '../components/AmpereDefinitionSection'

function HomePage() {
    return (
        <>
            <header className="header">
                <h1>แรงแม่เหล็กระหว่างสายไฟที่มีกระแสไฟฟ้าขนาน</h1>
            </header>

            <IntroductionSection />
            <HistorySection />
            <FormulaSection />
            <DiagramSection />
            <UnitSanityCheckSection />
            <AmpereDefinitionSection />


        </>
    )
}

export default HomePage
