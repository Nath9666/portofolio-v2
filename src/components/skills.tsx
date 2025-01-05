import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git",
];

export function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className=" py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">{t("skills")}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-14">
        {skills.map((skill) => (
          <Card key={skill} className="bg-gray-900/50 border-blue-900/20">
            <CardContent className="flex items-center justify-center p-6">
              <span className="text-lg font-medium text-blue-500">{skill}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
