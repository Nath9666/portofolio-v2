import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useTranslation } from "react-i18next";

interface Service {
  title: string;
  description: string;
}

export function Services() {
  const { t } = useTranslation();

  const services = t("services_description", {
    returnObjects: true,
  }) as unknown;

  if (!Array.isArray(services)) {
    console.error("services_description is not an array", services);
    return null;
  }

  return (
    <section id="services" className="py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">{t("services")}</h2>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 mx-14">
        {services.map((service: Service) => (
          <Card key={service.title} className="bg-gray-900/50 border-blue-900/20">
            <CardHeader>
              <CardTitle className="text-blue-500">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}