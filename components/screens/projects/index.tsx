import * as FadeIn from "@/components/motion/staggers/fade";
import { ProjectCard } from "@/components/project-card";

export default function Projects() {
    return (
        <FadeIn.Container>
        <FadeIn.Item>
            <ProjectCard title={"title"} description={"description"} content={"content"} footer={"footer"} />
        </FadeIn.Item>
        </FadeIn.Container>
    );
}