import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";

interface Items {
  title: string;
}

export function Portfolio() {
  const { t } = useTranslation();

  const portfolio_items: Items[] = t("portfolio_items", {
    returnObjects: true,
  }) as Items[];

  if (!Array.isArray(portfolio_items)) {
    console.error("portfolio_items is not an array", portfolio_items);
    return null;
  }

  const portfolioItems = [
    {
      id: 1,
      title: portfolio_items[0].title,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: portfolio_items[1].title,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: portfolio_items[2].title,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: portfolio_items[3].title,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: portfolio_items[4].title,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: portfolio_items[5].title,
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <section id="portfolio" className="flex py-24 flex-col">
      <h2 className="mb-12 text-center text-3xl font-bold">Portfolio</h2>
      <div className="grid gap-6 md:grid-cols-3 lg:flex lg:flex-auto grid-cols-2 mx-14">
        {portfolioItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden bg-gray-900/50 border-blue-900/20 lg:w-full"
          >
            <CardContent className="p-0">
              <img
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full object-cover transition-all hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-500">
                  {item.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
