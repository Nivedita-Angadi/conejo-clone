import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Adult Therapy in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD provides adult therapy in Santa Monica, California, supporting clients with anxiety, panic, trauma, burnout, and perfectionism through a warm, collaborative, and grounded approach.",
  keywords: [
    "Dr. Maya Reynolds",
    "therapy in Santa Monica",
    "adult therapy Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR therapy Santa Monica",
    "burnout therapy",
    "perfectionism therapy",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}