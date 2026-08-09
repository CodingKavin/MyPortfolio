import Typography from "../../components/Typography/Typography";
import Tags from "../../components/Tags/Tags";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./SkillsPage.scss";

const SkillsPage = () => {
  const skillGroups = [
    {
      num: "01",
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
      num: "02",
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
      num: "03",
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
      num: "04",
      category: "Infrastructure",
      list: ["Docker", "Jenkins", "Git", "GitHub Actions", "Cloudflare"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <PageHeader kicker="Skills" heading="What I build with." />
      <div className="skills__container">
        {skillGroups.map((group) => (
          <div key={group.category} className="skills__group">
            <div className="skills__group-header">
              <Typography variant="p3" className="skills__group-num">
                {group.num}
              </Typography>
              <Typography variant="p1" className="skills__category-name">
                {group.category}
              </Typography>
            </div>
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
