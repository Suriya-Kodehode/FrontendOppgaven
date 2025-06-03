import { Link } from "react-router-dom";

const notfoundStyle = {
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    color: 'red'
};
const pStyle = {
    fontSize: '1.3rem'
};

const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    borderRadius: '8px',
    border: 'none',
    background: '#055a69',
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none'
};

const NotFound = () => {
    return (
        <div style={notfoundStyle}>
            <h1>404 Page Not Found</h1>
            <p style={pStyle}>The page you are looking for does not exist.</p>
            <Link to="/login" style={buttonStyle}>Go to Login</Link>
        </div>
    );
};
export default NotFound;