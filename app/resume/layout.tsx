import { NavBar } from "@/components";

export default function ResumeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavBar />
   
        {children}
      </section>
    );
  }
