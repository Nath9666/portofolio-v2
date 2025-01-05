import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
      <h1 className="lg:text-9xl font-custom tracking-tighter md:text-8xl text-7xl">
        {t("title").split("_")[0]}{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {t("title").split("_")[1]}
        </span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {t("welcome_phrase")}
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <Link to="#portfolio">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-500/50">
            {t("view_portfolio")}
          </Button>
        </Link>
        <Link to="#contact">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-500 hover:border-blue-500/50 hover:text-blue-500/50"
          >
            {t("take_contact")}
          </Button>
        </Link>
        <Link to="/book">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-500/50">
            {t("book")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
