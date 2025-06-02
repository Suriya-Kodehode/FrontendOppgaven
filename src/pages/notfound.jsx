
const notfoundStyle = {
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    color: 'red'
}
const pStyle = {
    fontSize: '1.3rem'
}

const NotFound = () => {
    return (
        <div style={notfoundStyle}>
            <h1>404 Page Not Found</h1>
            <p style={pStyle}>The page you are looking for does not exist.</p>
        </div>
    )
}
export default NotFound;