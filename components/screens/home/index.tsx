import { DeployButton } from "@/components/deploy";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { cn } from "@/lib/cn";
import { Link } from "next-view-transitions";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

const NavButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className={cn(
      "px-3 transition-all",
      "hover:opacity-75 hover:bg-gray-5 rounded-[4px]"
    )}
  >
    {children}
  </Link> 
);

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div>
          <div className="flex justify-between">
            <h1>Evan Zimmerman</h1>
            <nav className="flex gap-2">
              <NavButton href="/about"><h1>About</h1></NavButton>
              <NavButton href="/projects"><h1>Projects</h1></NavButton>
              <NavButton href="/blog"><h1>Blog</h1></NavButton>
            </nav>
          </div>
          <h2 className="mt-1">Software & Quantitative Developer · Triathlete · Digital Artist</h2>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          Sylph is a Next.js Portfolio Starter that you can use to create your own portfolio website. It is designed to be minimal, lightweight, and fast. It is
          also highly customizable, so you can easily make it your own. Sylph is perfect for developers, designers, and other creatives who want to showcase
          their work. To start using Sylph, you can follow the guides below.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="blog" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
