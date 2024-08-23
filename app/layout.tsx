import '@styles/globals.css';

export const metadata = {
  title: 'Promptnest',
  description: 'Discover & Share the perfect prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />

          <main className="app">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
