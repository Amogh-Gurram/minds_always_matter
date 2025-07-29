import MindsAlwaysMatterLogo from '../assets/MindsAlwaysMatterLogo.png'
import '@fontsource/alice';
import "@fontsource/noto-sans-georgian";
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#2b4323',
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
            }}
        >
            {/* Image on the left */}
            <img
                src={MindsAlwaysMatterLogo}
                className="logo"
                alt="MindsAlwaysMatter logo"
                style={{ height: '13vh', width:'auto' }} // Ensure the image scales properly
            />

            {/* Text in the center */}
            <div>
                <h1
                    style={{
                        fontFamily: 'Alice, serif', // Use the Alice font
                        color: '#ffdaed',
                        textAlign: 'center',
                        fontSize: '42px',
                        marginBottom: '5px',
                    }}
                >
                    Minds Always Matter
                </h1>
                <p
                    style={{
                        fontFamily: 'Georgia, sans-serif',
                        color: '#ffdaed',
                        textAlign: 'center',
                        fontSize: '20px',
                        marginTop: '0px',
                    }}
                >
                    Mental health is always felt in a community with your help.
                </p>
            </div>

            <HamburgerMenu />
        </div>
    );
}