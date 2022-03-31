export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>copyright © {currentYear}</p>
    </footer>
  )
}