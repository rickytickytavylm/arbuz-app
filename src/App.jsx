import { Department } from "./components/Department/Department";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

export const App = () => {
  const investmentTeam = [
    {
      id: 1,
      name: "Анна Васильева",
      position: "Операционный директор",
      image: "/src/assets/portfolio_img/Anna.webp",
      socialLinks: ["insta", "linkedin"],
    },
    {
      id: 2,
      name: "Елена Морозова",
      position: "Инвестиционный консультант",
      image: "/src/assets/portfolio_img/Elena.webp",
      socialLinks: ["insta", "linkedin"],
    },
    {
      id: 3,
      name: "Мария Кузнецова",
      position: "Инвестиционный консультант",
      image: "/src/assets/portfolio_img/Maria.webp",
      socialLinks: ["insta", "linkedin"],
    },
    {
      id: 4,
      name: "Алексей Смирнов",
      position: "Инвестиционный консультант",
      image: "/src/assets/portfolio_img/Alex.webp",
      socialLinks: ["linkedin"],
    },
  ];

  const marketingTeam = [
    {
      id: 5,
      name: "Дмитрий Иванов",
      position: "Руководитель отдела маркетинга",
      image: "/src/assets/portfolio_img/Dmitriy.webp",
      socialLinks: ["insta", "linkedin"], // Только LinkedIn
    },
    {
      id: 6,
      name: "Ольга Соколова",
      position: "Главный редактор",
      image: "/src/assets/portfolio_img/Olga.webp",
      socialLinks: ["insta", "linkedin"],
    },
    {
      id: 7,
      name: "Сергей Петров",
      position: "Арт-директор",
      image: "/src/assets/portfolio_img/Serg.webp",
      socialLinks: ["insta", "linkedin"],
    },
    {
      id: 8,
      name: "Наталья Федорова",
      position: "Маркетолог",
      image: "/src/assets/portfolio_img/Nataly.webp",
      socialLinks: ["linkedin"],
    },
  ];

  return (
    <ThemeProvider>
      <div className="container">
        <Header />
        <Hero />
        <main className="main">
          <Department title="Инвестиционный отдел" members={investmentTeam} />
          <Department title="Маркетинг" members={marketingTeam} />
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
