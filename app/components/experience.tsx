export default function Experience() {
  return (
    <section id='experience' className='my-8 bg-gray-400/30 p-2 rounded-[12px]'>
      <div className='w-[60vw]'>
        <h2 className='text-3xl mb-2 font-extrabold'>Experience</h2>
        <div>
          <h3 className='text-lg font-bold'>Security and Financial Group Intern</h3>
          <p className='flex justify-between'><span>Navy Federal Credit Union</span><span className='italic'>June 2024 - September 2024</span></p>
          <ul className='list-disc ml-6'>
            <li>Built intranet SharePoint portals for 60+ users (Security, Financial, and Fraud teams), improving information access and onboarding flows in a hybrid work setting.</li>
            <li>Led the development of a JavaScript-based organizational chart web application to dynamically reflect structural changes across all ~24,000 employees, to replace outdated static diagrams.</li>
            <li>Designed UI icons/infographics with reusable web components, reinforcing branding and UX consistency.</li>
            <li>Validated security testing for automated compliance-adherence system using Azure DevOps to manage tickets.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}