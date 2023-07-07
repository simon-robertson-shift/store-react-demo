import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reactive - React Demo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
