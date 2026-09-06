import {
  ACHIVEMENTS,
  EXPERIENCES,
  PROFILE,
  PROFILE_DETAIL,
} from "../../constants/About";

export default function About() {
  return (
    <section
      id="About"
      className={`flex flex-col w-full h-full p-10 pb-20 gap-5 overflow-auto scrollbar-custom`}
    >
      <div className={`relative rounded-xl`}>
        <img
          src={"/background.png"}
          className={`w-full aspect-2/1 max-h-60 rounded-xl opacity-80`}
        />
        <div
          className={`absolute backdrop-blur-[4px] w-full aspect-2/1 max-h-60 top-0 rounded-xl`}
        />
      </div>
      <div className={`flex flex-col gap-15`}>
        {/* profile */}
        <div className={`flex flex-col gap-3`}>
          <div className={`text-32-40 text-text-primary font-bold`}>
            {PROFILE.name}
          </div>
          <div className={`flex flex-col gap-5`}>
            <div className={`text-text-secondary text-18-20 font-medium`}>
              "{PROFILE.overview}"
            </div>
            <div className={`text-text-secondary text-12-14 font-light`}>
              {PROFILE.description}
            </div>
          </div>
        </div>

        {/* profile detail */}
        <div className={`flex flex-col gap-10`}>
          {/* info */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-y-11`}>
            {PROFILE_DETAIL.map((item) => {
              const Icon = item.icon;

              return (
                <ProfileItem
                  key={item.title}
                  Icon={Icon}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
          </div>

          <div className={`w-full h-px bg-border`} />

          {/* experience */}
          <div className={`flex flex-col gap-10 sm:flex-row sm:gap-0`}>
            {EXPERIENCES.map((item, index) => (
              <div
                key={item.section}
                className={`flex-1 flex flex-col gap-10 sm:flex-row sm:gap-0`}
              >
                <ExperienceItem
                  section={item.section}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                />
                {EXPERIENCES.length - 1 > index && (
                  <div className={`w-full h-px bg-border block sm:hidden`} />
                )}
              </div>
            ))}
          </div>

          <div className={`w-full h-px bg-border`} />

          {/* Achivement */}
          <div className={`flex flex-col gap-10 sm:flex-row sm:gap-0`}>
            {ACHIVEMENTS.map((item, index) => (
              <div
                key={item.section}
                className={`flex-1 flex flex-col gap-10 sm:flex-row sm:gap-0`}
              >
                <AchivementItem
                  section={item.section}
                  contents={item.contents}
                />
                {ACHIVEMENTS.length - 1 > index && (
                  <div className={`w-full h-px bg-border block sm:hidden`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProfileItem = ({
  Icon,
  title,
  content,
}: {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  title: string;
  content: string;
}) => {
  return (
    <div key={title} className={`flex-1 flex flex-col gap-1`}>
      <div className={`flex flex-row items-center gap-2`}>
        <Icon color="#888888" />
        <div className={`text-[12px] font-medium text-text-muted`}>{title}</div>
      </div>
      <div className={`text-16-18 font-semibold`}>{content}</div>
    </div>
  );
};

const ExperienceItem = ({
  section,
  title,
  description,
  date,
}: {
  section: string;
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <div key={section} className={`flex flex-col flex-1 gap-5`}>
      <div className={`text-18-20 font-bold text-text-secondary`}>
        {section}
      </div>
      <div className={`flex flex-col gap-2`}>
        <div className={`flex flex-col`}>
          <div className={`text-text-primary text-14-16 font-semibold`}>
            {title}
          </div>
          <div className={`text-12-14 font-medium text-text-secondary`}>
            {description}
          </div>
        </div>
        <div className={`text-12-14 text-text-muted font-medium`}>{date}</div>
      </div>
    </div>
  );
};

const AchivementItem = ({
  section,
  contents,
}: {
  section: string;
  contents: {
    title: string;
    date: string;
    award: string | null;
  }[];
}) => {
  return (
    <div key={section} className={`flex flex-col flex-1 gap-5 pr-15`}>
      <div className={`text-18-20 font-bold text-text-secondary`}>
        {section}
      </div>
      <div className={`flex flex-col gap-8`}>
        {contents.map((content) => (
          <div
            key={content.title}
            className={`flex flex-col gap-2 lg:flex-row justify-between`}
          >
            <div className={`flex flex-col`}>
              <div className={`text-14-16 text-text-primary font-semibold`}>
                {content.title}
              </div>
              {content.award && (
                <div className={`text-12-14 text-text-secondary font-medium`}>
                  {content.award}
                </div>
              )}
            </div>
            <div className={`text-12-14 text-text-muted font-medium`}>
              {content.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
