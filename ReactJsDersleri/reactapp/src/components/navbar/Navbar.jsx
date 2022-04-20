import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className="navList">
        <li className="navListItem">
          <a href="/" className="navListLink">Home</a>
        </li>
        <li className="navListItem">
          <a href="/" className="navListLink">Products</a>
        </li>
        <li className="navListItem">
          <a href="/" className="navListLink">Services</a>
        </li>
        <li className="navListItem">
          <a href="/" className="navListLink">About</a>
        </li>
        <li className="navListItem">
          <a href="/" className="navListLink">Contact</a>
        </li>
      </ul>
    </div>
  )
}
