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
      "rounded-[4px] hover:bg-gray-5 hover:opacity-75"
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
          This site acts as an interactive resume where you can see everything I've built. The projects tab contains larger, built out endevours, and the blog has small projects and research where I provide more written context.
        </p>
        <p>
          If you'd like to learn more about me, navigate to the about tab :D
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="blog" />
      </FadeIn.Item>
      {/* <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item> */}
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
