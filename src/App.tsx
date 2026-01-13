import { useState } from 'react'
import {
    Home01, Flag01, Users01,
    AcmeCorpBadge, LayersBadge,
    SocialSpotifyBrandDefault, SocialFacebookBrandDefault
} from './components/icons'
import { Button } from './components/Button'

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <div
            data-theme={theme}
            style={{
                backgroundColor: 'var(--colors-background-bg-primary)',
                color: 'var(--colors-text-text-primary-900)',
                minHeight: '100vh',
                padding: '2rem',
                transition: 'background-color 0.3s, color 0.3s'
            }}>

            <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>Untitled UI</h1>
                    <p style={{ opacity: 0.6, fontSize: '1.125rem' }}>Design System Foundations</p>
                </div>
                <button
                    onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
                    style={{
                        backgroundColor: 'var(--colors-background-bg-brand-solid)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </header>

            <main style={{ display: 'grid', gap: '3rem' }}>

                {/* BUTTONS SECTION */}
                <section>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--colors-border-border-secondary)' }}>
                        Buttons
                    </h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 500 }}>Sizes</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', padding: '1.5rem', backgroundColor: 'var(--colors-background-bg-secondary)', borderRadius: '0.75rem', border: '1px solid var(--colors-border-border-secondary)' }}>
                            <Button size="sm">Button sm</Button>
                            <Button size="md">Button md</Button>
                            <Button size="lg">Button lg</Button>
                            <Button size="xl">Button xl</Button>
                            <Button size="2xl">Button 2xl</Button>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 500 }}>Hierarchy</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', padding: '1.5rem', backgroundColor: 'var(--colors-background-bg-secondary)', borderRadius: '0.75rem', border: '1px solid var(--colors-border-border-secondary)' }}>
                            <Button hierarchy="primary">Primary</Button>
                            <Button hierarchy="secondary">Secondary</Button>
                            <Button hierarchy="tertiary">Tertiary</Button>
                            <Button hierarchy="destructivePrimary">Destructive</Button>
                            <Button hierarchy="destructiveSecondary">Destructive Sec</Button>
                            <Button hierarchy="linkColor">Link Color</Button>
                            <Button hierarchy="linkGray">Link Gray</Button>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 500 }}>With Icons</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', padding: '1.5rem', backgroundColor: 'var(--colors-background-bg-secondary)', borderRadius: '0.75rem', border: '1px solid var(--colors-border-border-secondary)' }}>
                            <Button size="md" iconLeading={<Home01 className="w-5 h-5" style={{ width: 20, height: 20 }} />}>Leading Icon</Button>
                            <Button size="md" iconTrailing={<Users01 className="w-5 h-5" style={{ width: 20, height: 20 }} />}>Trailing Icon</Button>
                            <Button size="md" iconOnly><Home01 className="w-5 h-5" style={{ width: 20, height: 20 }} /></Button>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 500 }}>States</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', padding: '1.5rem', backgroundColor: 'var(--colors-background-bg-secondary)', borderRadius: '0.75rem', border: '1px solid var(--colors-border-border-secondary)' }}>
                            <Button hierarchy="primary" disabled>Disabled</Button>
                            <Button hierarchy="primary" loading>Loading</Button>
                            <Button hierarchy="secondary" disabled>Disabled</Button>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--colors-border-border-secondary)' }}>
                        Semantic Colors
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        <ColorCard name="Text Primary" variable="--colors-text-text-primary-900" />
                        <ColorCard name="Text Secondary" variable="--colors-text-text-secondary-700" />
                        <ColorCard name="Text Brand" variable="--colors-text-text-brand-primary-900" />
                        <ColorCard name="Background Brand" variable="--colors-background-bg-brand-section" />
                        <ColorCard name="Border Brand" variable="--colors-border-border-brand" />
                        <ColorCard name="Error Solid" variable="--colors-background-bg-error-solid" />
                        <ColorCard name="Success Solid" variable="--colors-background-bg-success-solid" />
                        <ColorCard name="Warning Solid" variable="--colors-background-bg-warning-solid" />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--colors-border-border-secondary)' }}>
                        Brand Primitives
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem' }}>
                        {[25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(step => (
                            <ColorCard key={step} name={`Brand ${step}`} variable={`--colors-brand-${step}`} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--colors-border-border-secondary)' }}>
                        Icons Preview (Generated)
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '2rem' }}>
                        <IconCard name="Home01">
                            <Home01 className="w-6 h-6" style={{ width: 24, height: 24, stroke: 'var(--colors-text-text-primary-900)' }} />
                        </IconCard>
                        <IconCard name="Acme Corp">
                            <AcmeCorpBadge style={{ width: 100, height: 'auto' }} />
                        </IconCard>
                        <IconCard name="Layers">
                            <LayersBadge style={{ width: 100, height: 'auto' }} />
                        </IconCard>
                        <IconCard name="Spotify">
                            <SocialSpotifyBrandDefault style={{ width: 24, height: 24 }} />
                        </IconCard>
                        <IconCard name="Facebook">
                            <SocialFacebookBrandDefault style={{ width: 24, height: 24 }} />
                        </IconCard>
                        <IconCard name="Flag 01">
                            <Flag01 style={{ width: 24, height: 24, stroke: 'var(--colors-text-text-primary-900)' }} />
                        </IconCard>
                        <IconCard name="Users 01">
                            <Users01 style={{ width: 24, height: 24, stroke: 'var(--colors-text-text-primary-900)' }} />
                        </IconCard>
                    </div>
                </section>
            </main>
        </div>
    )
}

function ColorCard({ name, variable }: { name: string, variable: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div
                style={{
                    height: '6rem',
                    borderRadius: '0.75rem',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    backgroundColor: `var(${variable})`,
                    border: '1px solid rgba(0,0,0,0.05)'
                }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>{name}</span>
                <code style={{ fontSize: '0.75rem', opacity: 0.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{variable}</code>
            </div>
        </div>
    )
}


function IconCard({ name, children }: { name: string, children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--colors-border-border-secondary)', borderRadius: '0.5rem' }}>
            {children}
            <span style={{ fontSize: '0.75rem', color: 'var(--colors-text-text-secondary-700)', textAlign: 'center' }}>{name}</span>
        </div>
    )
}

export default App
