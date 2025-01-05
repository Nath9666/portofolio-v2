import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="mx-14">
      <Card className="mx-auto max-w-lg bg-gray-900/50 border-blue-900/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-50">
            {t("take_contact")}
          </CardTitle>
          <CardDescription className="text-center">
            {t("contact_description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 text-gray-100">
            <div className="space-y-2">
              <Input
                className="bg-gray-950 border-blue-900/20"
                id="name"
                placeholder={t("name")}
              />
            </div>
            <div className="space-y-2">
              <Input
                className="bg-gray-950 border-blue-900/20"
                id="email"
                placeholder={t("email")}
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                className="bg-gray-950 border-blue-900/20"
                id="message"
                placeholder={t("projet")}
              />
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-500/50">
              {t("send_message")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
