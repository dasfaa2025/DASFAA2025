import DateTable from "../components/DateTable";
import Banner from "../assets/singapore-1.jpg";
import PageBanner from "../components/PageBanner";

const ImportantDates = () => {
  return (
    <>
      <PageBanner
        title="Steering Committee Members (May 1, 2023 - April 30, 2025)"
        image={Banner}
      />
      <article className="prose">
        <h1>Important Dates</h1>

        <h2>Conference Dates</h2>
        <DateTable
          values={[
            {
              label: "Main conference",
              date: "May 25-28, 2025",
            },
          ]}
        />

        <h2>Research Papers</h2>
        <DateTable
          values={[
            {
              label: "Abstract submission deadline",
              date: "November 04, 2024",
            },
            {
              label: "Paper submission deadline",
              date: "November 11, 2024",
            },
            {
              label: "Acceptance notification",
              date: "January 16, 2025",
            },
            {
              label: "Camera ready due",
              date: "February 8, 2025",
            },
          ]}
        />

        <h2>Industry Papers</h2>
        <DateTable
          values={[
            {
              label: "Paper submission deadline",
              date: "November 25, 2024",
            },
            {
              label: "Acceptance Notification",
              date: "January 11, 2025",
            },
            {
              label: "Camera ready due",
              date: "February 8, 2025",
            },
          ]}
        />

        <h2>Demo Papers</h2>
        <DateTable
          values={[
            {
              label: "Paper submission deadline",
              date: "December 10, 2024",
            },
            {
              label: "Acceptance notification",
              date: "January 13, 2025",
            },
            {
              label: "Camera ready due",
              date: "February 8, 2025",
            },
          ]}
        />

        <h2>Workshop Proposals</h2>
        <DateTable
          values={[
            {
              label: "Proposal submission deadline",
              date: "November 1, 2024",
            },
            {
              label: "Acceptance notification",
              date: "November 10, 2024",
            },
          ]}
        />

        <h2>Workshop Papers</h2>
        <DateTable
          values={[
            {
              label: "Paper submission deadline",
              date: "Please see the workshop webpage",
            },
            {
              label: "Acceptance notification",
              date: "Please see the workshop webpage",
            },
            {
              label: "Camera ready due",
              date: "Please see the workshop webpage",
            },
            {
              label: "Workshop Date",
              date: "May 25, 2025",
            },
          ]}
        />

        <h2>Tutorial Proposals</h2>
        <DateTable
          values={[
            {
              label: "Proposal submission deadline",
              date: "January 15, 2025",
            },
            {
              label: "Acceptance notification",
              date: "January 18, 2025",
            },
          ]}
        />

        <h2>Ph.D. Comsortium Papers</h2>
        <DateTable
          values={[
            {
              label: "Paper submission deadline",
              date: "January 27, 2025",
            },
            {
              label: "Acceptance notification",
              date: "February 14, 2025",
            },
            {
              label: "Camera ready due",
              date: "TBA",
            },
          ]}
        />

        <blockquote>
          * All deadlines are 23:59 Anywhere on Earth (AoE) time
        </blockquote>
      </article>
    </>
  );
};

export default ImportantDates;
