import React from 'react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ border: '1px solid blue'}}>
          [header]
        </header>
        <main>
          {children}
        </main>
        <footer style={{ border: '1px solid blue'}}>
          [footer]
        </footer>
      </body>
    </html>
  )
}
