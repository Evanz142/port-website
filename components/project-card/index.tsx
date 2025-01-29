import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface ProjectCardProps {
    title: string;
    description: string;
    content: string;
    footer: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, content, footer }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
            <CardFooter>
                <p>{footer}</p>
            </CardFooter>
        </Card>
    );
}

export { ProjectCard };