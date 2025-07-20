import { ShadowBox } from "@/app/components/ShadowBox";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Button } from "@/app/components/Button";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@/app/components/Tabs";
import { Photo } from "@/app/components/Photo";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AnimatedMobilePhotos } from "@/app/components/AnimatedMobilePhotos";
import { PageSection } from "../components/PageSection";
import { ContentLink } from "../components/ContentLink";
import { VideoCard } from "../components/VideoCard";

interface Talk {
  title: string;
  description: string;
  event: string;
  url?: string;
}

const talksAndPresentations: Talk[] = [
  {
    title: "The Power of a Second Brain in a Developer's Workflow",
    description:
      "Instead of using AI to solve a problem and forgetting the solution moments later, use a Second Brain to enhance memory retention and discover related information in context of your past experiences. ",
    event: "C3 Dev Fest",
    url: "https://n8n.io/",
  },
  {
    title: "Choosing Blog Topics and Boosting Content with SEO",
    description:
      "Learn the art of selecting high-traffic article topics and mastering effective writing and formatting techniques to maximize engagement and readership.",
    event: "THAT Conference",
    url: "https://n8n.io/",
  },
  {
    title: "The Nest Big Thing in CSS: An Introduction to Native Class Nesting",
    description:
      "Let's explore native class nesting in CSS! We'll cover the fundamentals of nesting, its benefits, and browser support.",
    event: "Dallas Software Developer Meetup",
    url: "https://n8n.io/",
  },
];

export default function SpeakingPage() {
  return (
    <div className="relative">
      <title>Speaking | Omar Shayk</title>
      <div className="relative space-y-16">
        <GridWrapper>
          <h1 className="max-w-3/5 mx-auto mt-16 text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            My conference talks, podcast && video appearances.
          </h1>
        </GridWrapper>

        <div className="text-center">
          <GridWrapper className="py-4">
            <Button
              variant="primary"
              href="https://forms.gle/hyhqN12A2BGForzq6"
            >
              Invite me to speak
            </Button>
          </GridWrapper>
        </div>

        <div>
          {/* Photos */}
          <div className="mb-8 mt-16 hidden items-center justify-center space-x-12 lg:flex">
            <div className="relative">
              <ShadowBox width={278} height={278}></ShadowBox>
              <span className="absolute left-1 top-2 rotate-[-8deg]">
                <Photo
                  width={270}
                  height={270}
                  src="/omar_speaking_headshot.png"
                  alt="Youtube"
                  direction="right"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={412} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[8deg]">
                <Photo
                  width={404}
                  height={270}
                  src="/content_creation_2.jpg"
                  alt="Content creation portable rig"
                  direction="left"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={188} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[-8deg]">
                <Photo
                  width={180}
                  height={270}
                  src="/omar_headshot_3.png"
                  alt="Studio image"
                  direction="right"
                />
              </span>
            </div>
          </div>
          {/* Mobile Photos */}
          <AnimatedMobilePhotos delay={0.1} />
        </div>

        <div className="relative space-y-32">
          <div className="space-y-16">
            <PageSection title={<h2>Talks && Presentations</h2>}>
              <p className="text-sm/8 text-text-primary">
                An arrangement of live and virtual conference and meetup
                presentations.
              </p>
              <div className="mt-8 max-w-2xl space-y-10 text-balance">
                {talksAndPresentations.map((talk) => (
                  <ContentLink
                    key={talk.title}
                    title={talk.title}
                    description={talk.description}
                    href={talk.url}
                  />
                ))}
              </div>
            </PageSection>

            <PageSection title={<h2>Videos && Podcasts</h2>}>
              <p className="text-sm/8 text-text-primary">
                A combination of podcast recordings and educational videos.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                <VideoCard
                  title="BambuLab A1"
                  subtitle="Unboxing & Setup"
                  url="https://youtu.be/9p3TuJ1jr1w?si=IG4ZRTiLzjBc4LrQ"
                  target="_blank"
                  thumbnailUrl="/3d_printing_2.jpg"
                  duration={2108}
                />
                <VideoCard
                  title="Exploring Sharjah's Hidden Gems"
                  subtitle="Used Auto and Spare Parts Market "
                  url="https://youtu.be/9p3TuJ1jr1w?si=IG4ZRTiLzjBc4LrQ"
                  target="_blank"
                  thumbnailUrl="/youtube_2.png"
                  duration={2731}
                />
              </div>
            </PageSection>
          </div>

          {/* Biography */}
          <GridWrapper>
            <section className="relative px-4">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="relative col-span-7 flex flex-col space-y-8">
                  {/* Title */}
                  <div className="col-span-5 flex w-3/4 flex-col items-start space-y-3 text-balance">
                    <div className="text-left text-sm font-medium text-indigo-600">
                      <span>Biography</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-text-primary">
                      Here are a few options for speaker bios
                    </h2>
                  </div>

                  <Tabs defaultTab="first-person">
                    <TabList>
                      <Tab id="first-person" label="First person" />
                      <Tab id="third-person" label="Third person" />
                    </TabList>
                    <TabPanels className="mt-8">
                      <TabPanel id="first-person">
                        <p className="text-base leading-7 text-text-secondary">
                          I’m Omar — a builder, systems thinker, and curious
                          experimenter. I work with tech, automation, and ideas
                          that make life smoother. From drones to AI workflows,
                          I love creating tools that work smarter. I’m here to
                          explore, share, and have real conversations about the
                          process.
                        </p>
                      </TabPanel>
                      <TabPanel id="third-person">
                        <p className="text-base leading-7 text-text-secondary">
                          Omar is a builder, systems thinker, and curious
                          experimenter. He works with tech, automation, and
                          ideas that make life smoother. From drones to AI
                          workflows, he creates tools that work smarter. He’s
                          here to explore, share, and have real conversations
                          about the process.
                        </p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
                <div className="col-span-5 flex flex-col items-start space-y-8">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="text-left text-sm font-medium text-indigo-600">
                      <span>Headshots</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-text-primary">
                      A variety of photos great for speaker headshots
                    </h2>
                  </div>
                  <div className="mt-12 flex w-full space-x-4">
                    <div className="relative">
                      <ShadowBox width={200} height={200}></ShadowBox>
                      <img
                        className="absolute left-1 top-2 h-[186px] w-[186px] rotate-[9deg] rounded-lg object-cover shadow"
                        src="/omar_headshot.png"
                        alt=""
                      />
                    </div>

                    <div className="relative">
                      <ShadowBox width={200} height={200}></ShadowBox>
                      <img
                        className="absolute left-1 top-2 h-[186px] w-[186px] rotate-[-8deg] rounded-lg object-cover shadow"
                        src="/omar_headshot_2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </GridWrapper>
        </div>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
