import Typography from "../../components/Typography/Typography";
import Tags from "../../components/Tags/Tags";
import "./SkillsPage.scss";

const SkillsPage = () => {
  const skillGroups = [
    {
      category: "Development",
      list: [
        "React.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "Express.js",
        "JavaScript (ES6+)",
        "MySQL",
        "Supabase",
      ],
    },
    {
      category: "AI Orchestration & Modern Engineering",
      list: [
        "AI-Collaborative Dev",
        "Environment Sandboxing",
        "Prompt Engineering",
        "Claude/LLM Integration",
        "Automated Unit Testing",
      ],
    },
    {
      category: "Automation & Robotic Process Automation",
      list: [
        "Selenium",
        "Robot Framework",
        "Cypress",
        "Python (pandas/NumPy)",
        "Postman",
        "API Testing",
        "RPA",
        "VM Deployment",
      ],
    },
    {
      category: "Infrastructure",
      list: ["Docker", "Jenkins", "Git", "GitHub Actions", "Cloudflare"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <Typography variant="h1" className="skills__header">
        Skills
      </Typography>
      <div className="skills__container">
        {skillGroups.map((group) => (
          <div key={group.category} className="skills__group">
            <Typography variant="h2" className="skills__category-name">
              {group.category}
            </Typography>
            <div className="skills__list">
              {group.list.map((skill) => (
                <Tags key={skill} text={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
