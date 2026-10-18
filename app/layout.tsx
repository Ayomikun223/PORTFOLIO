export const metadata = {
  title: 'Ayomikun | Portfolio',
  description: 'Portfolio website for Ayomikun, featuring projects and contact information.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
