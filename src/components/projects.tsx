import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Next.js",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Project Two",
    description: "Mobile-first responsive design with Tailwind CSS",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Project Three",
    description: "Full-stack application with database integration",
    image: "/placeholder.svg?height=200&width=400",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Featured Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="bg-gray-900 border-blue-900/20">
            <CardHeader>
              <CardTitle className="text-blue-400">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt={project.title}
                className="aspect-video w-full rounded-lg object-cover"
                height="200"
                src={project.image}
                width="400"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
