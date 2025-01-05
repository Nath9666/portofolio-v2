import { BrandicoFacebookRect } from "./icon/BrandicoFacebookRect";
import { LogosInstagram } from "./icon/LogosInstagram";
import { BrandicoLinkedinRect } from "./icon/BrandicoLinkedinRect";
import { BrandicoTwitterBird } from "./icon/BrandicoTwitterBird";

export function Footer() {
  const Year = new Date().getFullYear();
  //BUG:Mettre a jour dès que l'on peut
  const info = [
    {
      visible: true,
      icon: BrandicoFacebookRect,
      link: "https://www.facebook.com/example",
    },
    {
      visible: true,
      icon: LogosInstagram,
      link: "https://www.instagram.com/example",
    },
    {
      visible: true,
      icon: BrandicoLinkedinRect,
      link: "https://www.linkedin.com/company/example",
    },
    {
      visible: true,
      icon: BrandicoTwitterBird,
      link: "https://twitter.com/example",
    },
  ];

  return (
    <footer className="flex flex-col h-1/6 py-4 justify-center items-center z-50 bg-gradient-to-b from-transparent to-blue-900/5 backdrop-blur">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          {info.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-blue-500 p-2 hover:text-white rounded-full"
              >
                <Icon className="h-6 w-auto" />
              </a>
            );
          })}
        </div>
      </div>
      <img
        src="/image/Logo_alpha.png"
        alt="Logo"
        width={2160}
        height={1620}
        className="sm:w-1/4 w-1/3 rounded-md m-4"
      />
      <p>2023-{Year}</p>
    </footer>
  );
}
