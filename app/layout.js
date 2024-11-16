import "./globals.css";
import Link from 'next/link';

export const metadata = {
        title: "Comme vous voulez",
        description: "Bah c'est comme vous voulez",
};

export default function RootLayout({ children }) {
        return (
                <html lang="en">
                        <body className="antialiased p-5">
                                <Link href={"/"}>
                                        <h1 className='font-bold text-xl'>Github Explorer</h1>
                                </Link>

                                <main className='mt-8'>
                                        {children}
                                </main>
                        </body>
                </html>
        );
}
