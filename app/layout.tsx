import type { Metadata } from "next";
import 'swiper/css';
import './css/themify-icons.css';
import './css/font-awesome.min.css';
import './css/flaticon.css';
import './css/bootstrap.min.css';
import './css/style.css';


export const metadata: Metadata = {
  title: "Trần Ngọc Thắng s2 Phan Ngọc Huyền",
  description: "We Are Getting Married Apr 28,2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
