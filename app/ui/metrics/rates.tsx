"use client";
import { ApplicationProp } from "@/app/lib/definitions";
import RateItem from "./rate-item";

interface RejectionRateProps {
  applications: ApplicationProp[];
}

const Rates: React.FC<RejectionRateProps> = ({ applications }) => {
  const successCategories = [
    {
      name: "High (Excellent)",
      range: "30% or higher",
      description:
        "You're hitting the mark with your applications and impressing employers.",
    },
    {
      name: "Moderate (Good)",
      range: "15-30%",
      description:
        "You're doing well, but there's still room to improve and fine-tune your approach.",
    },
    {
      name: "Average",
      range: "5-15%",
      description:
        "You're getting some responses, but there's definite room for improvement in your application strategy.",
    },
    {
      name: "Low (Needs Improvement)",
      range: "Below 5%",
      description:
        "You need to rethink your strategy and possibly upgrade your qualifications and materials.",
    },
  ];

  const rejectionCategories = [
    {
      name: "Ideal Fit",
      range: "0%",
      description:
        "If you're experiencing no rejected applications, it means every job application aligns perfectly with your qualifications, skills, and the employer's needs. Keep up the good work!",
    },
    {
      name: "Minimal (Strong Compatibility)",
      range: "1% - 10%",
      description:
        "A minimal rejection rate indicates that the majority of your applications closely match the job criteria. You're on the right track!",
    },
    {
      name: "Moderate (Partial Alignment)",
      range: "11% - 25%",
      description:
        "A moderate rejection rate suggests that some of your applications are close, but not quite hitting the mark. Consider fine-tuning your application strategy and addressing any gaps in skills or experience.",
    },
    {
      name: "High (Marginally Qualified)",
      range: "26% - 50%",
      description:
        "A high rejection rate signals that a significant portion of your applications lack essential qualifications or experience. It's time to reassess your approach and possibly upgrade your skills or qualifications.",
    },
    {
      name: "Very High (Not Suitable)",
      range: "51% and above",
      description:
        "A very high rejection rate indicates that many of your applications are not meeting fundamental job requirements or aligning with employers' needs. Take this as an opportunity to rethink your strategy and focus on positions where you're a better fit, while also considering seeking feedback on your applications to pinpoint areas for improvement. Additionally, reevaluate your resume, update your profile including LinkedIn, boost your skills by obtaining certificates or building projects to showcase your capabilities.",
    },
  ];

  const rates = [
    {
      status: "interviewing",
      categories: successCategories,
      title: "Probability of getting job offer",
      modalTitle: "Job Application Success Categories",
    },
    {
      status: "rejected",
      categories: rejectionCategories,
      title: "Application rejected rate",
      modalTitle: "Job Application Rejection Categories",
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-center italic mb-2 md:mb-4 text-base md:text-lg">
        Job Application Statistics:
      </h2>
      <div className="flex flex-col md:flex-row md:gap-4 w-full">
        {rates.map((rate, index) => (
          <RateItem
            key={index}
            status={rate.status}
            categories={rate.categories}
            title={rate.title}
            applications={applications}
            modalTitle={rate.modalTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Rates;
