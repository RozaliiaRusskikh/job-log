const Tips = () => {
  const tips = [
    {
      step: "Self-assessment",
      description:
        "Reflect on the positions you've been applying for and the qualifications they require. Are they aligned with your skills, experience, and career goals? Identify any gaps between your profile and the job requirements.",
    },
    {
      step: "Rethink your strategy",
      description:
        "Consider narrowing down your job search to positions where you're a better fit. Look for roles that match your skills and experience more closely, increasing the likelihood of success.",
    },
    {
      step: "Resume review",
      description:
        "Update your resume to highlight your most relevant skills, experiences, and achievements. Tailor each resume to the specific job you're applying for, emphasizing how your background aligns with the requirements of the position.",
    },
    {
      step: "LinkedIn profile optimization",
      description:
        "Ensure your LinkedIn profile is up to date with your latest experiences, skills, and accomplishments. Use keywords relevant to your target positions to improve visibility. Your LinkedIn profile is often the first impression employers have of you.",
    },
    {
      step: "Skills enhancement",
      description:
        "Identify any skills gaps that may be hindering your job search. Consider acquiring new skills or enhancing existing ones through online courses, workshops, or certifications. Platforms like Coursera, LinkedIn Learning, or Udemy offer a wide range of courses to choose from.",
    },
    {
      step: "Certifications",
      description:
        "Pursue certifications relevant to your field or desired job roles. Certifications not only validate your skills but also demonstrate your commitment to professional development. Research industry-recognized certifications that can boost your credibility.",
    },
    {
      step: "Build projects",
      description:
        "Hands-on projects are a great way to showcase your skills and differentiate yourself from other candidates. Consider undertaking personal or freelance projects related to your field to demonstrate your capabilities. Document these projects on your resume and LinkedIn profile.",
    },
    {
      step: "Networking",
      description:
        "Expand your professional network by attending industry events, joining relevant online communities, and reaching out to professionals in your field. Networking can provide valuable insights, referrals, and job opportunities that may not be advertised publicly.",
    },
    {
      step: "Seek feedback",
      description:
        "Don't hesitate to ask for feedback from recruiters, hiring managers, or trusted mentors on your application materials and interview performance. Constructive feedback can help you identify areas for improvement and refine your approach.",
    },
    {
      step: "Stay persistent and positive",
      description:
        "Job searching can be challenging, but maintaining a positive attitude and staying persistent are crucial. Celebrate small victories along the way and learn from setbacks to continuously improve your job search strategy.",
    },
  ];
  return (
    <div>
      <h2 id="job-hunt-tactics">Optimizing Job Hunt: 10 Essential Tactics</h2>
      {tips.map((tip, index) => {
        return (
          <article key={index}>
            <h1>{tip.step}</h1>
            <p>{tip.description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Tips;
