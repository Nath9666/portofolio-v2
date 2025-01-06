import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "./ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FranceFlag } from "./icon/France";
import { EnglandFlag } from "./icon/England";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [Languagepannel, setLanguagepannel] = React.useState(false);

  const closeSheet = () => setIsOpen(false);
  const switchLangagepannel = () => setLanguagepannel(!Languagepannel);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguagepannel(false);
  };

  return (
    <header className="p-4 sticky top-0 z-50 w-full border-b border-blue-900/10 bg-blue-900/5 backdrop-blur">
      <div className="flex justify-between items-center h-16">
        <Link to="/" className="flex items-center">
          <img
            src="/image/Logo_alpha.png"
            alt="Logo"
            className="h-20 md:h-14"
          />
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-14 w-14" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-950 text-gray-50">
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>
            <nav className="flex flex-col gap-4 p-4">
              <Link
                to="/portfolio"
                className="text-lg hover:text-blue-500"
                onClick={closeSheet}
              >
                {t("portfolio")}
              </Link>
              <Link
                to="/services"
                className="text-lg hover:text-blue-500"
                onClick={closeSheet}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-lg hover:text-blue-500"
                onClick={closeSheet}
              >
                Contact
              </Link>
              <Link
                to="/book"
                className="text-lg hover:text-blue-500"
                onClick={closeSheet}
              >
                Book a date
              </Link>
              <div className="relative">
                <Button
                  variant="ghost"
                  className="border-white border-2 rounded-xl hover:border-blue-500/50 hover:text-blue-500/50"
                  onClick={switchLangagepannel}
                >
                  {t("change_language")}
                </Button>
                {Languagepannel && (
                  <div className="w-full mt-2 rounded-xl p-4 shadow-lg">
                    <div className="flex flex-col">
                      <div
                        className="flex items-center mb-2 hover:bg-blue-500/50 p-2 rounded-xl"
                        onClick={() => changeLanguage("fr")}
                      >
                        <FranceFlag className="h-6 w-6 mr-2" />
                        <p>{t("french")}</p>
                      </div>
                      <div
                        className="flex items-center hover:bg-blue-500/50 p-2 rounded-xl"
                        onClick={() => changeLanguage("en")}
                      >
                        <EnglandFlag className="h-6 w-6 mr-2" />
                        <p>{t("english")}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link to="/portfolio" className="text-sm hover:text-blue-500">
            {t("portfolio")}
          </Link>
          <Link to="/services" className="text-sm hover:text-blue-500">
            {t("services")}
          </Link>
          <Link to="/contact" className="text-sm hover:text-blue-500">
            {t("contact")}
          </Link>
          <Link to="/book" className="text-sm hover:text-blue-500">
            {t("book")}
          </Link>
          <div className="relative">
            <Button
              variant="ghost"
              className="border-white border-2 rounded-xl hover:border-blue-500/50 hover:text-blue-500/50"
              onClick={switchLangagepannel}
            >
              {t("change_language")}
            </Button>
            {Languagepannel && (
              <div className="absolute mt-2 bg-blue-800/5 rounded-xl p-4 shadow-lg">
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center mb-2 hover:bg-blue-500/50 p-2 rounded-xl"
                    onClick={() => changeLanguage("fr")}
                  >
                    <FranceFlag className="h-6 w-6 mr-2" />
                    <p>{t("french")}</p>
                  </div>
                  <div
                    className="flex items-center hover:bg-blue-500/50 p-2 rounded-xl"
                    onClick={() => changeLanguage("en")}
                  >
                    <EnglandFlag className="h-6 w-6 mr-2" />
                    <p>{t("english")}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
