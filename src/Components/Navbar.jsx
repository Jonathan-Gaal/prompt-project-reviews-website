
import birdLogo from '../../assets/bird-logo.avif';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f0f0f0',
    }}>
      <img src={birdLogo} alt="Bird Logo" style={{ height: '40px', marginRight: '10px' }} />
      <h1 style={{ margin: 0 }}>My App</h1>
    </nav>
  );
};

export default Navbar;
