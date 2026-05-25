import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Confidential",
      period: "2022 - Present",
      positions: [
        {
          title: "Tactical Systems Integration Engineer",
          description: [
            "I work on the strategy, planning, deployment, integration, and testing of complex tactical systems across homeland security, defense, and military environments.",
            "I support Electronic Warfare and defense system deployments involving C2 systems, Counter-UAV systems, border security systems, intercept systems, tactical communication networks, EO/IR systems, and field-based sensor platforms.",
            "I manage installation, configuration, troubleshooting, and validation of tactical systems across land, marine, and mobile covert setups, ensuring reliable performance in demanding operational environments.",
            "I design and support mission-critical communication networks using WiFi/Mesh, microwave, fiber, cellular, and SATCOM solutions for field deployments and testing activities.",
            "I lead test planning, FAT/SAT execution, vendor performance testing, defect tracking, and client demonstrations at military and defense testing facilities.",
            "I conduct Counter-UAV red team exercises using industrial quadcopters and fixed-wing UAVs to assess sensor detection, tracking, and mitigation effectiveness in real-world scenarios.",
          ],
        },
      ],
    },
    {
      company: "neunek",
      period: "2021 - 2022",
      positions: [
        {
          title: "Software Engineer",
          description: [
            "I worked as part of a digital transformation team, building software solutions aligned with client business goals and product strategies.",
            "I analyzed user needs, translated requirements into prototypes, and collaborated with clients, management, and engineering teams to deliver successful projects.",
            "I designed and developed a sports facility management web application for EXPO 2020, supporting operational workflows and user-facing functionality.",
            "I built a fitness application with training and diet planning features, focusing on usability, product structure, and responsive interface design.",
            "I also designed and developed multiple company portfolio websites to showcase business capabilities and improve digital presence.",
          ],
        },
      ],
    },
    {
      company: "Brandie",
      period: "2020 - 2021",
      positions: [
        {
          title: "Software Engineer",
          description: [
            "I developed features for Brandie’s iOS product, helping brands scale word-of-mouth marketing through creator-driven social media campaigns.",
            "I built and maintained iOS application features using Swift and Xcode, including authentication, user profiles, dashboards, photo sharing, rewards, and store functionality.",
            "I integrated Meta APIs for Facebook and Instagram, enabling social media workflows and platform connectivity within the product.",
            "I worked with REST APIs and mobile product flows to support a smooth creator and brand experience across the application.",
          ],
        },
      ],
    },
    {
      company: "LotusDew Wealth and Investment Advisors",
      period: "2020",
      positions: [
        {
          title: "Web Developer Intern",
          description: [
            "I developed a client-facing investment dashboard for a wealth-tech platform, allowing users to view suggestions, save or execute actions, and track investment-related insights.",
            "I built structured data tables and visual charts to help users understand financial recommendations, performance, and profit-and-loss trends more clearly.",
            "I rapidly developed an internal web tool for manually labeling images for the company’s AI engine, improving operational efficiency by 95%.",
            "I optimized the web application for mobile responsiveness, improving usability across different screen sizes and devices.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/omar_headshot.png",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
